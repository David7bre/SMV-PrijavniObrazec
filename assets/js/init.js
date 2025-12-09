import { LoadTable, LoadForm } from './load-page.js';
import { CheckFormValid } from './submit-form.js';

document.addEventListener('DOMContentLoaded', () => {
    LoadTable();
    LoadForm();
    CheckFormValid();    
});