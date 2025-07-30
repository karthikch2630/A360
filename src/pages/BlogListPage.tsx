import { Link } from "react-router-dom";


export const blogs = [
    {
        id: 1,
        title: "Modern Architectural Structures",
        slug: "modern-architectural-structures",
        date: "December 15, 2024",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        excerpt: "Exploring the future of modern architectural design and sustainable building practices.",
        content: `
      In this blog, we explore how modern architectural structures redefine cityscapes.
      Emphasis is placed on sustainable building practices, innovative materials, and the use of AI in designing smart cities.
      Architects are now blending aesthetics with functionality, focusing on minimizing carbon footprints.
    `,
    },
    {
        id: 2,
        title: "Modernism in Architecture",
        slug: "modernism-in-architecture",
        date: "December 10, 2024",
        image: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
        excerpt: "How modernist principles continue to shape contemporary architectural solutions.",
        content: `
      Modernism in architecture focuses on clean lines, open spaces, and the elimination of unnecessary details.
      It emphasizes functionality and form, evident in contemporary homes and public infrastructure.
      The influence of Bauhaus and Le Corbusier is still strong in today's minimalist trends.
    `,
    },
    {
        id: 3,
        title: "Biophilic Design: Nature Meets Architecture",
        slug: "biophilic-design-nature-meets-architecture",
        date: "November 28, 2024",
        image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg",
        excerpt: "Bringing natural elements into architectural spaces to enhance well-being and harmony.",
        content: `
      Biophilic design integrates nature directly into architectural environments, promoting mental health and productivity.
      From green walls to natural ventilation and lighting, this approach blurs the line between indoors and outdoors.
      Companies and institutions worldwide are adopting this style for its proven psychological benefits.
    `,
    },
    {
        id: 4,
        title: "Smart Homes: The Future of Living",
        slug: "smart-homes-the-future-of-living",
        date: "November 10, 2024",
        image: "https://images.pexels.com/photos/7061670/pexels-photo-7061670.jpeg",
        excerpt: "Examining how automation and IoT are transforming residential architecture.",
        content: `
      Smart homes leverage IoT devices for lighting, security, climate control, and entertainment.
      Architecture is now evolving to include smart hubs, integrated wiring, and efficient layouts for device communication.
      With growing demand, architects are redesigning homes to be tech-ready and energy-efficient.
    `,
    },
    {
        id: 5,
        title: "The Rise of Vertical Architecture",
        slug: "the-rise-of-vertical-architecture",
        date: "October 25, 2024",
        image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
        excerpt: "Exploring how urban density is shaping the need for tall, multifunctional buildings.",
        content: `
      As urban land becomes scarce, cities are building upwards.
      Vertical architecture combines residential, commercial, and recreational spaces into a single structure.
      This trend promotes space efficiency, reduces commuting time, and supports sustainability goals.
    `,
    },
];



const BlogListPage = () => {
    return (
        <section className="py-20 bg-black sm:pr-114 px-6 sm:pl-40 ">
            <h2 className="text-4xl font-bold text-white text-center mb-10">
                Latest Blogs
            </h2>
            <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-center">
                Explore our latest blogs on modern architecture, smart city innovations, and sustainable building practices. Stay informed with in-depth insights, design trends, and forward-thinking concepts reshaping the built environment.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
                {blogs.map((blog) => (
                    <div key={blog.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg mb-6 grayscale">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 text-white text-sm text-gray-300">
                                {blog.date}
                            </div>
                        </div>
                        <div className="text-white">
                            <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                            <p className="text-gray-400 mb-3">{blog.excerpt}</p>
                            <Link
                                to={`/blogs/${blog.slug}`}
                                className="text-blue-400 hover:underline text-sm"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogListPage;
