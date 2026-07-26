import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "May 2023 – June 2023",
            title: "Python Intern",
            company: "iROHUB Infotech Pvt. Ltd.",
            type: "Fulltime",
            description: "Gained hands-on experience in Python programming, debugging, software development, and problem-solving through practical assignments."
        },
        {
            year: "Sep 2025 - Nov 2025",
            title: "DCIP Intern",
            company: "District Collectorate",
            type: "Fulltime",
            description: "Completed a three-month internship assisting in administrative activities, election-related coordination, and inter-departmental communication. Developed teamwork, organizational, and public administration skills."
        },
        {
            year: "Dec 2025 - May 2026",
            title: "Data Analyst Intern",
            company: "Infoparks Kerala",
            type: "Fulltime",
            description: "Performed data extraction, analysis, visualization, quality assurance, and cross-functional collaboration to deliver accurate, data-driven insights and operational support."
            
        },
        
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-black">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h4 className="font-bold mb-2 text-black">{exp.year}</h4>
                                    <h5 className="text-lg font-normal">{exp.title}</h5>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 2 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 2 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;