import { GetData, PostData } from './data.js';
import { LoadTable, LoadForm } from './load-page.js';
import { checkEmso, checkClass, checkSelections } from './check-valid.js';

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
    var selectedClass = form.elements['class'].value;
    var firstSelection = form.elements['firstSelection'].value;
    var secondSelection = form.elements['secondSelection'].value;
    
    var valid = true;

    valid = valid && checkEmso(emso);
    valid = valid && checkClass(emso, selectedClass);
    valid = valid && checkSelections(emso, firstSelection, secondSelection);

    if (valid) assignToGroup(emso, firstSelection, secondSelection, form);
}

function assignToGroup(emso, firstSelection, secondSelection, form) {
    var data = GetData();
    var student = data.students.find(s => s.emso === emso);

    firstSelection = parseInt(firstSelection);
    secondSelection = parseInt(secondSelection);

    if (student) {
        data.subjects[student.firstSelection].count -= 1;

        student.firstSelection = firstSelection;
        student.secondSelection = secondSelection;
    } else {
        data.students.push({
            emso: emso,
            firstSelection: parseInt(firstSelection),
            secondSelection: parseInt(secondSelection)
        });
    }

    data.subjects[firstSelection].count += 1;

    PostData(data);
    form.reset();

    LoadTable();
    LoadForm();

    CheckFormValid();
}