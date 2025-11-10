export interface WorkExperience {
    id: number;
    company: string;
    site: string;
    position: string;
    mainImage: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
    techs?: string[];
    location?: string;
}
import mainAlaanMed from "../assets/alaanMed/mainAlaanMed.png"



export const workExperience: WorkExperience[] = [
    {
        id: 1,
        company: "AlaanMed",
        site: "https://alaanmed.com/",
        position: "Intern Front-end Developer",
        mainImage: mainAlaanMed,
        startDate: "(2025-8)",
        endDate: "(2025-10)",
        responsibilities: [
            "Implemented full form validation across all admin panel forms using React Hook Form and Zod (previously had no validation).",
            "Developed a new management page for the video call feature.",
            "Refactored over 12 pages of the admin panel to improve code structure and maintainability.",
        ],
        techs: ["React", "TypeScript", "TailwindCSS", "Vite", "GraphQl", "React Hook Form", "Zod",],
        location: "Remote - Duba,U.A.E",
    },

];