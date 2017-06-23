'use strict';



var button = document.getElementById('button');
var cyfry = document.getElementsByClassName('cyfra');
var operacje = document.getElementsByClassName('opercaja');
var wynik = document.getElementsByClassName('wynik');
var wyczysc = document.getElementsByClassName('wyczysc');
var ekran = document.getElementById('ekran');



    if (cyfry.onclick) {
        ekran.innerHTML = cyfry.value
    };



