'use strict';

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
.content
.querySelector(`.setup-similar-item`);

const WIZARD_NAMES = [`Иван`, `Хуан Себасьян`, `Мария`, `Кристофор`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];

const WIZARD_SURNAME = [` да Марья`, ` Верон`, ` Мирабелла`, ` Вальц`, ` Онопко`, ` Топольницкая`, ` Нионго`, ` Ирвинг`];
let wizardColorCoat = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
let wizardColorEyes = [`black`, `red`, `blue`, `yellow`, `green`];
// let wizardTotal = 4;


for (let i = 0; i < wizards.length; i++) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = WIZARD_NAMES[i] + WIZARD_SURNAME[i];

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

  similarListElement.appendChild(wizardElement);
}

let wizards = [ // от этой асти коду хочу избавиться
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAME[0],
    coatColor: wizardColorCoat[0],
    eyesColor: wizardColorEyes[0],
  },

  {
    name: WIZARD_NAMES[1] + WIZARD_SURNAME[1],
    coatColor: wizardColorCoat[1],
    eyesColor: wizardColorEyes[1],
  },

  {
    name: WIZARD_NAMES[2] + WIZARD_SURNAME[2],
    coatColor: wizardColorCoat[2],
    eyesColor: wizardColorEyes[2],
  },

  {
    name: WIZARD_NAMES[3] + WIZARD_SURNAME[3],
    coatColor: wizardColorCoat[3],
    eyesColor: wizardColorEyes[3],
  },
];
