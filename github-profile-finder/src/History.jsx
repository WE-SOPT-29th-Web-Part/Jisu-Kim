import React from 'react';
import styled from 'styled-components';

function History() {
  return (
    <HistoryBox>
      <HistoryList>
        안녕
      </HistoryList>
    </HistoryBox>
  )
}

const HistoryBox = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 15rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: white;
  width: 15rem;
  background-color: #454545;
  border-radius: 2px;
`;

const HistoryList = styled.ul`
  list-style: none;
  color: whitesmoke;
  padding: 0;
  margin: 0;
`;

export default History;
