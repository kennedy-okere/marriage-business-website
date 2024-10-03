'use strict';
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.icon-bar');
const cancelBar = document.querySelector('.nav-cancel');

//when it's clicked
//show the sidebar
const showSideBar = function () {
  sideBar.classList.add('slide');
  overlay.classList.remove('hidden');
};
hamburger.addEventListener('click', showSideBar.bind());

//close sidebar
const closeSideBar = function () {
  sideBar.classList.remove('slide');
  overlay.classList.add('hidden');
};
cancelBar.addEventListener('click', closeSideBar.bind());
overlay.addEventListener('click', closeSideBar.bind());
sideBar.addEventListener('click', closeSideBar.bind());
