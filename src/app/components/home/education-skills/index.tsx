"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setEducationData(data.educationData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">

          {/* Background Vector */}

          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="absolute top-0 left-0 -translate-y-1/2 hidden md:block"
          />

          <div className="relative z-10 py-16 md:py-32">

            {/* Heading */}

            <div className="flex items-center justify-between border-b border-black pb-7 mb-10 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-black">( 03 )</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">

              {/* ================= EDUCATION ================= */}

              <div className="w-full lg:max-w-md flex flex-col gap-10">

                {educationData?.education?.map(
                  (value: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-5"
                    >
                      <div className="mt-2 w-4 h-4 rounded-full border-2 border-lime-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      </div>

                      <div>

                        <h4 className="text-xl font-semibold text-black">
                          {value.title}
                        </h4>

                        {value.course && (
                          <p className="italic text-gray-500 mt-1">
                            {value.course}
                          </p>
                        )}

                        <p className="mt-3 leading-7 text-gray-700">
                          {value.description}
                        </p>

                      </div>
                    </div>
                  )
                )}

              </div>

              {/* ================= SKILLS ================= */}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">

                {educationData?.skills?.map(
                  (value: any, index: number) => (
                    <div
                      key={index}
                      className="
                      group
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      p-6
                      flex
                      flex-col
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:border-lime-500
                      hover:shadow-[0_0_20px_rgba(132,204,22,0.25)]
                      hover:-translate-y-2
                      cursor-pointer
                    "
                    >

                      <Image
                        src={getImgPath(value.icon)}
                        alt={value.name}
                        width={64}
                        height={64}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                      <h5 className="mt-5 text-center font-semibold text-gray-800 group-hover:text-lime-600 transition-colors">
                        {value.name}
                      </h5>

                    </div>
                  )
                )}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
