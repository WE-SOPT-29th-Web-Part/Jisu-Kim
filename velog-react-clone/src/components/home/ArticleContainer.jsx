import React, { useState } from 'react'
import { client } from "../../libs/api"
import ArticleCard from './ArticleCard'

function ArticleContainer() {
  const [articleData, setArticleData] = useState([])
  //data받아오기 : axios, async/await

  const getArticleData = async () => {
    const { data } = await client.get('/article');
    setArticleData(data);
  };



  return (
    <div>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleContainer
