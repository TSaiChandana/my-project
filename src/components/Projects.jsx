import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import { cloud,codefolder,build,deploy,tech} from "../assets";
const Card = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[200px] h-[200px] ${styles.flexCenter} `}>
      <img src={icon} alt="star" className="w-[100%] h-[100%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Projects= () =>  (
  <section id="features" className={layout.section}>
<div className={layout.sectionInfo}>
    {/* <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8"> */}
  {/* <div class="transform scale-110 -rotate-6">
    <img src={build} alt="" loading="lazy"/>
  </div> */}
  {/* <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
    <img src={deploy} alt="" loading="lazy"/>
  </div> */}
  {/* <div class="transform scale-150 translate-y-11">
    <img src={tech} alt="" loading="lazy"/>
  </div> */}
  {/* <div class="transform translate-y-24">
    <img src={codefolder} alt="" loading="lazy"/>
  </div>
  <div class="row-start-2 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
    <img src={cloud} alt="" loading="lazy"/>
  </div> */}
    {/* </div> */}
    <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-6" src={build} alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Personal Project 1
      </div>
    </figcaption>
    <blockquote>
      <p class="text-lg font-medium text-white">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
  </div>
    </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
    <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-6" src={codefolder} alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Personal Project 2
      </div>
    </figcaption>
    <blockquote>
      <p class="text-lg font-medium text-white">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
  </div>
    </div>
    </div>
  </section>
);

export default Projects;