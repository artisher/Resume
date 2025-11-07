import { useState } from "react"
import skillsList from "../../Data/Skills"
import { Title } from "../Title/Title"

export const Skills = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {
    const [SkillList] = useState(skillsList)

    return (
        <div className="relative flex flex-col gap-10 overflow-hidden" ref={sectionRef}>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-[#fec500] rounded-t-full z-1"></div>
            <Title titleText={"Technical Skills"} />
            <div className=" z-10 flex flex-col items-center gap-15 bg-white mb-15 py-10 rounded-4xl mx-5.5 lg:w-[70%] lg:mx-auto lg:flex-wrap lg:flex-row lg:justify-center lg:gap-25">
                {SkillList.map((skill, index) => (
                    <div key={index} className="w-[250px] lg:w-[350px]">
                        <div className="flex justify-between">
                            <h1 className="text-[#354459] text-lg font-bold" >{skill.name}</h1>
                            <h1 className="text-[#9c9c9c] font-semibold">{skill.level}</h1>
                        </div>
                        <div className="h-1.5 bg-[#f1f1f1] rounded">
                            <div
                                className="h-1.5 bg-yellow-400 transition-all duration-700 rounded"
                                style={{ width: `${skill.percent}%` }}
                            ></div>
                        </div>

                    </div>
                ))}
            </div >
        </div>
    )
}
