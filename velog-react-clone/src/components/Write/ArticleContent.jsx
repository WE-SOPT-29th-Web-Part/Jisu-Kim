import React from 'react'
import styled from 'styled-components';

const ContentInput = styled.input`
  border: none;
  outline: none;
  width: 400px;
  height: 800px;
  background: whitesmoke;
  color: dimgrey;
  font-size: 1rem;
`;


function ArticleContent({ setPostData }) {

  const handleChange = (e) => {
    setPostData((postData) => ({
      ...postData,
      body: e.target.value,
    }))
  }
  return (
    <>
      <ContentInput type="text" onChange={handleChange} />
    </>
  )
}

export default ArticleContent;
