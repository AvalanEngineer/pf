export class ProjectItem{
    title:string;
    subTitle:string;
    description:string;
    languages:string[];
    githubCodeUrl:string;
    externalUrl:string;
    image:string;
    imageType:string;
    constructor(title:string, subTitle:string, description:string, languages:string[], githubCodeUrl:string, externalUrl:string, image:string,imageType:string){
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.languages = languages;
        this.githubCodeUrl = githubCodeUrl;
        this.externalUrl = externalUrl;
        this.image = image;
        this.imageType = imageType;
    }
}