import ArrowUp from "../../assets/arrow-up-circle-outline.svg";
import { motion } from "motion/react";

const TopUpButton = () => {
  const handleTopUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.section
      whileTap={{
        scale: 0.96,
      }}
      whileHover={{
        scale: 1.1,
      }}
      onClick={handleTopUpClick}
      className="fixed bottom-[50px] right-[50px] size-10 z-[100] cursor-pointer"
    >
      <img
        src={ArrowUp}
        alt=""
        style={{
          filter:
            "invert(66%) sepia(74%) saturate(533%) hue-rotate(307deg) brightness(115%) contrast(107%)",
        }}
      />
    </motion.section>
  );
};

export default TopUpButton;
