import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

type MenuProps = {
    scrollToAboutMe: () => void;
    scrollToSkills: () => void;
    scrollToCertificate: () => void;
    scrollToProfessionalExperience: () => void;
    scrollToProject: () => void;
    scrollToContactMe: () => void;
};
export default function Menu({
    scrollToAboutMe,
    scrollToSkills,
    scrollToCertificate,
    scrollToProfessionalExperience,
    scrollToProject,
    scrollToContactMe
}: MenuProps) {
    const [open, setOpen] = useState(false);



    return (<div className=" flex justify-center">
        <nav className="fixed bg-[#62646d]  shadow-md top-0  z-50 opacity-85 w-[92%] mx-auto rounded-2xl lg:mt-5">
            <div className="max-w-6xl mx-auto px-4 flex items-center md:justify-center   h-16">
                {/* دسکتاپ */}
                <ul className="hidden md:flex space-x-10 text-white font-medium">

                    <li onClick={scrollToAboutMe} className="cursor-pointer">
                        About Me
                    </li>
                    <li onClick={scrollToSkills} className="cursor-pointer">
                        skills
                    </li>
                    <li onClick={scrollToCertificate} className="cursor-pointer">
                        Certificate
                    </li>
                    <li onClick={scrollToProfessionalExperience} className="cursor-pointer">
                        Professional Experience
                    </li>
                    <li onClick={scrollToProject} className="cursor-pointer" >
                        Project
                    </li>
                    <li onClick={scrollToContactMe} className="cursor-pointer" >
                        Contact Me
                    </li>
                </ul>

                {/* موبایل */}
                <button
                    className="md:hidden  text-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X color="white" size={26} /> : <MenuIcon color="white" size={26} />}
                </button>
            </div>

            {/* منوی موبایل */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#62646d] text-shadow-lg transform ${open ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4 text-white font-medium">
                    <li onClick={scrollToAboutMe} className="cursor-pointer">
                        About Me
                    </li>
                    <li onClick={scrollToSkills} className="cursor-pointer">
                        skills
                    </li>
                    <li onClick={scrollToCertificate} className="cursor-pointer">
                        Certificate
                    </li>
                    <li onClick={scrollToProfessionalExperience} className="cursor-pointer">
                        Professional Experience
                    </li>
                    <li onClick={scrollToProject} className="cursor-pointer" >
                        Project
                    </li>
                    <li onClick={scrollToContactMe} className="cursor-pointer" >
                        Contact Me
                    </li>
                </ul>
            </div>

            {/* پس‌زمینه تار وقتی منو بازه */}
            {open && (
                <div
                    className="fixed inset-0 bg-[#00000069]  z-30"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </nav>
    </div>

    );
}
