import { showModal, hideModal, backdrop } from './modal';
import TableItem from './TableItem';
import renewPage from './renewPage';
import { notes } from './data';
import { extractDatesFromString } from './utils/extractDatesFromString';
import { formatDate } from './utils/formatDate';


const addItemButton = document.querySelector('#show-modal');

const listener = () => {
    //materialize initialization
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });
    ///


    addItemButton.addEventListener('click', () => {
        showModal();
    }
    );

    backdrop.addEventListener('click', hideModal);


    document.getElementById('new-note').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const content = document.querySelector('#textarea').value;
        const mentionedDates = extractDatesFromString(content)
        const datesStart = formatDate(document.querySelector(`#date-start`).value);
        const datesEnd = formatDate(document.querySelector(`#date-end`).value);
        const dates = [...mentionedDates]
        if (datesStart) dates.push(datesStart) 
        if (datesEnd) dates.push(datesEnd) 
        $('select').formSelect();  //materialize 
        const instance = M.FormSelect.getInstance($('#select-cat'));
        const category = instance.getSelectedValues()[0];
        const id = new Date().getTime();
        const created = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const newNote = new TableItem(id, name, created, category, content, dates, true);
        notes.unshift(newNote);
        renewPage()
        hideModal();
    });
};


export default listener;