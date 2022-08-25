'use strict';

let width = window.innerWidth;
let full_name = document.getElementById('full-name');
let fst_name = document.getElementById('first-name');
let lst_name = document.getElementById('last-name');

// if(width >= 1024) {
//     full_name.required = false;
// } else if (width < 1024) {
//     full_name.required = true;
//     fst_name.required = false;
//     lst_name.required = false;
// }

fst_name.required = false;
lst_name.required = false;