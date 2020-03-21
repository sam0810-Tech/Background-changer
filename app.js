const body = document.querySelector(`body`);
const btnblue = document.querySelector(`#color-blue`);
const btngreen = document.querySelector(`#color-green`);
const btngrey = document.querySelector(`#color-grey`);
const btnNone = document.querySelector(`#color-none`);

// Appling logic

btnblue.addEventListener(`click`,  ( )=>  {
   body.classList.add(`bg-blue` , `text-white`);
   body.classList.remove(`bg-green`,  `bg-grey`);
});

btngreen.addEventListener(`click` ,  ( )=>  {
    body.classList.add(`bg-green` , `text-white`);
    body.classList.remove(`bg-blue` , `bg-grey`);
}) ;

btngrey.addEventListener(`click` , ( )=> {
    body.classList.add(`bg-grey` , `text-white`);
    body.classList.remove(`bg-blue` , `bg-green`);
});

btnNone.addEventListener(`click` ,  ( )=> {
    body.classList.remove(`bg-blue` , `bg-green` , `bg-grey` , `text-white`);
})

