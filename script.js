"use strict";
const clearNotifsBtn = document.querySelector(".notif-clear");
let newNotifs = document.querySelectorAll(".new");
const notifNumb = document.querySelector(".notif-number");

const updateNumb = function () {
  notifNumb.textContent = newNotifs.length;
};

const clearNotifs = function () {
  if (newNotifs.length) {
    for (let i = 0; i < newNotifs.length; i++) {
      newNotifs[i].classList.remove("new");
    }
  }
  newNotifs = [];
  updateNumb();
};

updateNumb();

clearNotifsBtn.addEventListener("click", clearNotifs);
