import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all ease 300ms;
  height: 80vh;
`;

const TodosHeader = styled.h2`
  font-size: 1.25rem;
  color: cadetblue;
  padding-bottom:0.5rem;
  border-bottom: solid 2px cadetblue;
`;

const TodosBox = styled.ul`
  flex-grow: 1;
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
`;

const TodosList = styled.li`
  width: 90%;
  height: 2.5rem;
  color: darkslategray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid whitesmoke;
  margin: 0.5rem auto;
`;

const TodosItem = styled.span`
  height: 36px;
  line-height: 36px;
`;

const DeleteBtn = styled.button`
  border: none;
  background-color: none;
`;

const TrashIcon = styled.i`
  color: tomato;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

const TodosInput = styled.input`
  font-size: 1rem;
  padding: 6px 14px;
  outline: none;
  display: inline-block;
  width: 80%;
  height: 2.4rem;
  border: none;
  border-radius: 6px;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  color: cadetblue;
`;

const PlusBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const todayListData = [
  {
    id: 0,
    todo: 'SOPT 웹 심화과제 뿌시기',
  },
  {
    id: 1,
    todo: 'Figma 디자인 모두 끝내기',
  },
  {
    id: 2,
    todo: 'user authentication api 연결하기',
  }
]

const tomorrowListData = [
  {
    id: 0,
    todo: '피로그래밍 홍보팀 포스터 제작',
  },
  {
    id: 1,
    todo: 'diggging 계정설정 페이지제작',
  },
  {
    id: 2,
    todo: 'codecademy async await 수강',
  }
]


function Main({ todayOpen, tomorrowOpen }) {
  const [inputs, setInputs] = useState({
    today: '',
    tomorrow: '',
  });

  const [todayData, setTodayData] = useState(todayListData);
  const [tomorrowData, setTomorrowData] = useState(tomorrowListData);

  const onReset = () => {
    setInputs({
      today: '',
      tomorrow: '',
    })
  }

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }


  const { today, tomorrow } = inputs;

  const onAddToday = () => {
    setTodayData(todayData =>
      [
        ...todayData,
        {
          id: todayData.length,
          todo: today,
        }
      ]
    )

    // todayListData.push({
    //   id: todayListData.length,
    //   todo: today,
    // })
    onReset();
  }

  const onAddTomorrow = () => {
    setTomorrowData(tomorrowData => (
      [...tomorrowData,
      {
        id: tomorrowData.length,
        todo: tomorrow,
      }]
    ))
    // tomorrowListData.push({
    //   id: tomorrowListData.length,
    //   todo: tomorrow,
    // })
    console.log(tomorrowData);
    onReset();
  }

  const EnterToday = (e) => {
    if (e.key === 'Enter') {
      onReset();
      onAddToday();
    }
  }

  const EnterTomorrow = (e) => {
    if (e.key === 'Enter') {
      onReset();
      onAddTomorrow();
    }
  }

  const onDeleteToday = (idx) => {
    setTodayData(
      todayData.filter(todayData => todayData.id !== idx)
    );
  }

  const onDeleteTomorrow = (idx) => {
    setTomorrowData(
      tomorrowData.filter(tomorrowData => tomorrowData.id !== idx)
    );
  }


  return (
    <SectionWrapper>
      {(todayOpen === true) ?
        (
          <Section>
            <TodosHeader>오늘 할 일</TodosHeader>
            <TodosBox>
              {todayData.map((data, idx) => {
                return (
                  <TodosList key={data.id}>
                    <TodosItem>{data.todo}</TodosItem>
                    <FontAwesomeIcon icon={faTrash} color="tomato" onClick={() => onDeleteToday(idx)} ></FontAwesomeIcon>
                  </TodosList>
                )
              })}
            </TodosBox>
            <InputBox>
              <TodosInput type="text" name="today" onChange={onChange} onKeyUp={EnterToday} value={today} />
              <PlusBtn name="today" onClick={onAddToday}>
                <FontAwesomeIcon icon={faPlusCircle} color="dimgray"></FontAwesomeIcon>
              </PlusBtn>
            </InputBox>
          </Section>
        ) : null}
      {(tomorrowOpen === true) ? (
        <Section>
          <TodosHeader>내일 할 일</TodosHeader>
          <TodosBox>
            {tomorrowData.map((data, idx) => {
              return (
                <TodosList key={data.id}>
                  <TodosItem>{data.todo}</TodosItem>
                  <FontAwesomeIcon icon={faTrash} color="tomato" onClick={() => onDeleteTomorrow(idx)}></FontAwesomeIcon>
                </TodosList>
              )
            })}
          </TodosBox>
          <InputBox>
            <TodosInput type="text" name="tomorrow" onChange={onChange} onKeyUp={EnterTomorrow} value={tomorrow} />
            <PlusBtn name="tomorrow" onClick={onAddTomorrow}>
              <FontAwesomeIcon icon={faPlusCircle} color="dimgray" ></FontAwesomeIcon>
            </PlusBtn>
          </InputBox>
        </Section>
      ) : null}
    </SectionWrapper>
  )
}

export default Main
