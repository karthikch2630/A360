import { Link } from "react-router-dom";

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      title: 'Modern Architectural Structures',
      slug: 'modern-architectural-structures',
      date: 'December 15, 2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Exploring the future of modern architectural design and sustainable building practices.',
      content: 'Full blog content for Modern Architectural Structures...',
    },
    {
      id: 2,
      title: 'Modernism in Architecture',
      slug: 'modernism-in-architecture',
      date: 'December 10, 2024',
      image: 'https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'How modernist principles continue to shape contemporary architectural solutions.',
      content: 'Full blog content for Modernism in Architecture...',
    },
  ];


  return (
    <section className="py-20 bg-black sm:pl-36">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          LATEST <span className="text-white">BLOGS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6 grayscale">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm text-gray-400 mb-1">{post.date}</div>
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
