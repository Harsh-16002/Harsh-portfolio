import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-auto min-h-screen mx-auto">
      {/* Desktop layout: text absolute, model behind */}
      <div
        className={`hidden sm:flex absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex-row items-start gap-5`}
      >
        {/* Side line + dot */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-80 violet-gradient" />
        </div>

        {/* Main Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Harsh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Websites, user <br className="sm:block hidden" />
            interfaces and web applications.
          </p>
        </div>
      </div>

      {/* Mobile layout: stacked */}
      <div className="flex flex-col sm:hidden px-6 pt-24 items-start gap-5">
        {/* Side line + dot */}
        <div className="flex flex-row gap-3 items-start">
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-24 violet-gradient" />
          </div>
          <div>
            <h1 className="text-[32px] text-white font-bold">
              Hi, I'm <span className="text-[#915EFF]">Harsh</span>
            </h1>
            <p className="text-[16px] text-white-100 mt-2">
              I develop Websites, user <br />
              interfaces and web applications.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Model Section */}
      <div className="h-[250px] sm:h-[500px] md:h-[700px] mt-10 sm:mt-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
