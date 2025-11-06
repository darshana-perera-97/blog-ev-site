import { Target, Eye, Heart, Users } from 'lucide-react';
import { InfoCard } from '../components/InfoCard';
import { Footer } from '../components/Footer';
import { teamMembers } from '../data/mockData';

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DDEBFF]/20 via-background to-[#BFEFEA]/20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">About ev.info</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to accelerate the world's transition to sustainable 
              transportation by providing trusted, comprehensive information about 
              electric vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#DDEBFF]/30 to-[#BFEFEA]/30 rounded-2xl p-8 lg:p-12 border border-[#DDEBFF]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#DDEBFF] to-[#BFEFEA] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower consumers and enthusiasts with accurate, unbiased information 
              about electric vehicles. We believe that informed decisions drive positive 
              change, and we're committed to being the most trusted source for EV news, 
              reviews, and analysis.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a world where electric vehicles are the norm, not the exception. 
              Through education, advocacy, and community building, we're working to make 
              sustainable transportation accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 border-y border-border py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              icon={Heart}
              title="Integrity"
              description="We provide honest, unbiased reviews and analysis"
            />
            <InfoCard
              icon={Target}
              title="Accuracy"
              description="Fact-checked information you can trust"
            />
            <InfoCard
              icon={Users}
              title="Community"
              description="Building a supportive EV enthusiast community"
            />
            <InfoCard
              icon={Eye}
              title="Transparency"
              description="Clear about our methods and sources"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate experts dedicated to bringing you the best EV content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#DDEBFF]/30 to-[#BFEFEA]/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">
              Stay connected with the latest EV news, exclusive content, and join 
              thousands of electric vehicle enthusiasts.
            </p>
            <button
              onClick={() => {
                const modal = document.getElementById('newsletter-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
