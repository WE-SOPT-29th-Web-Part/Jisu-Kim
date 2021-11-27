import React, { useEffect, useState } from 'react'
import { client } from "../../libs/api"
import ArticleCard from './ArticleCard'

function ArticleContainer() {
  const [articleData, setArticleData] = useState([])
  //data받아오기 : axios, async/await


  const getArticleData = async () => {
    const { data } = await client.get("article");
    setArticleData(data);
    console.log(articleData)
  }

  //화면에 마운트 될 때 정보를 받아올 수 있도록
  useEffect(() => { getArticleData(); }, []);


  return (
    <div>
      {articleData.map((article) => (
        <ArticleCard key={`post-${article.id}`} article={article} />
      ))}
    </div>
  )
}

export default ArticleContainer
