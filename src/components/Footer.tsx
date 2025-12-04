import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Car, Accessibility, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl text-primary mb-4">KOMO</h3>
            <p className="text-background/70 mb-6">
              Gujarat's Largest Culinary Sanctuary. Where organic modernism meets 
              Indian artistry.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-xl mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+917900000000" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone size={18} />
                +91 79000 00000
              </a>
              <a href="mailto:hello@komobykaffa.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail size={18} />
                hello@komobykaffa.com
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Near Sindhu Bhavan Road,<br />
                  Bodakdev, Ahmedabad - 380054
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-xl mb-6">Opening Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/70">
                <Clock size={18} />
                <div>
                  <p>Monday - Thursday</p>
                  <p className="text-background">10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Clock size={18} />
                <div>
                  <p>Friday - Sunday</p>
                  <p className="text-background">10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-xl mb-6">Amenities</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/70">
                <Car size={18} />
                <span>Complimentary Valet Parking</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Accessibility size={18} />
                <span>Wheelchair Accessible</span>
              </div>
              <div className="text-background/70">
                <p>• Free High-Speed Wi-Fi</p>
                <p>• Private Dining Available</p>
                <p>• EV Charging Station</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Komo by Kaffa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
