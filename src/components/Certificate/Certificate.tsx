import certificate from "../../assets/certificate-en.jpg"
import { Title } from "../Title/Title"

export const Certificate = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {

    return (
        <div ref={sectionRef}>

            <Title titleText={"Certificate"} />

            <div className=" z-50 flex flex-col items-center gap-15 bg-[#eeeeee]  my-15 py-10 px-3
             rounded-4xl mx-5.5 lg:w-[70%] lg:mx-auto lg:flex-wrap lg:flex-row lg:justify-center lg:gap-25">
                <div className="group bg-white rounded-2xl flex flex-col gap-2 hover:bg-[#354459] hover:border-4 hover:border-[#fec500] hover:scale-105 transition-all duration-300 ease-in-out lg:w-[30%] cursor-pointer">
                    <img src={certificate} alt="ReactCertificate " className="rounded-t-2xl" />
                    <h3 className="text-[#354474] text-xl font-semibold p-3 text-center lg:mb-4 lg:text-[26px] group-hover:text-white">React Certificate</h3>
                </div>
            </div>
        </div>
    )
}
