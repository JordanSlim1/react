import React, {useContext} from 'react'
import {NewsContext} from './Article'
import Article from './Article'

function News(props) {
    
    const {data} = useContext(NewsContext);

    return(
        <div>
            {data ? data.articles.map(news => 
            <Article data={news} key = {news.url}/>)
            : "Loading:"}
        </div>
    )
}

export default News;