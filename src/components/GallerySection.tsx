import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Cafe corner with neon sign", span: "row-span-2" },
  { src: gallery2, alt: "Artisan coffee being poured", span: "" },
  { src: gallery3, alt: "Truffle mushroom waffle", span: "row-span-2" },
  { src: gallery4, alt: "Bar counter with pendant lights", span: "" },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            The Vibe
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Instagrammable Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every corner tells a story. Capture your moments in our thoughtfully designed spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`img-hover-zoom rounded-2xl border-2 border-muted ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Follow us @komobykaffa
          </a>
        </motion.div>
      </div>
    </section>
  );
};
