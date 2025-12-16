import { GetData } from "./data.js";

export function checkEmso(emso) {
  var errSpan = document.getElementById('form-error');

  var EMSO_ok = false;
  if (emso.length == 13) {
    var sum = 0;
    var num;
    var pond = 7;
  
    for (var poz = 0; poz < 12; poz++) {
      num = Number(emso.charAt(poz));
      if (pond == 1) pond = 7;
      num *= pond--;
      sum += num;
    }
  
    sum %= 11;
    if (sum < 2) {
      sum = 0;
    } else {
      sum = 11 - sum;
    }
  
    num = Number(emso.charAt(12));
    if (sum == num) {
      EMSO_ok = true;
    }
  }

  if (!EMSO_ok) {
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