export class ImageWithDescription {
    image: string;
    description: string;

    constructor(image: string, description: string) {
        this.image = image;
        this.description = description;
    }
}
export class UrlWithLabel {
    label: string;
    url: string;

    constructor(label: string, url: string) {
        this.label = label;
        this.url = url;
    }
}

export class ProjectModel {
    private static idCurrent = 0;
    id: number;
    name:string;
    shortDescription: string;
    logo: string;
    url: UrlWithLabel[];
    descriptions: ImageWithDescription[];

    constructor(name:string,shortDescription: string, logo: string, url: UrlWithLabel[], descriptions: ImageWithDescription[]) {
        this.id = ProjectModel.idCurrent++;
        this.name=name;
        this.shortDescription = shortDescription;
        this.logo = logo;
        this.url = url;
        this.descriptions = descriptions;
    }
}
