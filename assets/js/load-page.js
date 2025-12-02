import { GetData } from './data.js';
import { SelectionFilter } from './form.js';

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
                <td>
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