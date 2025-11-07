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
            "Developed responsive web applications using React and TypeScript",
            "Collaborated with backend team to integrate RESTful APIs",
            "Improved performance and optimized UI rendering",
        ],
        techs: ["React", "TypeScript", "TailwindCSS", "Vite", "GraphQl", "React Hood Form", "Zod",],
        location: "Remote - Duba,U.A.E",
    },

];