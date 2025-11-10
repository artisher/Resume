import { Github, Instagram, Linkedin } from "lucide-react"
import prof from "../../assets/Prof.jpg"
import mousDawn from "../../assets/mouseDown.png"


export const Header = () => {
    return (
        <div>


            <div
                className=" flex flex-col  gap-10 justify-center items-center py-5 lg:flex-row lg:mt-[200px] lg:gap-80"
            >
                <div className="  mt-2 ">
                    <img src={prof} alt="profile" className="rounded-full w-40 h-40 object-cover lg:w-88 lg:h-100" />
                </div>

                <div className="text-center text-white flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[32px] font-bold lg:text-6xl">Mostafa Ghadiri</h1>
                        <h2 className="text-lg  text-gray-200 mb-4 lg:text-4xl">I'm a <span className="opacity-100 font-bold text-white">Front-End</span> Developer</h2>
                    </div>
                    <div className="flex flex-col justify-center  gap-4 lg:flex-row">
                        <a
                            href="/mostafaGhadiriResume.pdf"
                            download

                            className="bg-[#fec500] cursor-pointer text-[#354459] px-4 py-2 rounded-full w-[180px] font-semibold
                     hover:bg-yellow-500  transition lg:text-2xl lg:w-[250px] lg:py-3">
                            Download Resume
                        </a>

                        <div className="flex  gap-4">
                            <Instagram className="cursor-pointer hover:text-pink-500 transition lg:size-10" />
                            <a href="https://www.linkedin.com/in/mostafa-ghadiri-dev/"><Linkedin className="cursor-pointer hover:text-blue-500 transition lg:size-10" /></a>
                            <a href="https://github.com/artisher"><Github className="cursor-pointer hover:text-gray-400 transition lg:size-10" /></a>
                        </div>

                    </div>
                </div>

            </div>
            <div className="hidden lg:flex lg:flex-col  items-center">
                <img src={mousDawn} alt="" className="w-25 h-25" />
                <h1 className=" text-[#e3e3e9] text-2xl">Scroll Down</h1>
            </div>

        </div>
    )
}