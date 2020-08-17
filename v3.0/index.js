import ClipPathEditor from './ClipPathEditor.js';

const BTNaddDot = document.querySelector('.add-dot');
const BTNdelDot = document.querySelector('.del-dot');

const DIVcanvas = document.querySelector('.canvas');
const DIVfigure = document.querySelector('.canvas_figure');



const clipPathEditor = new ClipPathEditor(DIVcanvas, DIVfigure);
clipPathEditor.init();

const activeAddDot = () => {
    BTNaddDot.classList.toggle('add-dot--active');
    clipPathEditor.enableAddDots();    
}

const activeDelDot = () => {
    BTNdelDot.classList.toggle('del-dot--active');
    clipPathEditor.enableDelDots();
}

BTNaddDot.addEventListener('click', activeAddDot);
BTNdelDot.addEventListener('click', activeDelDot);
