
import {
  Building2,
  Palette,
  MapPin,
  Lightbulb,
  Hammer,
  PenTool,
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: 'Architecture Design',
      description:
        'Complete architectural design services from concept to construction documentation.',
      features: [
        'Residential Design',
        'Commercial Projects',
        'Mixed-Use Developments',
        'Sustainable Architecture',
      ],
    },
    {
      icon: <Palette className="w-12 h-12 text-white" />,
      title: 'Interior Design',
      description:
        'Creating functional and beautiful interior spaces that reflect your vision.',
      features: [
        'Space Planning',
        'Material Selection',
        'Lighting Design',
        'Custom Furniture',
      ],
    },
    {
      icon: <MapPin className="w-12 h-12 text-white" />,
      title: 'Urban Planning',
      description:
        'Strategic planning for sustainable urban development and community growth.',
      features: [
        'Master Planning',
        'Zoning Analysis',
        'Community Engagement',
        'Environmental Impact',
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white" />,
      title: 'Design Consultation',
      description:
        'Expert advice and guidance for your architectural and design projects.',
      features: [
        'Feasibility Studies',
        'Design Review',
        'Code Compliance',
        'Project Management',
      ],
    },
    {
      icon: <Hammer className="w-12 h-12 text-white" />,
      title: 'Construction Admin',
      description:
        'Comprehensive construction administration and project oversight services.',
      features: [
        'Contract Administration',
        'Site Supervision',
        'Quality Control',
        'Progress Monitoring',
      ],
    },
    {
      icon: <PenTool className="w-12 h-12 text-white" />,
      title: '3D Visualization',
      description:
        'Bringing your projects to life with stunning 3D renderings and animations.',
      features: [
        'Architectural Rendering',
        'Virtual Tours',
        'Animation Services',
        'Presentation Graphics',
      ],
    },
  ];

  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OUR <span className="underline underline-offset-4">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed hover:text-white transition-colors duration-300">
              Comprehensive architectural and design services tailored to bring
              your vision to life with exceptional quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transistion-colors duration-300">
              We follow a structured approach to ensure every project meets the
              highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs and vision',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating innovative design solutions',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Refining and detailing the design',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Construction and project completion',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
