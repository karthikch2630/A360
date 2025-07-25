import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AMSRI SRIVANI",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573249/Revised_View_uoh3ud.jpg",
    category: "Residential",
  },
  {
    id: 2,
    title: "BIGBULL PUB",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573349/v1_1_c8xhwq.jpg",
    category: "Commercial",
  },
  {
    id: 3,
    title: "ANANDA HOMES",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573516/Aerial_View_hzt0bj.jpg",
    category: "Mixed-Use",
  },
  {
    id: 4,
    title: "NAVANAMI",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573664/Revised_Night07_aqikdf.jpg",
    category: "Residential",
  },
  {
    id: 5,
    title: "URBAN FLATS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573796/Comm_View22._s2k7ub.jpg",
    category: "Residential",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Circular scroll to start
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "instant" });
        }, 600);
      }
    } else {
      if (container.scrollLeft === 0) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "instant",
        });
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Extended data to simulate infinite scroll
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="py-20 bg-black relative overflow-hidden sm:pl-36">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          OUR <span className="text-white">PROJECTS</span>
        </h2>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth pb-4"
          >
            {infiniteProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="group min-w-[300px] max-w-[300px] rounded-lg overflow-hidden relative flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="text-sm text-gray-400 mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
