import React from 'react';
import { Building2, Palette, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'ARCHITECTURE',
      description:
        'Architecture is our art, and we bring our art to life through design. Our creative architecture team designs buildings that inspire.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'INTERIOR DESIGN',
      description:
        'Interior design is an art and science of understanding human behavior, from designing sustainable interior architectural solutions.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'URBAN DESIGN',
      description:
        'Urban design is the process between architecture and city planning. We help design buildings that complement sustainable urban environments.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          OUR <span className="text-white">SERVICES</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 grayscale">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-300 transition-colors duration-300">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8 text-black' })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wider">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
