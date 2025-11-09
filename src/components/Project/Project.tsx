import { useState } from "react"
import { projectsData } from "../../Data/Projects"

export const Project = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [zoomedImage, setZoomedImage] = useState<string | null>(null)

    const handleOpenModal = (index: number) => setSelectedProject(index)
    const handleCloseModal = () => setSelectedProject(null)
    const handleZoomImage = (img: string) => setZoomedImage(img)
    const handleCloseZoom = () => setZoomedImage(null)

    return (
        <div className="mb-10" ref={sectionRef}>
            <h1 className="text-4xl font-bold text-center mb-10 text-[#354474]">My Projects</h1>

            <div className="flex flex-col items-center gap-10 mt-8.5 p-5 rounded-2xl bg-[#ffffff] 
        lg:flex-row lg:flex-wrap lg:w-[70%] lg:mx-auto lg:gap-15">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => handleOpenModal(index)}
                        className="group cursor-pointer rounded-2xl w-[70%] border-4 pb-2 border-amber-300 flex flex-col 
              lg:w-[30%] hover:bg-[#354459] hover:border-[#fec500] hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <img src={project.mainImage} alt="" className="rounded-t-2xl" />
                        <div className="px-2 flex flex-col grow">
                            <h2 className="text-center text-2xl pt-2 text-[#354474] font-semibold group-hover:text-white">
                                {project.title}
                            </h2>
                            <h3 className="text-center pb-3 text-[#354474] font-semibold line-clamp-3 group-hover:text-white">
                                {project.shortDesc}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== PROJECT MODAL ===== */}
            {selectedProject !== null && (
                <div
                    onClick={handleCloseModal}
                    className="fixed inset-0 bg-black/35  flex justify-center items-center z-50 backdrop-blur-xs"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl w-[95%] lg:w-[80%] max-w-5xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-4 text-[#354459] cursor-pointer hover:text-[#fec500] text-3xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Main Image */}
                        <img
                            onClick={() => handleZoomImage(projectsData[selectedProject].mainImage)}
                            src={projectsData[selectedProject].mainImage}
                            alt=""
                            className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl mb-4 cursor-zoom-in"
                        />

                        <h2 className="text-3xl font-bold text-[#354474] mb-2">
                            {projectsData[selectedProject].title}
                        </h2>
                        <p className="text-gray-700 mb-4">{projectsData[selectedProject].fullDesc}</p>

                        {/* Additional Images */}
                        {projectsData[selectedProject].images && projectsData[selectedProject].images.length > 0 && (
                            <div className="flex gap-3  overflow-x-auto mb-4">
                                {projectsData[selectedProject].images.map((img, i) => (
                                    <img
                                        key={i}
                                        onClick={() => handleZoomImage(img)}
                                        src={img}
                                        className="w-48 h-32 lg:w-60 lg:h-40 object-cover rounded-lg shrink-0 cursor-zoom-in"
                                    />
                                ))}
                            </div>
                        )}

                        {/* Techs */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projectsData[selectedProject].techs.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-[#fec500] text-[#354459] px-3 py-1 rounded-full text-md font-semibold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Role & Date */}
                        <div className="text-sm text-gray-600 mb-4 flex justify-between">
                            <p className="text-xl"><strong>Role:</strong> {projectsData[selectedProject].role}</p>
                            <p className="text-xl"><strong>Date:</strong> {projectsData[selectedProject].date}</p>
                        </div>

                        {/* GitHub & Demo */}
                        <div className="flex gap-4">
                            {projectsData[selectedProject].github && (
                                <a
                                    href={projectsData[selectedProject].github}
                                    target="_blank"
                                    className="bg-[#354459] hover:bg-[#fec500] hover:text-[#354459] hover:scale-105 text-white px-5 py-2 rounded-full transition-all"
                                >
                                    GitHub
                                </a>
                            )}
                            {projectsData[selectedProject].demo && (
                                <a
                                    href={projectsData[selectedProject].demo}
                                    target="_blank"
                                    className="bg-[#354459] hover:bg-[#fec500] hover:text-[#354459] hover:scale-105 text-white px-5 py-2 rounded-full transition-all"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ===== ZOOMED IMAGE MODAL ===== */}
            {zoomedImage && (
                <div
                    onClick={handleCloseZoom}
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                >
                    <img
                        src={zoomedImage}
                        alt=""
                        className="max-w-[90%] max-h-[90%] rounded-xl object-contain cursor-zoom-out"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={handleCloseZoom}
                        className="absolute top-5 right-5 text-white text-4xl font-bold"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    )
}
