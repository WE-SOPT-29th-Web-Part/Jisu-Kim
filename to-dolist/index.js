"use strict";

//1. plus 버튼 클릭하면 투두리스트 추가
//2. input에서 enter 눌러도 투두리스트 추가
//3. delete 버튼 누르면 투두리스트 제거
//4. 오늘 할 일, 내일 할 일 필터링

const nav = document.querySelector("nav");
const Todos = document.querySelectorAll(".todos");

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return; //nav빈공간 눌렀을 땐 아무 변경 X

  //switch문으로 3가지 버튼 한버에 관리하기
  switch (e.target.className) {
    case "options__today":
      Todos[1].classList.remove("open");
      Todos[0].classList.add("open");
      break;
    case "options__tomorrow":
      Todos[0].classList.remove("open");
      Todos[1].classList.add("open");
      break;
    case "options__both":
      Todos[0].classList.add("open");
      Todos[1].classList.add("open");
      break;
  }
});

const deleteBtns = document.querySelectorAll(".todos__delete");
const addInputs = document.querySelectorAll(".todos__input");
const todoLists = document.querySelectorAll(".todos__item");
//delete 버튼 구현하기
//오늘 할 일인지, 내일 할 일인지, 몇 번째 항목인지 알아야 함.
deleteBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => todoLists[i].remove());
});

// 플러스 버튼 누를 때 추가되게 하기
const plusBtns = document.querySelectorAll(".todos__add");

//plusBtn눌렀을 때 addTodo함수 실행되게 하기
plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => onAddTodo(index));
});

//enter쳤을 때 addTodo함수 실행되게 하기
addInputs.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      onAddTodo(index);
    }
  });
});

//addTodo함수 ( 새로운 todo list 추가시키는 함수)
function createTodo(text, index) {
  //li 태그 생성
  const li = document.createElement("li");
  //li태그 안에 들어갈 span태그 생성 (text담을태그)
  const span = document.createElement("span");
  span.innerText = text; //span태그에 parameter로 가져온 text를 넣는다.
  span.setAttribute("class", "todos__name");
  li.appendChild(span); //li태그에 text가 담긴 span태그를 자식요소로 넣는다

  // delete아이콘 태그 만들고(class넣어서) button태그로 감싸기
  const deleteIcon = document.createElement("i");
  const deleteBtn = document.createElement("button");
  deleteIcon.setAttribute("class", "fas fa-trash todos__delete");
  deleteBtn.appendChild(deleteIcon);
  li.appendChild(deleteBtn); //li태그에 delete아이콘도 넣는다.

  //class속성 넣어서 스타일링 적용하기
  li.setAttribute("class", "todos__item");

  //deleteBtn은 새로만든 리스트에 있는 지우기버튼. 여기서 index는 0또는 1..?
  deleteBtn.addEventListener("click", () => {
    li.remove(); //이 함수에서 만든 li태그를 삭제
  });

  return li;
}

function onAddTodo(index) {
  //index로 오늘 할 일인지 내일 할 일인지 구분해서 텍스트 가져오기
  const text = addInputs[index].value;
  if (!text) return; // text가 비어있을 땐 falsy -> 함수그냥 끝나도록
  //text가 비어있지 않을 땐 Todo list만들기
  const item = createTodo(text, index);
  const list = document.querySelectorAll(".todos__items");
  //만든 Todo list를 할일 목록에 넣기
  list[index].appendChild(item);
  //넣고 나서 input창 비워주기
  addInputs[index].value = "";
  //입력완료 후 focus원래 input에 계속 남게하기
  addInputs[index].focus();
}
