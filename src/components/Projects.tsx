import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "VASAVIBUILDOX BHUVI",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752640685/01_1_-min_bnyubs.jpg",
  },
  {
    id: 2,
    title: "BUILDOX JJ GARDENS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752641172/View_04-min_it030l.jpg",
  },
  {
    id: 3,
    title: "SCINTILLA APARTMENT",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752641726/Final_03_1_-min_vycw6b.jpg",
  },
  {
    id: 4,
    title: "NAVANAAMI",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752642124/Final_4-min_io9eve.jpg",
  },
  {
    id: 5,
    title: "BIG BULL PUB",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752642403/Gate_With_Tower_14-5-23-min_vdwx7b.jpg",
  },
  {
    id: 6,
    title: "Courtyard mansion",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 7,
    title: "Dwellings",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 8,
    title: "Chirala Resort",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 9,
    title: "ANANDA HOMES",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 10,
    title: "ASR MEMORIAL",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 11,
    title: "RR HOMES",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 12,
    title: "SAHITI DPS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 13,
    title: "SINDHUJA CONSTRUCTIONS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 14,
    title: "CRDA OFFICE",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 15,
    title: "PRASAD COMMERCIAL BUILDING",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 16,
    title: "DS DWELLINGS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 17,
    title: "PULSUS corporate office",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 18,
    title: "SAHITI COMMERCIAL",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 19,
    title: "RR FARMHOUSE",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 20,
    title: "VINOD MALL",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 21,
    title: "GANGAVARAM PORT OFFICE",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 22,
    title: "OSR INFRA",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 23,
    title: "PERUPALEM beach front shiva temple",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 24,
    title: "DP VILLA",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
  },
  {
    id: 25,
    title: "YTD 450 SQYDS",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/f_auto,q_auto,w_600/v1752643596/CXGS2864_i35rjp.jpg",
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
  const navigate = useNavigate();

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
                onClick={() => navigate(`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-') }`)}
              >
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition duration-500 grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  
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
