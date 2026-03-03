import { fullBlastButtons, fullBlastRouteMap } from "../../constants";
import BackButton from "../../ui/BackButton";
import MoodButtons from "../../ui/MoodButtons";
import { motion } from "framer-motion";



const FullBlastPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 md:px-6 py-8 md:py-20 text-center font-main">
      <div className="w-full md:h-[40%]">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 md:mb-14 text-white/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Barten<span className="text-indigo-400">Day</span> HQ
        </motion.h1>

        <motion.p
          className="text-md md:text-lg text-gray-400 md:max-w-4xl w-full mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full blast maniac, you're here to wreck the place aren't ya? Love that
          chaos energy, boss! Pick your nuclear weapon and let's blow this night
          to kingdom come.
        </motion.p>

        <motion.p
          className="text-xl md:text-3xl text-indigo-400 md:max-w-4xl w-full mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to explode? Pick your chaos and party hard!
        </motion.p>
      </div>

      {/* Wrapper for MoodButtons + BackButton alignment */}
      <div className="w-full max-w-6xl flex flex-col gap-10 items-end">
        {/* Category buttons */}
        <MoodButtons buttons={fullBlastButtons} routeMap={fullBlastRouteMap} />

        {/* BackButton aligned to right edge, below buttons */}
        <BackButton />
      </div>
    </section>
  );
};

export default FullBlastPage;
