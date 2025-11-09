import { useState } from "react"
import { workExperience } from "../../Data/WorkPlace"
import { Title } from "../Title/Title"

export const ProfessionalExperience = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {
    const [selectedWork, setSelectedWork] = useState<number | null>(null)
    const [zoomedImage, setZoomedImage] = useState<string | null>(null)

    const handleOpenModal = (index: number) => setSelectedWork(index)
    const handleCloseModal = () => setSelectedWork(null)
    const handleZoomImage = (img: string) => setZoomedImage(img)
    const handleCloseZoom = () => setZoomedImage(null)

    return (
        <div ref={sectionRef}>
            <Title titleText={"Professional Experience"} />
            <div className="w-[90%] mx-auto bg-[#eeeeee] flex flex-col p-5 mt-8 items-center rounded-2xl lg:flex-wrap lg:w-[70%] lg:mx-auto lg:gap-15">
                {workExperience.map((work, index) => (
                    <div
                        key={work.id}
                        onClick={() => handleOpenModal(index)}
                        className="group cursor-pointer bg-white rounded-2xl w-[70%] border-4 h-60 pb-2 border-amber-300 flex flex-col lg:w-[30%] lg:h-80 hover:bg-[#354459] hover:border-[#fec500] hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <img src={work.mainImage} alt={work.company} className="rounded-t-2xl h-[50%] object-cover" />
                        <div className="px-2 flex flex-col justify-center grow">
                            <h2 className="text-center text-2xl pt-2 text-[#354474] font-semibold group-hover:text-white lg:text-3xl">
                                {work.company}
                            </h2>
                            <div className="flex justify-center gap-2">
                                <h3 className="text-center text-[#354474] font-semibold group-hover:text-white lg:text-lg">{work.startDate}</h3>
                                <span className="text-[#354474] group-hover:text-white font-semibold">-</span>
                                <h3 className="text-center text-[#354474] font-semibold group-hover:text-white lg:text-lg">{work.endDate || "Present"}</h3>
                            </div>
                            <h3 className="text-center text-[#354474] font-semibold group-hover:text-white lg:text-xl">{work.position}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== WORK MODAL ===== */}
            {selectedWork !== null && (
                <div
                    onClick={handleCloseModal}
                    className="fixed inset-0 bg-black/35 flex justify-center items-center z-50 backdrop-blur-xs"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl w-[95%] lg:w-[70%] max-w-4xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-4 text-[#354459] cursor-pointer hover:text-[#fec500] text-3xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Main Image (Zoomable) */}
                        <img
                            onClick={() => handleZoomImage(workExperience[selectedWork].mainImage)}
                            src={workExperience[selectedWork].mainImage}
                            alt={workExperience[selectedWork].company}
                            className="w-full h-[300px] lg:h-[350px] object-cover rounded-xl mb-4 cursor-zoom-in"
                        />

                        {/* Company Info */}
                        <h2 className="text-3xl font-bold text-[#354474] mb-2">
                            {workExperience[selectedWork].company}
                        </h2>
                        <p className="text-2xl text-gray-600 mb-1">{workExperience[selectedWork].position}</p>
                        <p className="text-lg text-gray-500 mb-4">
                            {workExperience[selectedWork].startDate} - {workExperience[selectedWork].endDate || "Present"}
                        </p>

                        {/* Responsibilities */}
                        {workExperience[selectedWork].responsibilities && (
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-[#354474] mb-2">Responsibilities:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {workExperience[selectedWork].responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {workExperience[selectedWork].techs && workExperience[selectedWork].techs.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {workExperience[selectedWork].techs.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#fec500] text-[#354459] px-3 py-1 rounded-full text-md font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Links */}
                        <div className="flex gap-4 mt-4">
                            {workExperience[selectedWork].site && (
                                <a
                                    href={workExperience[selectedWork].site}
                                    target="_blank"
                                    className="bg-[#354459] hover:bg-[#fec500] hover:text-[#354459] hover:scale-105 text-white px-5 py-2 rounded-full transition-all"
                                >
                                    Visit Website
                                </a>
                            )}
                            {workExperience[selectedWork].location && (
                                <span className="text-gray-600 text-lg font-semibold">
                                    📍 {workExperience[selectedWork].location}
                                </span>
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
