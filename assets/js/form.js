import { GetData, PostData } from './data.js';
import { LoadTable, LoadForm } from './load-page.js';

export function CheckFormValid() {
    var form = document.getElementById('assign-form');
    var submitButton = document.getElementById('submit-button');

    form.addEventListener('input', () => {
        var isValid = form.checkValidity();
        submitButton.disabled = !isValid;
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        SubmitForm();
    });
}

function SubmitForm() {
    var form = document.getElementById('assign-form');
    var emso = form.elements['emso'].value;
    var firstSelection = form.elements['firstSelection'].value;
    var secondSelection = form.elements['secondSelection'].value;
    
    var valid = true;

    valid = valid && checkEmso(emso);
    valid = valid && checkSelections(firstSelection, secondSelection);

    if (valid) assignToGroup();
}

function checkEmso(emso) {
    var regex = /^\d{13}$/;
    var errSpan = document.getElementById('form-error');
    if (!regex.test(emso)) {
        errSpan.innerText = "Napaka: Vnesli ste neveljavno EMŠO.";
        return false;
    }
    return true;
}

function checkSelections(firstSelection, secondSelection) {
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
    return true;
}

function assignToGroup() {
    var form = document.getElementById('assign-form');
    var firstSelection = form.elements['firstSelection'].value;
    var data = GetData();

    data.subjects[firstSelection].count += 1;

    PostData(data);
    LoadTable();
    LoadForm();
}

export function SelectionFilter() {
    var firstSelection = document.getElementById('firstSelection');
    var secondSelection = document.getElementById('secondSelection');

    firstSelection.addEventListener('change', () => {
        var selectedValue = firstSelection.value;
        Array.from(secondSelection.options).forEach(option => {
            option.hidden = option.value === selectedValue;
        });
    });

    secondSelection.addEventListener('change', () => {
        var selectedValue = secondSelection.value;
        Array.from(firstSelection.options).forEach(option => {
            option.hidden = option.value === selectedValue;
        });
    });
}