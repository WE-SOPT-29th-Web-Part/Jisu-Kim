import React from 'react';
import styled from 'styled-components';


function ArticleTitle({ setPostData }) {
  const handleChange = (e) => {
    setPostData((postData) => ({
      ...postData,
      title: e.target.value,
    }));
  };

  return (
    <TitleInput placeholder="제목을 입력하세요." onChange={handleChange} />
  )
}

export default ArticleTitle

const TitleInput = styled.textarea`
  font-size: 1.25rem;
`;