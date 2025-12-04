import { motion } from "framer-motion";
import spaceImg from "@/assets/space-1.jpg";

export const SpaceSection = () => {
  return (
    <section id="space" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            The Space
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            A Sanctuary of Artistry
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="img-hover-zoom rounded-2xl border-4 border-muted overflow-hidden">
                <img
                  src={spaceImg}
                  alt="Komo interior with relief art"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Where Walls Tell Stories
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Step into a world where organic modernism meets Indian craftsmanship. 
                Our 3D wall carvings depict majestic elephants, peacocks, and ancient 
                banyan trees—each piece hand-sculpted by master artisans from Rajasthan.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Relief Art & Warm Tones
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Inspired by the relief murals of Ellora caves, our textured walls 
                create an immersive atmosphere. The warm sandstone palette and 
                soaring ceilings make every corner an Instagram-worthy moment.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <p className="font-serif text-4xl text-primary">15,000</p>
                <p className="text-sm text-muted-foreground tracking-wide">Sq. Ft. Space</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl text-primary">300+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Seating Capacity</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl text-primary">7</p>
                <p className="text-sm text-muted-foreground tracking-wide">Themed Zones</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
