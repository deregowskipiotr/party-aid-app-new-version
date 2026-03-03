import { motion, useReducedMotion } from "framer-motion";
import { buttons } from "../constants";
import MoodButtons from "../ui/MoodButtons";
import { routeMap } from "../constants";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 md:px-6 py-16 md:py-20 font-main text-center">
      <div className="h-[60%] md:h-[40%] w-full">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-14 text-white/80"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Barten<span className="text-indigo-400">Day</span> HQ <br />{" "}
          <span className="text-xl md:text-2xl">THE ULTIMATE COCKTAIL BIBLE!</span>
        </motion.h1>

        <motion.p
          className=" text-md md:text-lg text-gray-400 md:max-w-4xl w-full mb-8 mx-auto font-light"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Yo, listen up! I'm the ghost of Derby parties past, your personal
          Chaos Cocktail Commander. These ain't your grandma's drinks - these
          are weaponized flavor bombs that'll make your tastebuds do the
          electric slide! So grab your cocktail shaker, put on your best party
          hat, and let's dive into the world where every drink is a story
          waiting to be told!
        </motion.p>

        <motion.p
          className="text-xl md:text-3xl text-indigo-400 md:max-w-4xl w-full mb-8 mx-auto"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          Choose your Vibe and let's get mixing!
        </motion.p>
      </div>

      <MoodButtons buttons={buttons} routeMap={routeMap} />
    </section>
  );
};

export default HeroSection;
