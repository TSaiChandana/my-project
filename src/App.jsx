import React from "react";
import styles from "./styles";
import { Navbar,Hero,Business, Stats,
  Billing ,
  CardDeal ,
  Testimonials,
  Clients ,
  CTA ,
  Footer ,Projects,Courses} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Hello World */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}><Navbar/></div>
    </div>

     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}><Hero/></div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Projects</span>{" "}
          </h1>
        </div>
        <Projects/>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Courses</span>{" "}
          </h1>
        </div>
        <Courses/>
        <Billing />
        <CardDeal />
        <Testimonials/>
        <Clients />
        <CTA />
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
