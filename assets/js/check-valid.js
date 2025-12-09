import { GetData } from "./data.js";

export function checkEmso(emso) {
  var regex = /^\d{13}$/;
  var errSpan = document.getElementById('form-error');
  if (!regex.test(emso)) {
      errSpan.innerText = "Napaka: Vnesli ste neveljavno EMŠO.";
      return false;
  }
  var data = GetData();
  if (!data.classes.r4a.includes(emso) && !data.classes.r4b.includes(emso)) {
      errSpan.innerText = "Napaka: Vnesli ste EMŠO, ki ni v nobeni od razredov.";
      return false;
  }
  return true;
}

export function checkClass(emso, selectedClass) {
  var data = GetData();
  var errSpan = document.getElementById('form-error');
  if (!data.classes[selectedClass].includes(emso)) {
      errSpan.innerText = "Napaka: Vnesli ste EMŠO, ki ni v izbranem razredu.";
      return false;
  }
  return true;
}

export function checkSelections(emso, firstSelection, secondSelection) {
  var errSpan = document.getElementById('form-error');
  var data = GetData();
  var subjects = data.subjects;
  var maxCount = data.settings.maxCount;

  if (subjects[parseInt(firstSelection)].count >= maxCount) {
      errSpan.innerText = "Napaka: Prva izbira je že polna.";
      return false;
  }

  if (subjects[parseInt(secondSelection)].count >= maxCount) {
      errSpan.innerText = "Napaka: Druga izbira je že polna.";
      return false;
  }

  if (data.students.some(s => s.emso === emso && s.firstSelection == firstSelection)) {
      errSpan.innerText = "Napaka: v ta predmet si že vpisan.";
      return false;
  }
  return true;
}