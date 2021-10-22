"use strict";

const dropDown = document.querySelector(".tab__dropdown");

function onClickDrop() {
  let dropList = document.querySelector(".tab__dropList");
  if ((dropList.style.visibility = "hidden")) {
    dropList.style.visibility = "visible";
  } else if ((dropList.style.visibility = "visible")) {
    dropList.style.visibility = "hidden";
  }
}

dropDown.addEventListener("click", () => onClickDrop());
//droplist눌렀을 때 텍스트바뀌게하기

//postcard index가져와서 해당 콘텐츠 모달로 띄우기
const postCards = document.querySelectorAll(".main__postcard");
postCards.forEach((post, index) => {
  post.addEventListener("click", () => {
    showModal(index);
  });
});

function showModal(i) {
  const cardContent = postCards[i].cloneNode(true);

  const modalBack = document.createElement("div");

  const modalBody = document.createElement("div");

  modalBody.appendChild(createCloseBtn(modalBack));
  modalBody.appendChild(cardContent);
  modalBack.appendChild(modalBody);

  modalBack.classList.add("modal-back");
  modalBody.classList.add("modal-body");

  const body = document.querySelector("body");
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
  });
  return closeBtn;
}
