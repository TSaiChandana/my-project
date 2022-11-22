import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import { python, kubernetes, docker } from "../assets";

const Courses = () => (
  <section id="features" className={layout.section}>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
      <div className="flex justify-between flex-col px-4 py-12 rounded-[20px]  max-w-[400px] md:mr-5 sm:mr-2 mx-0 my-5 ">
        <div class="wrapper  bg-black-gradient-3 antialiased text-gray-900 p-2 rounded-lg shadow-lg shadow-cyan-500/30">
          <div class="relative px-4 -mt-16">
            <img
              src={python}
              alt=" random imgee"
              class="w-[350px] h-[200px] object-cover object-center rounded-lg shadow-md"
            />
            <div class="p-5">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Easy
                </span>
                <div class="ml-2 text-white uppercase text-xs font-semibold tracking-wider">
                  45 hours &bull; 45,567
                </div>
              </div>

              <h4 class="mt-1 text-xl text-white font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div class="mt-1">
                $1800
                <span class="text-white text-sm">
                  Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny
                </span>
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
              <button
                type="button"
                className={`py-2 px-4 mt-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col px-4 py-12 rounded-[20px]  max-w-[400px] md:mx-5 sm:mr-2 mx-0 my-5 ">
        <div class="wrapper  bg-black-gradient-3 antialiased text-gray-900 p-2 rounded-lg shadow-lg shadow-cyan-500/30">
          <div class="relative px-4 -mt-16">
            <img
              src={kubernetes}
              alt=" random imgee"
              class="w-[350px] h-[200px] object-cover object-center rounded-lg shadow-md"
            />
            <div class="p-5">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Easy
                </span>
                <div class="ml-2 text-white uppercase text-xs font-semibold tracking-wider">
                  45 hours &bull; 45,567
                </div>
              </div>

              <h4 class="mt-1 text-xl text-white font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div class="mt-1">
                $1800
                <span class="text-white text-sm">
                  Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny
                </span>
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
              <button
                type="button"
                className={`py-2 px-4 mt-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col px-4 py-12 rounded-[20px]  max-w-[400px]  md:mx-5 sm:mr-2 mx-0 my-5 ">
        <div class="wrapper  bg-black-gradient-3 antialiased text-gray-900 p-2 rounded-lg shadow-lg shadow-cyan-500/30">
          <div class="relative px-4 -mt-16">
            <img
              src={docker}
              alt=" random imgee"
              class="w-[350px] h-[200px] object-cover object-center rounded-lg shadow-md"
            />
            <div class="p-5">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Easy
                </span>
                <div class="ml-2 text-white uppercase text-xs font-semibold tracking-wider">
                  45 hours &bull; 45,567
                </div>
              </div>

              <h4 class="mt-1 text-xl text-white font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div class="mt-1">
                $1800
                <span class="text-white text-sm">
                  Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny
                </span>
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
              <button
                type="button"
                className={`py-2 px-4 mt-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Courses;
