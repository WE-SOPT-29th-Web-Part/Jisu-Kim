"use strict";

const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  const text = e.target.value;
  if (e.key == "Enter") {
    let tag = document.createElement("span");
    tag.innerText = text;
    tag.classList.add("tag");

    const tagArea = document.querySelector(".tag__area");
    tagArea.appendChild(tag);
    e.target.value = "";

    tag.style.cursor = "pointer";
    tag.addEventListener("click", () => tag.remove());
  }
});

//tag삭제하기
