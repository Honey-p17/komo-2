import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isJainAvailable?: boolean;
  isSignature?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "brew",
    name: "All About Brew",
    items: [
      { name: "Popcorn Coffee", description: "Caramelized popcorn infused cold brew with vanilla cream", price: "₹349", isSignature: true },
      { name: "Selfie Wali Coffee", description: "Your photo printed on a creamy latte foam", price: "₹399", isSignature: true },
      { name: "Turkish Delight", description: "Traditional cardamom coffee with rose water essence", price: "₹279", isJainAvailable: true },
      { name: "Matcha Ceremonial", description: "Stone-ground Japanese matcha with oat milk", price: "₹329" },
      { name: "Golden Turmeric Latte", description: "Organic turmeric, ginger, honey, and steamed milk", price: "₹249", isJainAvailable: true },
      { name: "Affogato Royale", description: "Double espresso over artisan gelato", price: "₹379" },
    ],
  },
  {
    id: "bowls",
    name: "Global Bowls",
    items: [
      { name: "Mexican Hot Pot", description: "Spicy bean chili with nachos, guacamole, sour cream", price: "₹449", isSignature: true },
      { name: "Buddha's Blessing Bowl", description: "Quinoa, roasted veggies, hummus, tahini drizzle", price: "₹429", isJainAvailable: true },
      { name: "Thai Basil Rice Bowl", description: "Jasmine rice, thai basil stir-fry, crispy tofu", price: "₹399" },
      { name: "Mediterranean Mezze", description: "Falafel, babaganoush, pita, pickled vegetables", price: "₹479", isJainAvailable: true },
      { name: "Japanese Donburi", description: "Teriyaki glazed vegetables over sushi rice", price: "₹459" },
    ],
  },
  {
    id: "plates",
    name: "Small Plates",
    items: [
      { name: "Truffle Scented Mushroom Waffle", description: "Belgian waffle with truffle oil mushrooms", price: "₹529", isSignature: true },
      { name: "Four Cheese Fries", description: "Crispy fries loaded with mozzarella, cheddar, parmesan, cream cheese", price: "₹349" },
      { name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil oil", price: "₹499", isJainAvailable: true },
      { name: "Spinach & Artichoke Dip", description: "Creamy dip with toasted sourdough", price: "₹379" },
      { name: "Cottage Cheese Tikka", description: "Smoky tandoor paneer with mint chutney", price: "₹329", isJainAvailable: true },
    ],
  },
  {
    id: "sweet",
    name: "Sweet Tooth",
    items: [
      { name: "Molten Chocolate Sphere", description: "Dark chocolate dome with warm salted caramel core", price: "₹429", isSignature: true },
      { name: "Rose Panna Cotta", description: "Silky Italian custard with rose petals, pistachios", price: "₹349", isJainAvailable: true },
      { name: "Tiramisu Jar", description: "Classic Italian mascarpone, espresso-soaked ladyfingers", price: "₹379" },
      { name: "Churros con Chocolate", description: "Cinnamon sugar churros with Belgian chocolate dip", price: "₹299" },
      { name: "Gulab Jamun Cheesecake", description: "New York cheesecake meets Indian sweetness", price: "₹399", isSignature: true },
    ],
  },
];

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("brew");

  return (
    <section id="menu" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Curated Delights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A purely vegetarian menu crafted with globally-sourced ingredients 
            and local love. Jain options available.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glass-card w-full flex flex-wrap justify-center gap-2 p-4 mb-12">
            {menuData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-3 rounded-full font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 group hover:gold-glow transition-shadow duration-500"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          {item.isSignature && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              Signature
                            </span>
                          )}
                          {item.isJainAvailable && (
                            <Leaf className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-serif text-xl text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4 text-green-600" />
            Items marked with leaf are Jain-friendly
          </p>
        </motion.div>
      </div>
    </section>
  );
};
