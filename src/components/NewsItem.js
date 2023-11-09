import React, { Component } from 'react';
import "./new.css";

export default class NewsItem extends Component {
    
    render() {
        let {title ,description,id,url,urlToImage}=this.props
        return (
            <div>
                <ul>
                    <li>{title} {id}
                        <ul>
                            <li><img src={urlToImage} width="100px" height="100px" /></li>
                            <li>{description}</li>
                        </ul>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
