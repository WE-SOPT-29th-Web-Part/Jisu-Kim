import React from 'react'
import styled from 'styled-components';

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

const TagInput = styled.input`

  border: none;
  padding: 0.5rem;
  border-bottom: 1px solid dimgrey;
  outline: none;
  width: 400px;
  height: 800px;
  color: dimgrey;
  font-size: 1rem;
`;

function ArticleTag() {
  return (
    <div>
      <TagInput type="text" />

    </div>
  )
}

export default ArticleTag
