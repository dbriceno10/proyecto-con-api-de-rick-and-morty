window.onload = () => {
  document.onkeydown = keyboard;
};
import API from "../src/api.js";
import Character from "../src/character.js";
const previusBtn = document.getElementById("previus");
previusBtn.addEventListener("click", changePreviusBtn);
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", changeNextBtn);
const RMAPI = `https://rickandmortyapi.com/api/character/`;
const new_API = new API(RMAPI);
let maxId = 0;
async function countId(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    maxId = data.info.count;
  } catch (error) {
    console.error(error);
  }
}
countId(RMAPI);
let item = localStorage.getItem("id");
let id = Number(item);
new_API.getCharacter(id);
async function changeNextBtn() {
  id += 1;
  if (id <= 0) {
    id = 1;
  } else if (id > maxId) {
    id = maxId;
  }
  const actualCharacter = await new_API.getCharacter(id);
  new Character(actualCharacter);
  localStorage.setItem("id", id);
  console.log(`new id ${id}`);
}
async function changePreviusBtn() {
  id -= 1;
  if (id <= 0) {
    id = 1;
  } else if (id > maxId) {
    id = maxId;
  }
  const actualCharacter = await new_API.getCharacter(id);
  new Character(actualCharacter);
  localStorage.setItem("id", id);
  console.log(`new id ${id}`);
}
async function appReady(id) {
  let actualCharacter;
  if (id <= 0) {
    actualCharacter = await new_API.getCharacter(1);
    new Character(actualCharacter);
  } else {
    actualCharacter = await new_API.getCharacter(id);
    new Character(actualCharacter);
  }
  console.log(`Characters: ${maxId}`);
  console.log(`actual id ${id}`);
}
appReady(id);

const keyboard = (ev) => {
  const eve = ev || window.event;
  let key = eve.keyCode;
  if (key == 37) {
    changePreviusBtn();
  }
  if (key == 39) {
    changeNextBtn();
  }
};
