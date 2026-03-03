// src/ui/BackButton.tsx
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "/icons/undo.svg?url";

interface BackButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  to?: string; // specific path or use history back
  /** className applied to the outer container (same as passing `className`) */
  containerClassName?: string;
  /** className applied to the inner button */
  buttonClassName?: string;
  /** optional extra props to spread on the button element */
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const BackButton = forwardRef<HTMLDivElement, BackButtonProps>(function BackButton(
  {
    to,
    containerClassName = "md:max-w-md",
    buttonClassName =
      "px-6 md:px-6 h-10 md:h-11 rounded-xl backdrop-blur-md border border-white/20 bg-white/5 text-white/80 font-medium cursor-pointer flex items-center",
    className,
    buttonProps,
    ...rest
  },
  ref
) {
  const navigate = useNavigate();
  const { mood } = useParams<{ mood?: string }>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // call any provided onClick first
    if (buttonProps && typeof buttonProps.onClick === "function") {
      (buttonProps.onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
    }

    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  // Dynamic button text based on context
  const buttonText = mood ? (
    <>
      Back to{" "}
      <span className="text-blue-400">
        {mood.replace("-", " ").toUpperCase()}
      </span>{" "}
      Page
    </>
  ) : (
    <>
      Back to <span className="text-blue-400">HOME</span>
    </>
  );

  const outerClasses = `${containerClassName} ${className ?? ""}`.trim();


  return (
    <motion.div
      ref={ref}
      className={outerClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      {...(rest as unknown as React.ComponentProps<typeof motion.div>)}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        className={buttonClassName}
        whileHover={{
          backgroundColor: "rgba(255,255,255,0.10)",
          borderColor: "rgba(255,255,255,0.40)",
          color: "rgba(255,255,255,1)",
          boxShadow:
            "0 0 8px rgba(99,102,241,0.5), 0 0 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        {...(buttonProps as unknown as React.ComponentProps<typeof motion.button>)}
      >
        {/* Left arrow SVG */}
        <img src={Icon} alt="Left Arrow" className="w-6 h-6 md:w-8 md:h-8h-8 mr-5" />

        <span className="text-sm md:text-md md:pt-1">{buttonText}</span>
      </motion.button>
    </motion.div>
  );
});

BackButton.displayName = "BackButton";

export default BackButton;
