import { workExperience } from "../../Data/WorkPlace"
import { Title } from "../Title/Title"

export const ProfessionalExperience = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {
    return (
        <div ref={sectionRef}>
            <Title titleText={"Professional Experience"} />
            <div className="w-[90%] mx-auto bg-[#eeeeee]   flex flex-col p-5 mt-8 items-center rounded-2xl  lg:flex-wrap lg:w-[70%] lg:mx-auto lg:gap-15">
                {workExperience.map((work) => (
                    <div
                        key={work.id}
                        className="group cursor-pointer bg-white rounded-2xl w-[70%] border-4 h-60 pb-2 border-amber-300 flex flex-col lg:w-[30%] lg:h-80 hover:bg-[#354459] hover:border-4 hover:border-[#fec500] hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <img src={work.mainImage} alt="" className="rounded-t-2xl" />
                        <div className="px-2">
                            <h2 className="text-center text-2xl pt-2 text-[#354474] font-semibold group-hover:text-white lg:text-3xl">
                                {work.company}
                            </h2>
                            <div className="flex justify-center">
                                <h3 className="text-center pb-3 text-[#354474] font-semibold line-clamp-3  group-hover:text-white lg:text-xl">{work.startDate}</h3>
                                <span className=" group-hover:text-white font-semibold text-[#354474] lg:text-xl">-</span>
                                <h3 className="text-center pb-3 text-[#354474] font-semibold line-clamp-3  group-hover:text-white lg:text-xl">
                                    {work.endDate}
                                </h3>

                            </div>
                            <h3 className="text-center text-[#354474] font-semibold group-hover:text-white lg:text-xl" >{work.position}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
