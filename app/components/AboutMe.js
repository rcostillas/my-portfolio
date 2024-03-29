import React from "react";
import styles from "../style";

const AboutMe = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ paddingTop: "0" }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* </div><img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Certifications</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
