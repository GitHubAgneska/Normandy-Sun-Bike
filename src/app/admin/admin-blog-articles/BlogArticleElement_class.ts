

export class BlogArticle {
    id?:number;
    title:string;
    text:string;

    year?:number;
    month?:number;
    day?:number;
    fulldate? = function(){
        return this.day + "/" + this.month +"/" + this.year;
    }
    img:string;
    url?:string;
}