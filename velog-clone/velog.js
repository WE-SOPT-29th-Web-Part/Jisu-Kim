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
