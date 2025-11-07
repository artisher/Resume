import { projectsData } from "../../Data/Projects"
import { Title } from "../Title/Title"

export const Project = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {

    return (

        <div className="mb-10" ref={sectionRef}>
            <Title titleText={"My Projects"} />
            <div className="flex flex-col items-center gap-10 mt-8.5 p-5 rounded-2xl bg-[#ffffff]  lg:flex-row lg:flex-wrap lg:w-[70%] lg:mx-auto lg:gap-15">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer  rounded-2xl w-[70%] border-4 h-60 pb-2 border-amber-300 flex flex-col lg:w-[30%] lg:h-80 hover:bg-[#354459] hover:border-4 hover:border-[#fec500] hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <img src={project.mainImage} alt="" className="rounded-t-2xl" />
                        <div className="px-2">
                            <h2 className="text-center text-2xl pt-2 text-[#354474] font-semibold group-hover:text-white">
                                {project.title}
                            </h2>
                            <h3 className="text-center pb-3 text-[#354474] font-semibold line-clamp-3  group-hover:text-white">
                                {project.shortDesc}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
