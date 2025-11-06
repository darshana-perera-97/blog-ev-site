import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { InfoCard } from '../components/InfoCard';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DDEBFF]/20 via-background to-[#BFEFEA]/20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? We'd love to 
              hear from you. Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={Mail}
            title="Email Us"
            description="contact@ev.info"
            variant="accent"
          />
          <InfoCard
            icon={Phone}
            title="Call Us"
            description="+1 (555) 123-4567"
          />
          <InfoCard
            icon={MapPin}
            title="Visit Us"
            description="123 EV Street, San Francisco, CA"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <h2 className="mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <Button type="submit" className="w-full rounded-lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-secondary rounded-2xl h-80 flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640345!3d37.757814950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-[#DDEBFF]/30 to-[#BFEFEA]/30 rounded-2xl p-8 border border-[#DDEBFF]">
              <h3 className="mb-4">Office Hours</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="mb-4">Quick Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Check out our FAQ section for answers to common questions about 
                electric vehicles, charging, and more.
              </p>
              <Button variant="outline" className="rounded-lg">
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
