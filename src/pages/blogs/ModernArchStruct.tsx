import { Link } from "react-router-dom";

const ModernArchitecturePage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 max-w-4xl mx-auto sm:mr-60">
      <img
        src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        alt="Modern Architectural Structures"
        className="w-full h-80 object-cover rounded mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">
        Modern Architectural Structures
      </h1>
      <p className="text-sm text-gray-400 mb-8">December 15, 2024</p>

      <div className="text-gray-300 space-y-6 leading-relaxed">
        <p>
          Modern architecture stands as a reflection of innovation,
          functionality, and the ever-evolving relationship between humans and
          their environments. In the 21st century, buildings are no longer just
          shelters—they are intelligent, adaptive structures that serve the
          needs of a sustainable, tech-forward world.
        </p>

        <h2 className="text-2xl font-semibold text-white">
          The Shift Toward Minimalism and Functionality
        </h2>
        <p>
          One of the key features of modern architectural design is{" "}
          <strong>minimalism</strong>. Architects today focus on{" "}
          <em>clean lines, open floor plans, and uncluttered interiors</em> that
          prioritize user experience over ornamentation. This functional
          approach enhances natural light, improves air circulation, and
          creates multi-purpose spaces suited for both residential and
          commercial use.
        </p>
        <p>
          Materials such as <strong>glass, steel, and reinforced concrete</strong> are favored for their strength and design flexibility. These elements allow for bold geometric forms and expansive windows that seamlessly blend interior and exterior environments.
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Sustainability at the Core
        </h2>
        <p>
          Modern architectural structures place a strong emphasis on{" "}
          <strong>green building practices</strong>. From energy-efficient
          lighting systems to passive cooling mechanisms, every component is
          designed with environmental impact in mind.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Green roofs and vertical gardens to improve insulation</li>
          <li>Solar panels integrated into facades or rooftops</li>
          <li>Rainwater harvesting systems for conservation</li>
          <li>Smart HVAC and lighting systems</li>
        </ul>

        <p>
          Many buildings today are constructed to meet{" "}
          <strong>LEED or IGBC certifications</strong>, validating their
          ecological performance.
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Smart Cities and Intelligent Buildings
        </h2>
        <p>
          Technology is playing a transformative role in architecture.
          Structures are now integrated with <strong>IoT devices</strong> for
          real-time monitoring of temperature, lighting, and security. These
          smart buildings adapt to user behavior, reducing energy waste and
          enhancing comfort.
        </p>
        <p>
          In urban landscapes, <strong>modular construction</strong> and
          prefabricated designs are enabling faster, cheaper, and cleaner builds.
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Iconic Examples of Modern Architecture
        </h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>
            <strong>The Edge</strong>, Amsterdam – the “smartest building in the world”
          </li>
          <li>
            <strong>Apple Park</strong>, Cupertino – a circular glass marvel focused on sustainability
          </li>
          <li>
            <strong>Bosco Verticale</strong>, Milan – vertical forest towers with over 20,000 plants
          </li>
          <li>
            <strong>Zaha Hadid's projects</strong> – futuristic, organic, and boundary-pushing designs
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">
          Final Thoughts
        </h2>
        <p>
          Modern architectural structures go far beyond aesthetics. They are
          <strong> experiences</strong>, designed with people, planet, and
          purpose in mind. As technology advances and climate concerns rise, the
          future of architecture will lie in its ability to blend innovation
          with sustainability.
        </p>
        <p>
          The buildings of tomorrow are already here—and they’re smarter,
          greener, and more beautiful than ever before.
        </p>
      </div>

      <Link
        to="/blogs"
        className="mt-10 inline-block text-blue-400 hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default ModernArchitecturePage;
