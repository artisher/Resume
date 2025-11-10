import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_wdg3ilf",   // 🔹 Service ID
                "template_koo61ni",  // 🔹 Template ID
                formRef.current,
                "Fw-K-3K9Xyfa7leJD"  // 🔹 Public Key
            )
            .then(
                () => {
                    alert("✅Email successfully send");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("Error:", error.text);
                    alert("❌Error");
                }
            );
    };

    return (
        <div className="bg-[#4b586b] rounded-b-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="text-xl rounded-b-2xl lg:w-full text-[#cfd9e9]">
                <div className="rounded-b-2xl p-8 flex flex-col gap-20 lg:w-full">
                    <input name="name" type="text" placeholder="Name"
                        className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" />

                    <input name="email" type="email" placeholder="Email"
                        className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" />

                    <input name="title" type="text" placeholder="Title"
                        className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" />

                    <textarea name="message" placeholder="Text"
                        className="resize-none border-b-2 lg:w-full border-[#cfd9e9] placeholder:text-[#cfd9e9]" />
                </div>

                <button
                    type="submit"
                    className="w-full text-[#3a4757] h-12 text-2xl font-semibold bg-[#ffc700] rounded-b-2xl lg:h-16 cursor-pointer hover:rounded-b-none hover:bg-[#dcb116] transition-all duration-300 ease-in-out">
                    Submit
                </button>
            </form>
        </div>
    );
};
