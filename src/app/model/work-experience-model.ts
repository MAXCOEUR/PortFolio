export class WorkItemModel {
    workName: string;
    workContract: string;
    date:string;
    description:string;

    constructor(workName: string, workContract: string,date:string,description:string) {
        this.workName = workName;
        this.workContract = workContract;
        this.date = date;
        this.description = description;
    }
}

export class WorkExperienceModel {
    logo:string;
    companyName:string;
    date:string;
    address:string;
    workItems:WorkItemModel[];

    constructor(logo:string,companyName: string, date: string, address:string,workItems:WorkItemModel[]) {
        this.logo=logo;
        this.companyName = companyName;
        this.date = date;
        this.address = address;
        this.workItems = workItems;
    }
}
