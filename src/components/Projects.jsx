import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import { cloud, codefolder, build,project2,project3,project1} from "../assets";
const Card = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[180px] h-[140px] ${styles.flexCenter} `}>
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

const Projects = () => (
  <section id="features" className={layout.section} >
    <div className="absolute z-[0] w-[60%] h-[80%] -right-[55%] rounded-full blue__gradient " />
    <div className={layout.sectionInfo}>
      <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl mx-5">
        <img
          class="w-[220px] h-[160px] md:rounded-none rounded-full mx-auto mt-6"
          src={project1}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-lg text-sky-500 dark:text-sky-400">Project 1</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
        </div>
      </div>
    </div>
    <div className={layout.sectionInfo}>
      <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl mx-5">
        <img
          class="w-[220px] h-[160px]  md:rounded-none rounded-full mx-auto mt-6"
          src={project2}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-lg text-sky-500 dark:text-sky-400">Project 2</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
        </div>
      </div>
    </div>
    <div className={layout.sectionInfo}>
      <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl mx-5">
        <img
          class="w-[220px] h-[160px] md:rounded-none rounded-full mx-auto mt-6"
          src={project3}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-lg text-sky-500 dark:text-sky-400">Project 3</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
        </div>
      </div>
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      <div className="bg-black-gradient-2  rounded-lg hover:drop-shadow-xl">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-6"
          src={codefolder}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Personal Project 2</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
        </div>
      </div>
    </div> */}
  </section>
);

export default Projects;
