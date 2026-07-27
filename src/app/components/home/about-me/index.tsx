import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  const strengths = [
    "Data Analysis",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "Flutter",
    "Firebase",
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking"
  ];

  const languages = ["English", "Hindi", "Malayalam"];

  return (
    <section>
      <div className="relative bg-softGray py-16 md:py-32">
        {/* Background Pattern */}
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">

            {/* Heading */}
            <div className="flex items-center justify-between border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-black">( 01 )</p>
            </div>

            {/* Content */}
            <div className="pt-12 xl:pt-16 flex flex-col lg:flex-row gap-12 items-center">

              {/* Profile Image */}
              <div className="hidden lg:block w-[320px]">
                <Image
                  src={getImgPath("/images/home/about-me/about banner me.png")}
                  alt="About Me"
                  width={320}
                  height={450}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">

                <h3 className="text-3xl font-bold text-black mb-6">
                  Hello, I'm Nandakishore 👋
                </h3>

                <p className="text-lg leading-8 text-gray-700">
                  I am an Integrated M.Sc. Computer Science student specializing
                  in <span className="font-semibold text-lime-600">Artificial Intelligence & Machine Learning</span>
                  at Bharata Mata College, Thrikkakara.

                  <br /><br />

                  Passionate about
                  <span className="font-semibold text-lime-600"> Data Analytics</span>,
                  <span className="font-semibold text-lime-600"> Machine Learning</span>,
                  and
                  <span className="font-semibold text-lime-600"> Artificial Intelligence</span>,
                  I enjoy transforming raw data into meaningful insights and
                  developing intelligent software solutions that address
                  real-world challenges.

                  <br /><br />

                  I am continuously expanding my expertise in analytics,
                  visualization, software development, and cloud technologies
                  while actively participating in innovation programs,
                  workshops, and technical communities.
                </p>

                {/* Key Strengths */}
                <div className="mt-10">
                  <h4 className="text-2xl font-semibold text-black mb-5">
                    Key Strengths
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {strengths.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border-2 border-lime-500 px-5 py-2 text-sm font-medium text-lime-600 transition-all duration-300 hover:bg-lime-500 hover:text-white hover:shadow-[0_0_18px_rgba(132,204,22,0.5)] hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-12">

                  <div className="flex items-center gap-3 mb-5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="Language"
                      width={30}
                      height={30}
                    />

                    <h4 className="text-2xl font-semibold text-black">
                      Languages
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full border border-gray-300 bg-white px-5 py-2 text-base font-medium transition-all duration-300 hover:border-lime-500 hover:bg-lime-500 hover:text-white hover:shadow-md"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;