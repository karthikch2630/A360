import React, { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  name: string;
  iconPath: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Master Planning",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450508/Master_Planning_xtasmi.svg",
    description:
      "Master planning provides a visionary roadmap for land use and infrastructure. We develop cohesive strategies that integrate urban growth, sustainability, transportation, green spaces, and community wellbeing. Our solutions ensure balanced development aligned with future needs, supporting smart cities, campuses, and industrial zones with scalable, long-term frameworks.",
  },
  {
    name: "Urban Designing",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450368/Urban_Designing_yiq7ce.svg",
    description:
      "Urban design blends architecture, landscape, and public policy to shape the built environment. We design walkable neighborhoods, vibrant public spaces, and accessible urban layouts that enhance community interaction, mobility, and aesthetics. Our team ensures functionality and identity are embedded in every urban environment we shape.",
  },
  {
    name: "Infrastructure Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450532/infrastructures_vqhblo.svg",
    description:
      "We deliver end-to-end infrastructure design services, covering roads, bridges, drainage, and utilities. Our designs prioritize durability, sustainability, and efficiency. By integrating advanced technologies and regulatory standards, we build the foundation for resilient cities and smart communities prepared for future urban challenges.",
  },
  {
    name: "Architecture Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450311/Architecture_Design_u4lmvj.svg",
    description:
      "Our architectural services span conceptualization to construction. We create inspiring, functional spaces that reflect client visions while considering environmental and cultural contexts. Whether for residential, commercial, or institutional needs, our designs achieve balance in aesthetics, utility, sustainability, and structural integrity for lasting impact.",
  },
  {
    name: "Structural Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450421/Structural_p3iga2.svg",
    description:
      "Structural design ensures safety, stability, and strength in construction. We use advanced analysis tools to create cost-effective and durable frameworks for buildings and infrastructure. Our solutions meet all relevant codes and are tailored to resist seismic, wind, and load stresses, ensuring project reliability.",
  },
  {
    name: "Fire Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450581/Fire_Design_fytrfb.svg",
    description:
      "We develop fire protection strategies that align with local and international codes. Our services include sprinkler systems, smoke control, evacuation planning, and fire-resistant materials. With a focus on occupant safety and property protection, we create robust fire response frameworks for various building types.",
  },
  {
    name: "Electrical Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450556/electronic-store_rn0w8l.svg",
    description:
      "Our electrical design services include power distribution, lighting, backup systems, and energy efficiency solutions. We ensure optimal load management, safety, and compliance with codes. Our goal is to deliver intelligent electrical systems that support sustainability and meet modern operational demands across sectors.",
  },
  {
    name: "Plumbing Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450483/pipe_uhfjy6.svg",
    description:
      "We design efficient plumbing systems including water supply, drainage, sewage treatment, and rainwater harvesting. Our solutions reduce water wastage and maintenance while ensuring hygiene and regulatory compliance. Whether residential or commercial, we prioritize efficiency, safety, and environmental responsibility in every design.",
  },
  {
    name: "HVAC Design",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450395/hvac_fzoshl.svg",
    description:
      "Our HVAC design solutions ensure optimal thermal comfort and indoor air quality. We integrate energy-efficient heating, ventilation, and air conditioning systems tailored to building usage. Our designs are code-compliant, sustainable, and cost-effective—ideal for residential, commercial, and industrial environments.",
  },
  {
    name: "Cost Estimation",
    iconPath: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450448/cost_rshrqk.svg",
    description:
      "We provide detailed and accurate cost estimation services, helping clients manage budgets and avoid overruns. Our analysis covers material, labor, and contingency planning. With real-time market insights and software tools, we deliver transparent and reliable financial projections for informed decision-making.",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="pt-20 bg-black text-white px-6 sm:pl-36">
      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our <span className="underline underline-offset-4">Services</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto sm:py-12 px-4">
          {services.map((service, index) => (
            <div
              key={index.toString()} // Explicitly convert index to string to resolve TypeScript error
              onClick={() => setActiveService(service)}
              className="bg-white/90 hover:bg-gray-100 p-8 rounded-2xl cursor-pointer transition-transform duration-300 transform hover:scale-105 shadow-lg hover:text-white"
            >
              {/* PNG iconPath */}
              <div className="mb-6">
                <img
                  src={service.iconPath}
                  alt={service.name}
                  className="w-24 h-24 object-cover mx-auto"
                />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-black text-center">
                {service.name}
              </h3>
              {/* Call to Action */}
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white text-center px-4 rounded hover:bg-gray-700 transition-colors text-sm mx-auto block"
              >
                Click to learn more
              </motion.button>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Card */}
      {activeService && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="bg-gray-900 max-w-md w-full p-6 rounded-xl relative">
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => setActiveService(null)}
            >
              ×
            </button>
            <div className="mb-4 text-center">
              <img
                src={activeService.iconPath}
                alt={activeService.name}
                className="w-24 h-24 mx-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{activeService.name}</h3>
            <p className="text-gray-300 mb-4">{activeService.description}</p>
          </div>
        </div>
      )}

      {/* Process Diagram */}
      <section className="py-20 px-4">
  <h2 className="text-4xl font-bold text-center mb-12">
    Our Design Process
  </h2>
  <img
    src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1753790708/team-one-design-process-scaled_siafut.webp"
    alt="A360 Design Process"
    className="mx-auto w-full max-w-3xl h-auto rounded-md shadow-lg"
  />
</section>

    </div>
  );
}