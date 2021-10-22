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
const plusBtns = document.querySelector(".todos__add");

//plusBtn눌렀을 때 addTodo함수 실행되게 하기
plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => addTodo(index));
});

//enter쳤을 때 addTodo함수 실행되게 하기
inputs.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      addTodo(index);
    }
  });
});

//addTodo함수 ( 새로운 todo list 추가시키는 함수)
function addTodo(text, index) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteIcon = document.createElement("i");
  const deleteBtn = document.createElement("button");

  deleteIcon.setAttribute("class", "fas fa-trash");
  deleteBtn.appendChild(deleteIcon);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteIcon);
}
