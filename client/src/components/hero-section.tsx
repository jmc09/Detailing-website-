import { Calendar, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-automotive-blue to-automotive-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Premium Auto Detailing Services</h2>
            <p className="text-xl mb-8 text-gray-200">Transform your vehicle with our professional detailing services. We bring showroom quality to your driveway.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToBooking}
                className="bg-automotive-gold hover:bg-yellow-500 text-automotive-blue px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white hover:bg-white hover:text-automotive-blue text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional car detailing service" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-automotive-gold text-automotive-blue p-4 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
