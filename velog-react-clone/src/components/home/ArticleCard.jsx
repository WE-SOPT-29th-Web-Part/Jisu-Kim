import React from 'react'
import styled from 'styled-components';

const CardBox = styled.div`
  width: 100%;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.875rem;
  }
`;

const Tags = styled.span`
  background-color: whitesmoke;
  margin: 0 10px;
  border-radius: 1rem;
  border: none;
  color: #54cea5;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
`;

const ArticleCard = ({ article }) => {
  console.log(article)
  const { id, title, summary, series, tags, date } = article;
  console.log(id);
  console.log(article)

  return (
    <CardBox>
      <h3>{title}</h3>
      <p>{summary}</p>
      {tags.map((tag) => (<Tags key={tag}>{tag}</Tags>))}
      <span>{date}</span>
    </CardBox>
  )
}

export default ArticleCard
