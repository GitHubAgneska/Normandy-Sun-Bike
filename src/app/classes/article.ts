
export class Article {
    
    public id:number;
    public date:string;
    public title:string;
    public img:string;
    public imgDescription:string;
    public categorie:string;
    public text:string;

    constructor(id, date, title, img, imgDescription, categorie, text) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.img = img;
        this.imgDescription = imgDescription;
        this.categorie = categorie;
        this.text = text;
    }
    
}
