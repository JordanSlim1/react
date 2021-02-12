import React from 'react'
//import {NewsContext} from '../NewsContext'
function Article({data}) {
    return (
        <article>
            <header>
                <h2>{data.title}</h2>
                <img src="https://via.placeholder.com/150" alt="placeholder"/>
            </header>
            <main>
                <section>
                    <p>{data.description}</p>
                </section>
                <section>
                    <p>{data.content}</p>
                </section>
            </main>
        </article>
    )
}

export default Article;