export class ScoolExperienceModel {
    logo:string;
    scoolName:string;
    date:string;
    address:string;
    diplome:string;
    mention:string;

    constructor(logo:string,scoolName: string, date: string, address:string,diplome:string,mention:string) {
        this.logo=logo;
        this.scoolName = scoolName;
        this.date = date;
        this.address = address;
        this.diplome = diplome;
        this.mention = mention;
    }
}
