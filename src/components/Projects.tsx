import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  { id: 1, title: "Vasavi BuildDox by Bhuvi", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/Aerial-View-2-15-5-23_iblkba.jpg" },
  { id: 2, title: "Bhuvi by Vasavi BuildDox", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782689/View-04_xfnfkg.jpg" },
  { id: 3, title: "Scintilla Apartment", image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642124/Final_4-min_io9eve.jpg" },
  { id: 4, title: "Navanaami", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782764/Revised-01_enfwvq.jpg" },
  { id: 5, title: "Big Bull Pub", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782808/v1-_1_ni2obk.jpg" },
  { id: 6, title: "Courtyard Mansion", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782861/Final-03-_1_dpdg2x.jpg" },
  { id: 7, title: "Dwellings", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782923/Comm_View22_y093yy.jpg" },
  { id: 8, title: "Chirala Resort", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782959/scene-07_uwr9jp.jpg" },
  { id: 9, title: "Ananda Homes", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782997/03-_1_vsdhhd.jpg" },
  { id: 10, title: "ASR Memorial", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783065/v-2-grey_aktulx.jpg" },
  { id: 11, title: "RR Homes", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783103/06-copy_hc2lmq.jpg" },
  { id: 12, title: "Sahiti DPS", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783126/CXGS2864_ppdzti.jpg" },
  { id: 13, title: "Sindhuja Constructions", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783173/5_fe5apm.jpg" },
  { id: 14, title: "CRDA Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783217/SCENE-04_svfvwl.jpg" },
  { id: 15, title: "Prasad Commercial Building", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783258/c-11_ec7vzo.jpg" },
  { id: 16, title: "DS Dwellings", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783298/4-copy_niv5dv.jpg" },
  { id: 17, title: "Pulsus Corporate Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783346/WTFG4143_xqsxaz.jpg" },
  { id: 18, title: "Sahiti Commercial", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783368/GQAH1053_x5uqpa.jpg" },
  { id: 19, title: "RR Farmhouse", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783401/Front-Angle-View_gzbrhs.jpg" },
  { id: 20, title: "Vinod Mall", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784169/silpa-commercial-_1_zw3nzt.jpg" },
  { id: 21, title: "Gangavaram Port Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784222/41_eabhtj.jpg" },
  { id: 22, title: "OSR Infra", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784279/011_gubux3.jpg" },
  { id: 23, title: "Perupalem Beachfront Shiva Temple", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784331/0101-_16_uletch.jpg" },
  { id: 24, title: "DP Villa", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784357/scene-0101-_2_zwtzh0.jpg" },
  { id: 25, title: "YTD 450 Sq Yds", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784371/450-syds-evening-view_ocglyi.jpg" }
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
