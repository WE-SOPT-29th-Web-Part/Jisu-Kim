"use strict";

const dropDown = document.querySelector(".tab__dropdown");
const dropList = document.querySelector(".tab__dropList");

function onClickDrop() {
  dropList.classList.toggle("modal-hidden");
}

dropDown.addEventListener("click", () => onClickDrop());
//drop-list눌렀을 때 텍스트바뀌게하기
const periods = document.querySelectorAll(".tab__dropList > li");

periods.forEach((elem, i) => {
  elem.addEventListener("click", (e) => {
    const currentPeriod = document.querySelector(".tab__dropdown > a > span");
    let selectedPeriod = e.target.innerText;
    currentPeriod.innerText = selectedPeriod;
    console.log(e.target);
  });
});

//postcard index가져와서 해당 콘텐츠 모달로 띄우기
const postCards = document.querySelectorAll(".main__postcard");
postCards.forEach((post, index) => {
  post.addEventListener("click", () => {
    showModal(index);
  });
});

const body = document.querySelector("body");
function showModal(i) {
  const cardContent = postCards[i].cloneNode(true);

  const modalBack = document.createElement("div");

  const modalBody = document.createElement("div");

  modalBody.appendChild(createCloseBtn(modalBack));
  modalBody.appendChild(cardContent);
  modalBack.appendChild(modalBody);

  modalBack.classList.add("modal-back");
  modalBody.classList.add("modal-body");

  body.style.overflow = "hidden";
  body.appendChild(modalBack);
}

//close버튼만들기
function createCloseBtn(modalBack) {
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "X";
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", () => {
    modalBack.classList.add("modal-hidden");
    body.style.overflow = "scroll";
  });
  return closeBtn;
}

const darkModer = document.querySelector('#darkmode-checker');

darkModer.addEventListener('click', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});