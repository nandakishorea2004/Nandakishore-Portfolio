"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Nandakishore</h1>
                </div>
              <TypeAnimation
              sequence={[
                "Data Analyst Aspirant",
                2000,
                "Machine Learning Explorer",
                2000,
                "AI & ML Student",
                2000,
                "Flutter Developer",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="mt-3 text-2xl md:text-3xl font-semibold text-lime-500"
              />
            </div>
            
          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-removebg-preview.png")}
            alt="banner"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden lg:block w-[55%] h-full">
  <Image
    src={getImgPath("/images/home/banner/banner-removebg-preview.png")}
    alt="banner"
    fill
  priority
  className="object-contain object-right -translate-x-20"
  />
</div>
    </section>
  );
};

export default index;
