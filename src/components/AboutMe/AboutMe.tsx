import profAbout from "../../assets/Prof.jpg"

export const AboutMe = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {

    return (
        <div className="flex flex-col gap-8" ref={sectionRef}>
            <div className="mt-3 lg:w-[70%] lg:mx-auto">
                <h1 className="text-center text-[#284258] text-2xl font-semibold lg:text-left lg:text-4xl">
                    About <span className="border-b-6 pb-2 border-[#fec500]">Mostafa</span> Ghadiri
                </h1>
            </div>
            <div className="flex flex-col items-center gap-10 bg-white py-10 rounded-4xl mx-5.5 lg:w-[70%] lg:mx-auto lg:flex-wrap lg:flex-row lg:justify-center lg:gap-30">
                <div>
                    <img src={profAbout} alt="" className="rounded-full w-40 h-50 object-cover lg:w-88 lg:h-100" />
                </div>
                <div className="px-6 lg:w-[50%]">
                    <p className="text-[#818181] text-xl leading-8">

                        Hello , I’m <span className="text-[#2f3c4e] font-semibold">Mostafa Ghadiri</span>, born in 2004 and based in Tehran, Iran.
                        I hold a <span className="text-[#2f3c4e] font-semibold">React certification</span> from the Tehran Technical Complex.

                        For over a year, I’ve been actively focused on <span className="text-[#2f3c4e] font-semibold">Front-End Development</span> , building multiple  projects using <span className="text-[#2f3c4e] font-semibold">React</span> ,<span className="text-[#2f3c4e] font-semibold">TypeScript</span> , <span className="text-[#2f3c4e] font-semibold">TailwindCSS</span>, and <span className="text-[#2f3c4e] font-semibold">JavaScript</span>. My main focus is on creating efficient, user-friendly, and well-structured interfaces with clean and <span className="text-[#2f3c4e] font-semibold">maintainable code</span> .

                        I’m constantly learning and improving my skills to develop future projects with higher standards and a more <span className="text-[#2f3c4e] font-semibold">professional</span>  approaches. </p>

                </div>
                <div>
                    <ul className="text-center flex flex-col gap-5  lg:flex-row lg:gap-30 text-[#284258]">
                        <li>
                            <div>
                                <span className="text-6xl font-bold">
                                    +5
                                </span>
                                <h4 className="text-xl font-semibold">Projects</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="text-6xl font-bold">
                                    +994
                                </span>
                                <h4 className="text-xl font-semibold">Coffee</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="text-6xl font-bold">
                                    +340
                                </span>
                                <h4 className="text-xl font-semibold">Days of Experience</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
