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
document.documentElement.setAttribute("color-theme", "light");//기본값 light로 설정해주기

//local스토리지 정보가져오기
const isUserColorTheme = localStorage.getItem('color-item');
//prefers-color-scheme이 dark로 설정된 것이 true면 dark로 설정, 아님 light로
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

//localStorage정보가 있으면 그대로 사용하고, 없으면 OS정보를 사용
const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOsColorTheme);

window.onload = function () {
  if (getUserTheme === 'dark') {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    darkModer.setAttribute('checked', true);
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
  }
};

darkModer.addEventListener('click', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});


//카드모달
const cardContainer = document.querySelector(".main__cards");
cardContainer.addEventListener("click", (e) => {
  let element = e.target;
  //e.target이 card일 때까지 탐색한다
  while(element && !element.classList.contains("main__postcard")) {
    element = element.parentNode;
  }

  // card의 외부를 클릭했거나 modal의 card부분을 클릭했을 때 반응하지 않도록
  if (!element.classList || element.classList.contains("card__modal")) return;
  
  const modalBackGround = document.createElement("div");
  const modalCard = document.createElement("article");
  const modalCloseBtn = document.createElement("button");

  modalBackGround.setAttribute("class", "card__modal-bg");

  modalCard.innerHTML = element.innerHTML;
  modalCard.setAttribute("class", "main__postcard card__modal");

  modalCloseBtn.innerText = "X";
  modalCloseBtn.setAttribute("class", "card__modal-close-btn");

  modalBackGround.appendChild(modalCard);
  document.body.appendChild(modalBackGround);
  modalCard.appendChild(modalCloseBtn);

  //scroll방지
  document.body.style.overflow = "hidden";
  
  //닫는 버튼 누르면 모달 사라지고 스크롤 가능해짐
  modalCloseBtn.addEventListener("click", () => {
    modalBackGround.remove();
    document.body.style.overflow = "visible";
  });
});