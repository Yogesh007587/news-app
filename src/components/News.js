import React, { Component } from 'react'
import NewsItem from '../components/NewsItem';
import "./new.css";

export default class News extends Component {
    
    "articles"=[
    
        {
        
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Jeff Dunn,Amy Skorheim",
        "title": "The best Amazon Prime Day early access deals for 2023",
        "description": "Amazon has announced that Prime Day 2023 will begin on July 11th, but you don't have to wait until then to get a good deal. The company has started to roll out a few early Prime Day deals before the twoday shopping event officially commences, including, as e…",
        "url": "https://www.engadget.com/amazonprimedayearlyaccessdeals2023152045683.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/wsEvvE3.C8cMweW6RBNXlw~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg/https://mediambstpubue1.s3.amazonaws.com/creatruploadedimages/202306/e5ce4ba00ad811eeaffe11bc09e9224c.cf.jpg",
        "publishedAt": "20230630T15:20:45Z",
        "content": "Amazon has announced that Prime Day 2023 will begin on July 11th, but you don't have to wait until then to get a good deal. The company has started to roll out a few early Prime Day deals before the … [+15109 chars]"
        },
        
        
        
        ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:true
        }
    }
    async componentDidMount(){
        console.log("cdm")
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=60ae1198796b4eb596b44ff92c035223"
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    
    render() {
        return (
            <div>
                <h1 className='Title'>News Headlines</h1>
                {this.state.articles.map((element)=>{
                    return <NewsItem key={element.id} urlToImage={element.urlToImage?element.urlToImage:""} title={element.title?element.title:""} description={element.description?element.description:""} url={element.url?element.url:""}/>
                })}
            </div>
        )
    }
}
