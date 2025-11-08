import { ContactForm } from "../ContactForm/ContactForm"
import { Title } from "../Title/Title"
import anime from "../../assets/anime.png"
export const ContactMe = ({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) => {
    return (
        <div ref={sectionRef}>
            <Title titleText={"Contact Me"} />
            <div className="bg-[#303e53] w-[95%] mx-auto mt-10 rounded-2xl p-8 lg:w-[70%] lg:flex lg:justify-center lg:gap-40 ">
                <div>
                    <div className="bg-[#4b586b]  rounded-t-2xl p-3">
                        <div className=" flex flex-col text-center gap-8">
                            <h1 className="text-4xl text-[#ffffff] font-bold">Get in Touch</h1>
                            <p className="text-[#c1c3c8] text-xl font-semibold">Don’t want to use the form? You can reach me via email or phone.</p>
                            <p><a href="mailto:mostafaghr12345@gmail.com" className="text-[#c1c3c8] text-lg font-semibold">mostafaghr12345@gmail.com</a></p>
                            <p><a href="tel:+989101935794" className="text-[#c1c3c8] text-xl font-semibold">+98 910 193 5794</a></p>
                        </div>

                    </div>
                    <div className="">
                        <ContactForm />
                    </div>
                </div>

                <div className="hidden lg:block w-[40%] lg:items-center justify-center mt-25">
                    <img src={anime} alt="" />
                </div>

            </div>
        </div>
    )
}
