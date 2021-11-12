import React, { useEffect, useState } from 'react'
import ArticleTag from '../components/Write/ArticleTag'
import ArticleTitle from '../components/Write/ArticleTitle'
import { client } from "../libs/api"

function Write() {
  //필요한 데이터 받아와서 state관리.
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: "", //오늘 날짜
  });

  //확인용
  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const createArticle = async () => {
    const { data } = await client.get("/article");
  }


  return (
    <div>
      <ArticleTag />
      <ArticleTitle />
    </div>
  )
}

export default Write
