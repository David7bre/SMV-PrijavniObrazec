import { GetData } from './data.js';

export function LoadTable() {
    var container = document.getElementById('table-container');
    var data = GetData();
    var subjects = data.subjects;

    container.innerHTML = `
        <table border="1">
            <tr>
                <td>Skupina</td>
                <td>Prijavljeni</td>
                <td>Nosilec</td>
                <td>Tematika</td>
            </tr>
            ${Object.keys(subjects)
                .map(id => {
                    var v = subjects[id];
                    return `
                        <tr>
                            <td>${parseInt(id) + 1}</td>
                            <td>${v.count}</td>
                            <td class="center">${v.professor}</td>
                            <td class="center">${v.name}</td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td colspan="2">${v.description}</td>
                        </tr>
                    `;
                })
                .join('')}
        </table>
    `;
}

export function LoadForm() {
    var container = document.getElementById('assign-form');
    var data = GetData();
    var subjects = data.subjects;
    var maxCount = data.settings.maxCount;

    container.innerHTML = `
        <table>
            <tr>
                <td>EMŠO: </td>
                <td><input type="number" name="emso" required></td>
            </tr>
            <tr>
                <td>Oddelek: </td>
                <td>
                    <select name="class" id="class" required>
                        <option disabled selected hidden value="">--- Izberi oddelek ---</option>
                        <option value="r4a">R4A</option>
                        <option value="r4b">R4B</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Prva izbira</td>
                <td>
                    <select name="firstSelection" id="firstSelection" required>
                        <option disabled selected hidden value="">--- Izberi skupino ---</option>
                        ${Object.keys(subjects)
                            .filter(id => subjects[id].count < maxCount)
                            .map(id => `<option value="${id}">${subjects[id].name}</option>`)
                            .join('')}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Druga izbira</td>
                <td style="margin-left: 10px !important">
                    <span id="selectionPlaceholder">Najprej prva izbira!</span>
                    <select name="secondSelection" id="secondSelection" required>
                        <option disabled selected hidden value="">--- Izberi skupino ---</option>
                        ${Object.keys(subjects)
                            .filter(id => subjects[id].count < maxCount)
                            .map(id => `<option value="${id}">${subjects[id].name}</option>`)
                            .join('')}
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <span id="form-error" class="form-error"></span>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="submit-button" disabled type="button">Pošlji</button>
                </td>
            </tr>
        </table>
    `;

    SelectionFilter();
}

function SelectionFilter() {
    var firstSelection = document.getElementById('firstSelection');
    var secondSelection = document.getElementById('secondSelection');
    var placeholder = document.getElementById('selectionPlaceholder');

    secondSelection.style.display = 'none';
    placeholder.style.display = 'inline';

    firstSelection.addEventListener('change', () => {
        var selectedValue = firstSelection.value;

        if (selectedValue !== "") {
            placeholder.style.display = 'none';
            secondSelection.style.display = 'block';
        } else {
            secondSelection.style.display = 'none';
            secondSelection.value = "";
            placeholder.style.display = 'inline';
        }

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