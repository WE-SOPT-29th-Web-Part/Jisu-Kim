import React, { useEffect, useState } from 'react'
import ArticleContent from '../components/Write/ArticleContent';
import ArticleTags from '../components/Write/ArticleTag'
import ArticleTitle from '../components/Write/ArticleTitle'
import ArticleFooter from '../components/Write/ArticleFooters'
import { client } from "../libs/api"

function Write() {
  //필요한 데이터 받아와서 state관리. 
  //출간하기를 누르면 axios.post한다.
  const [postData, setPostData] = useState({
    id: "", //postData.length + 1해주면 된다.
    title: "",
    body: "",
    summary: "", //쬐꼼어려움
    series: "", //? 선택하는거인듯?
    tags: [],
    thumbnail: "", // 사진올리는건 세미나 때
    date: "", //오늘 날짜
  });

  //확인용
  useEffect(() => {
    console.log(postData);
  }, [postData]);

  //GET하기~!
  const createArticle = async () => {
    const { data } = await client.get('/article'); //기존 json데이터를 가져옴
    const id = data.length + 1; //저장된 데이터의 길이 + 1해서 id지정
    const now = new Date(); //지금 날짜 시간정보를 now변수에 저장
    const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}월`

    await client.post("/article", {
      ...postData,
      id,
      date,
      summary: "요약입니당",
    });
  };

  const handleSubmit = async () => {
    await createArticle();
  }

  return (
    <div>
      <button onClick={handleSubmit}>POST</button>
      <ArticleTitle setPostData={setPostData} postData={postData} />
      <ArticleTags tags={postData.tags} setPostData={setPostData} postData={postData} />
      <ArticleContent setPostData={setPostData} />
      <ArticleFooter />
    </div>
  )
}

export default Write
