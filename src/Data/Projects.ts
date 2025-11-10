export interface ProjectType {
    id: number;
    title: string;
    shortDesc: string;
    fullDesc: string;
    mainImage: string;
    images?: string[];
    techs: string[];
    role: string;
    date: string;
    github?: string;
    demo?: string;
}
import mainKharjNegar from "../assets/KharjNegar/mainKharjNegar.png"
import sideKharjNegar from "../assets/KharjNegar/sideKharjNegar.png"
import sideKharjNegar2 from "../assets/KharjNegar/sideKharjNegar2.png"


import mainKGlowCart from "../assets/GlowCart/mainGlowCart.png"
import sideKGlowCart from "../assets/GlowCart/sideGlowCart.png"
import sideKGlowCart2 from "../assets/GlowCart/sideGlowCart2.png"

import mainKChiBepazam from "../assets/ChiBepazam/mainChiBepazam.png"
import sideKChiBepazam from "../assets/ChiBepazam/sideChiBepazam.png"
import sideKChiBepazam2 from "../assets/ChiBepazam/sideChiBepazam2.png"


import mainKFeedBack from "../assets/FeedBack/mainFeedBack.png"
import sideFeedBack from "../assets/FeedBack/sideFeedBack.png"
import sideFeedBack2 from "../assets/FeedBack/sideFeedBack2.png"


import mainToDo from "../assets/ToDo/mainToDo.png"
import sideToDo from "../assets/ToDo/sideToDo.png"
import sideToDo2 from "../assets/ToDo/sideToDo2.png"



export const projectsData: ProjectType[] = [
    {
        id: 1,
        title: "Kharj Negar",
        shortDesc: "A finance tracker app with budget progress and charts.",
        fullDesc:
            "A responsive React + TypeScript app that lets users log their expenses, categorize them, and visualize their spending through charts.",
        mainImage: mainKharjNegar,
        images: [

            sideKharjNegar,
            sideKharjNegar2

        ],
        techs: ["React", "TypeScript", "TailwindCSS"],
        role: "Front-end Developer",
        date: "2025-07",
        github: "https://github.com/artisher/kharjNegar",
        demo: "https://artisher.github.io/kharjNegar/",
    },

    {
        id: 2,
        title: "Glow Cart",
        shortDesc: "GlowCart is a modern, responsive, and fully designed e-commerce demo built for beauty and personal care products.",
        fullDesc: "GlowCart is a modern, responsive, and fully designed e-commerce demo built for beauty and personal care products.It’s a frontend- focused showcase project created with React + TypeScript + Tailwind CSS, including both Customer and Admin panels, mock data, and an elegant UI optimized for performance and scalability.",
        mainImage: mainKGlowCart,
        images: [sideKGlowCart, sideKGlowCart2],
        techs: ["React", "TypeScript", "TailwindCSS"],
        role: "Front-end Developer",
        date: "2025-6",
        github: "https://github.com/artisher/GlowCart",
        demo: "https://glow-cart-qyuh.vercel.app/",
    },
    {
        id: 3,
        title: "Chi Bepazam",
        shortDesc: "A web app that suggests meals based on the ingredients you have at home. No more asking yourself every day",
        fullDesc: "A web app that suggests meals based on the ingredients you have at home. No more asking yourself every day, What should I cook? — this app gives you the answer!Project Idea Often, we have ingredients in the fridge but don’t know what to make with them. “Chi Bepazam?” solves this problem: just enter your ingredient list, and the app suggests dishes you can cook with what you have.",
        mainImage: mainKChiBepazam,
        images: [sideKChiBepazam, sideKChiBepazam2],
        techs: ["React", "TypeScript", "TailwindCSS"],
        role: "Front-end Developer",
        date: "2024-12",
        github: "https://github.com/artisher/chibepazam",
        demo: "https://artisher.github.io/chibepazam/",
    },
    {
        id: 4,
        title: "Feedback Sample",
        shortDesc: "A user feedback system with advanced features like likes, filtering, API integration, and company detection via hashtags.",
        fullDesc: "A user feedback system with features like 📝 submitting feedback, 📤 storing via real API(POST), 🔍 filtering by company or other criteria, 👍 liking other users’ feedback, 🏷️ detecting companies from hashtags(e.g., #Digikala shows a special badge), and 📱 a simple, mobile - friendly design.",
        mainImage: mainKFeedBack,
        images: [sideFeedBack, sideFeedBack2],
        techs: ["JavaScript", "CSS"],
        role: "Front-end Developer",
        date: "2024-4",
        github: "https://github.com/artisher/Feed-back-sample.js",
        demo: "https://artisher.github.io/Feed-back-sample.js/",
    },
    {
        id: 5,
        title: "Advanced To-Do List",
        shortDesc: "A clean and functional to-do list app with the following features:✅ Persistent task storage using LocalStorage ✅ Ability to add, delete, edit, and complete tasks ✅",
        fullDesc: "A clean and functional to-do list app with the following features:✅ Persistent task storage using LocalStorage ✅ Ability to add, delete, edit, and complete tasks ✅ Smooth animations for better user experience 🚧 Currently under development with ongoing improvements",
        mainImage: mainToDo,
        images: [sideToDo, sideToDo2],
        techs: ["JavaScript", "React", "CSS"],
        role: "Front-end Developer",
        date: "2024-6",
        github: "https://github.com/artisher/Advance-To-Do-List",
        demo: "https://artisher.github.io/Advance-To-Do-List/",
    },
];