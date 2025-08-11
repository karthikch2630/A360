import React from "react";

interface ServiceItem {
  name: string;
  iconPath: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    name: "Architecture Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450311/Architecture_Design_u4lmvj.svg",
    description:
      "Our architectural services span conceptualization to construction. We create inspiring, functional spaces that reflect client visions while considering environmental and cultural contexts. Whether for residential, commercial, or institutional needs, our designs achieve balance in aesthetics, utility, sustainability, and structural integrity for lasting impact.",
  },
  {
    name: "Master Planning",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450508/Master_Planning_xtasmi.svg",
    description:
      "Master planning provides a visionary roadmap for land use and infrastructure. We develop cohesive strategies that integrate urban growth, sustainability, transportation, green spaces, and community wellbeing. Our solutions ensure balanced development aligned with future needs, supporting smart cities, campuses, and industrial zones with scalable, long-term frameworks.",
  },
  {
    name: "Urban Designing",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450368/Urban_Designing_yiq7ce.svg",
    description:
      "Urban design blends architecture, landscape, and public policy to shape the built environment. We design walkable neighborhoods, vibrant public spaces, and accessible urban layouts that enhance community interaction, mobility, and aesthetics. Our team ensures functionality and identity are embedded in every urban environment we shape.",
  },
  {
    name: "Infrastructure Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450532/infrastructures_vqhblo.svg",
    description:
      "We deliver end-to-end infrastructure design services, covering roads, bridges, drainage, and utilities. Our designs prioritize durability, sustainability, and efficiency. By integrating advanced technologies and regulatory standards, we build the foundation for resilient cities and smart communities prepared for future urban challenges.",
  },
  
  {
    name: "Structural Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450421/Structural_p3iga2.svg",
    description:
      "Structural design ensures safety, stability, and strength in construction. We use advanced analysis tools to create cost-effective and durable frameworks for buildings and infrastructure. Our solutions meet all relevant codes and are tailored to resist seismic, wind, and load stresses, ensuring project reliability.",
  },
  {
    name: "Fire Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450581/Fire_Design_fytrfb.svg",
    description:
      "We develop fire protection strategies that align with local and international codes. Our services include sprinkler systems, smoke control, evacuation planning, and fire-resistant materials. With a focus on occupant safety and property protection, we create robust fire response frameworks for various building types.",
  },
  {
    name: "Electrical Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450556/electronic-store_rn0w8l.svg",
    description:
      "Our electrical design services include power distribution, lighting, backup systems, and energy efficiency solutions. We ensure optimal load management, safety, and compliance with codes. Our goal is to deliver intelligent electrical systems that support sustainability and meet modern operational demands across sectors.",
  },
  {
    name: "Plumbing Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450483/pipe_uhfjy6.svg",
    description:
      "We design efficient plumbing systems including water supply, drainage, sewage treatment, and rainwater harvesting. Our solutions reduce water wastage and maintenance while ensuring hygiene and regulatory compliance. Whether residential or commercial, we prioritize efficiency, safety, and environmental responsibility in every design.",
  },
  {
    name: "HVAC Design",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450395/hvac_fzoshl.svg",
    description:
      "Our HVAC design solutions ensure optimal thermal comfort and indoor air quality. We integrate energy-efficient heating, ventilation, and air conditioning systems tailored to building usage. Our designs are code-compliant, sustainable, and cost-effective—ideal for residential, commercial, and industrial environments.",
  },
  {
    name: "Cost Estimation",
    iconPath:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753450448/cost_rshrqk.svg",
    description:
      "We provide detailed and accurate cost estimation services, helping clients manage budgets and avoid overruns. Our analysis covers material, labor, and contingency planning. With real-time market insights and software tools, we deliver transparent and reliable financial projections for informed decision-making.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-black sm:pl-36">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          OUR <span className="text-white">SERVICES</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group bg-white/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={service.iconPath}
                  alt={service.name}
                  className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
