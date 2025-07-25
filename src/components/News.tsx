

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Modern Architectural Structures',
      date: 'December 15, 2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Exploring the future of modern architectural design and sustainable building practices.'
    },
    {
      id: 2,
      title: 'Modernism in Architecture',
      date: 'December 10, 2024',
      image: 'https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'How modernist principles continue to shape contemporary architectural solutions.'
    }
  ];

  return (
    <section className="py-20 bg-black sm:pl-36">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          CURRENT <span className="text-white">NEWS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6 grayscale">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm text-gray-400 mb-1">{article.date}</div>
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
