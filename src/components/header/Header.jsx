import Logo from "../../assets/logo.png";
import Thumbnail from "../../assets/thumbnail.jpg";
import { motion } from "motion/react";

const navItems = ["Schedule", "Our Story", "Detail", "Travel Info"];
const navItemVariant = {
  hover: { scale: 1.2, delay: 0 },
  initial: {
    opacity: 0,
    scale: 0,
  },
  inView: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: index * 0.2,
    },
  }),
};
const logoVariant = {
  initial: { opacity: 0, x: -20 },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: 0.2,
    },
  },
};

const Header = () => {
  //
  return (
    <section id="" className="snap-start h-[100vh] text-white font-montserrat text-xs sm:text-base">
      <div
        style={{
          backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),url("${Thumbnail}")`,
        }}
        className="h-[calc(100vh)] bg-cover bg-no-repeat bg-center"
      >
        <header className="h-20 flex items-center justify-between px-5">
          <div className="flex gap-2 items-center">
            <motion.img variants={logoVariant} initial="initial" whileInView="inView" src={Logo} className="w-16 h-16" alt="jager-logo" />
            <motion.p variants={logoVariant} initial="initial" whileInView="inView" className="hidden sm:inline-block">
              MEISTERS IN LOVE ♥
            </motion.p>
          </div>
          <nav className=" flex gap-4 hover:cursor-pointer">
            {navItems.map((navItem, index) => {
              return (
                <a key={navItem} href={`#${navItem.replaceAll(" ", "").toLowerCase()}`}>
                  <motion.ul custom={index + 1} variants={navItemVariant} initial="initial" whileInView="inView">
                    <motion.div variants={navItemVariant} whileHover="hover">
                      {navItem}
                    </motion.div>
                  </motion.ul>
                </a>
              );
            })}
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Header;
