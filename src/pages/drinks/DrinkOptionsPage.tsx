// src/pages/drinks/DrinkOptionsPage.tsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import DrinkCard from "../../ui/DrinkCard";
import { allDrinksData, categorySlugMaps } from "../../constants";
import BackButton from "../../ui/BackButton";




const DrinkOptionsPage = () => {
  const { mood, category } = useParams<{ mood: string; category: string }>();

  // Convert slug category to display key using mapping
  const realCategory =
    mood && category && categorySlugMaps[mood]
      ? categorySlugMaps[mood][category] || ""
      : category || "";

  // Get drinks for specific mood + display category
  const drinks = (allDrinksData )[mood || ""]?.[realCategory] || [];

  console.log({ mood, category, realCategory, drinks });

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 md:px-6 py-8 md:py-20 text-center font-main">
      <div className="w-full md:h-[40%]">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white/80 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Barten<span className="text-indigo-400">Day</span> HQ
        </motion.h1>
        <motion.p
          className="text-md md:text-lg text-gray-400 mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your {realCategory} drinks from {mood} vibe are ready! Pick your
          poison.
        </motion.p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:px-0">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DrinkCard {...drink} />
            </motion.div>
          ))}
        </div>
        <BackButton className="mt-10" />
      </div>
    </section>
  );
};

export default DrinkOptionsPage;
