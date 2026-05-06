import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1620050800344-934d9a3b6807?q=80&w=1000&auto=format&fit=crop",
    shape: "organic-blob-2",
    alt: "Minimal interior with ceramic",
    className: "aspect-square"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1574043836244-1240cc9185a9?q=80&w=1000&auto=format&fit=crop",
    shape: "pulp-shape",
    alt: "Ceramics drying",
    className: "aspect-[3/4] md:mt-12"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1590647141525-45a805cc077c?q=80&w=2000&auto=format&fit=crop",
    shape: "organic-blob-1",
    alt: "Mediterranean terrace",
    className: "aspect-square md:col-span-2"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1493106641515-02111d40a023?q=80&w=1000&auto=format&fit=crop",
    shape: "pulp-shape",
    alt: "Glaze detail",
    className: "aspect-square"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1551651056-2cb4d5c003cb?q=80&w=1000&auto=format&fit=crop",
    shape: "organic-blob-2",
    alt: "Pottery tools",
    className: "aspect-square md:-mt-10"
  }
];

export default function Gallery() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-terra-text font-serif mb-6">L'Atelier Gallery</h2>
          <p className="text-terra-text-muted text-base">A glimpse into our daily rhythms and inspirations.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-start">
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${image.className} overflow-hidden ${image.shape} bg-terra-surface group`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
