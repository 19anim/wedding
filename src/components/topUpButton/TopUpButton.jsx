import { motion } from "motion/react";
import ArrowUp from "../../assets/arrow-up-circle-outline.svg";

function TopUpButton(props) {
  return (
    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.96 }} href="#" className="fixed bottom-[50px] right-[50px] size-10">
      <img
        src={ArrowUp}
        alt=""
        style={{
          filter: "invert(66%) sepia(74%) saturate(533%) hue-rotate(307deg) brightness(115%) contrast(107%)",
        }}
      />
    </motion.a>
  );
}

export default TopUpButton;
