import React from 'react'
import styled from 'styled-components';


function ArticleTag({ tags, setPostData, postData }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //엔터치면 input에 들어간 내용을 tag로 추가시키자.
      const tempData = { ...postData };//불변성유지를 위해서 spread로 postData가져오기
      tempData.tags = [...tempData.tags, e.target.value]; // 입력값 data에 넣어주기
      setPostData(tempData); //
      e.target.value = '';
      //이렇게 넣으면 2번째 태그부터는 이게 먼저 실행되어버린다.(setState는 비동기이기때문에 다 실행되기 전에 이게먼저 실행된다.)
      // setPostData((postData) => ({
      //   ...postData,
      //   tags: [...postData.tags, e.target.value],
      // }));
    }
  };
  return (
    <div>
      {/* 엔터칠때마다 태그추가 */}
      <TagInput type="text" onKeyPress={handleKeyPress} />
      {tags.map((tag) => (
        <StyledTag key={tag}>{tag}</StyledTag>
      ))}
    </div>
  )
}

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
  border-bottom: 2px solid dimgrey;
  outline: none;
  color: dimgrey;
  font-size: 1rem;
`;

const StyledTag = styled.span`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: whitesmoke;
  color: #54cea5;
  font-size: 0.875rem;

  border-radius: 0.75rem;
`;

export default ArticleTag
