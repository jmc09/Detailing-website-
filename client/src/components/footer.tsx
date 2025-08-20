import { Facebook, Instagram, Chrome } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-automotive-light text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Elite Auto Detailing</h3>
            <p className="text-gray-300 mb-4">Professional automotive detailing services that restore and protect your vehicle's beauty.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-automotive-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-automotive-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-automotive-gold transition-colors">
                <Chrome className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Interior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exterior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paint Correction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Coating</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div>(555) 123-AUTO</div>
              <div>info@eliteautodetailing.com</div>
              <div>123 Auto Center Drive<br />Springfield, IL 62701</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Elite Auto Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
