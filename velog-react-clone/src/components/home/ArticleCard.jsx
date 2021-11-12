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

function ArticleCard({ article }) {
  const { id, title, body, summary, series, tags, thumbnail, date } = article;


  return (
    <CardBox>
      <h3>{title}</h3>
      <p>{summary}</p>
      {tags.map((tag) => (<Tags>{tag}</Tags>))}
      <span>{date}</span>
    </CardBox>
  )
}

export default ArticleCard
