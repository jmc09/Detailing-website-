import { type User, type InsertUser, type Service, type InsertService, type Appointment, type InsertAppointment, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services
  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Appointments
  getAppointments(): Promise<Appointment[]>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined>;
  
  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Map<string, Service>;
  private appointments: Map<string, Appointment>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.appointments = new Map();
    this.contacts = new Map();
    
    // Initialize with default services
    this.initializeServices();
  }

  private initializeServices() {
    const defaultServices: InsertService[] = [
      {
        name: "Basic Clean",
        description: "Perfect for regular maintenance",
        price: 5900, // $59.00
        features: ["Exterior wash", "Interior vacuum", "Window cleaning", "Tire shine"],
        category: "basic"
      },
      {
        name: "Interior Detailing",
        description: "Complete interior cleaning including leather conditioning, carpet shampooing, and dashboard restoration",
        price: 8900, // $89.00
        features: ["Leather conditioning", "Carpet deep cleaning", "Dashboard restoration"],
        category: "complete"
      },
      {
        name: "Exterior Detailing",
        description: "Professional exterior wash, wax, and paint correction to restore your car's showroom shine",
        price: 12900, // $129.00
        features: ["Premium wash & wax", "Paint correction", "Tire & rim cleaning"],
        category: "complete"
      },
      {
        name: "Complete Detail",
        description: "Comprehensive interior & exterior detailing",
        price: 14900, // $149.00
        features: ["Everything in Basic", "Paint correction", "Leather conditioning", "Engine bay cleaning", "6-month protection"],
        category: "complete"
      },
      {
        name: "Premium Package",
        description: "Complete interior and exterior detailing with ceramic coating protection",
        price: 24900, // $249.00
        features: ["Full interior & exterior", "Ceramic coating", "6-month warranty"],
        category: "luxury"
      },
      {
        name: "Luxury Package",
        description: "Ultimate protection & shine",
        price: 29900, // $299.00
        features: ["Everything in Complete", "Ceramic coating", "Paint protection film", "12-month warranty", "Priority booking"],
        category: "luxury"
      }
    ];

    defaultServices.forEach(service => {
      this.createService(service);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService, 
      id,
      features: insertService.features || []
    };
    this.services.set(id, service);
    return service;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      ...insertAppointment, 
      id,
      status: insertAppointment.status || "confirmed",
      specialRequests: insertAppointment.specialRequests || null,
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      const updatedAppointment = { ...appointment, status };
      this.appointments.set(id, updatedAppointment);
      return updatedAppointment;
    }
    return undefined;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
