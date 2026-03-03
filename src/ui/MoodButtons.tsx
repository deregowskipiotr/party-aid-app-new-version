// src/ui/MoodButtons.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface MoodButtonsProps {
  buttons: string[];
  routeMap?: Record<string, string>;
  onClick?: (label: string) => void;
  containerClassName?: string;
  buttonClassName?: string;
}

const MoodButtons = ({
  buttons,
  routeMap,
  onClick,
  containerClassName = "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full",
  buttonClassName = "px-6 py-3 h-12 md:h-16 rounded-xl backdrop-blur-md border border-white/20 bg-white/5 text-white/80 font-medium cursor-pointer",
}: MoodButtonsProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (label: string) => {
    if (onClick) {
      onClick(label);
      return;
    }
    if (routeMap && routeMap[label]) {
      navigate(routeMap[label]);
    }
  };

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.9,
          },
        },
      }}
    >
      {buttons.map((label) => (
        <motion.button
          key={label}
          onClick={() => handleButtonClick(label)}
          className={buttonClassName}
          whileHover={{
            backgroundColor: "rgba(255,255,255,0.10)",
            borderColor: "rgba(255,255,255,0.40)",
            color: "rgba(255,255,255,1)",
            boxShadow:
              "0 0 8px rgba(99,102,241,0.5), 0 0 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          aria-label={label}
        >
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default MoodButtons;
