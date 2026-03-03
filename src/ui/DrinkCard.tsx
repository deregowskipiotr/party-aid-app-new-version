// src/ui/DrinkCard.tsx - Updated sizing
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryColors } from "../constants";

interface DrinkCardProps {
  name: string;
  category?: string;
  frontDescription?: string;
  backIngredients?: string[];
  backAccessories?: string[];
  preparation?: string;
}


const DrinkCard = ({
  name,
  category = "chill-vibes",
  frontDescription = "A delicious mystery... sip and see!",
  backIngredients = ["Ingredient 1", "Ingredient 2"],
  backAccessories = ["Mint leaf", "Citron juice"],
  preparation = "Mix all ingredients and enjoy responsibly.",
}: DrinkCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const bgColor = categoryColors[category] || "bg-gray-900/90 text-gray-200";

  return (
    <>
      {/* FRONT CARD - Compact for 4-card grid */}
      <motion.div
        className="w-full h-32 md:h-60 cursor-pointer perspective-1000 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white/80 font-medium flex flex-col justify-center px-6 py-4 shadow-2xl"
        onClick={() => setFlipped(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          backgroundColor: "rgba(255,255,255,0.10)",
          borderColor: "rgba(255,255,255,0.40)",
          color: "rgba(255,255,255,1)",
          boxShadow:
            "0 0 8px rgba(99,102,241,0.5), 0 0 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <h3 className="text-lg md:text-2xl font-bold mx-auto flex items-center gap-2 md:mb-22">
          {name}{" "}
          <span role="img" aria-label="drink">
            🍹
          </span>
        </h3>
        <p className="text-xs md:text-sm italic text-white/70 leading-tight mt-10 md:mt-0">
          {frontDescription}
        </p>
      </motion.div>

      {/* BACK CARD MODAL - 75% screen width */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFlipped(false)}
          >
            <motion.div
              className={`relative w-full max-w-3xl md:h-[650px] h-[85vh] overflow-y-auto rounded-xl p-8 ${bgColor} backdrop-blur-[20px] border border-white/30 shadow-2xl`}
              style={{
                boxShadow: "0 0 40px rgba(99,102,241,0.2), 0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeInOut", type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Indigo gradient accent overlay — layered on top of category color */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, transparent 55%)",
                }}
              />
              {/* Close button */}
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="absolute top-3 right-4 md:top-4 md:right-6 text-xl md:text-3xl cursor-pointer z-10"
              >
                ×
              </button>

              {/* Header */}
              <div className="text-center h-[20%]">
                <h2 className="text-3xl md:text-4xl mb-2 flex items-center justify-center gap-3 mx-auto">
                  {name} <span className="hidden md:block text-4xl">🍹</span>
                </h2>
                <div
                  className="w-48 h-px mx-auto mb-12"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(99,102,241,0.8), transparent)",
                  }}
                />
              </div>

              {/* Ingredients & Accessories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[50%]">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 italic">
                    Ingredients
                  </h3>
                  <ul className="font-extralight text-md md:text-lg">
                    {backIngredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-white/50 rounded-full" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center ">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 italic">
                    Accessories
                  </h3>
                  <ul className="text-md md:text-lg font-extralight items-center">
                    {backAccessories.map((acc, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-white/50 rounded-full" />
                        {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preparation */}
              <div className="h-[30%] pt-10 md:pt-5">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 italic">
                  Preparation
                </h3>
                <div className="prose prose-lg max-w-none text-md md:text-lg font-extralight">
                  <p>{preparation}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DrinkCard;
