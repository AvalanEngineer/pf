import {ProjectItem} from "src/lib/models/project.model";

export interface PortfolioModel {
    email: {
        address: string;
    };
    navbar: {
        about: string;
        experience: string;
        projects: string;
        contact: string;
        resume: {
            name: string;
            link: string;
        };
    };
    introduction: {
        title: string;
        subTitle: string[];
        content: string;
        button: string;
        button_link: string;
    };
    about: {
        title: string;
        content: string[];
        activities: string[];
        image: string;
    };
    experience: {
        title: string;
        experience_list: {
            tab: string;
            content: {
                title: string;
                subTitle: string;
                paragraphs: string[];
            };
        }[];
        content: string;
    };
    projects: {
        title: string;
        list: ProjectItem[];
        priority: number;
        showButton: string;
    };
    contact: {
        title: string;
        subTitle: string;
        content: string;
        button: {
            name: string;
            link: string;
        };
        socials: {
            linkedIn: string;
            instagram: string;
            twitter: string;
            github: string;
        };
    };
    footer: {
        content: string;
    };
}