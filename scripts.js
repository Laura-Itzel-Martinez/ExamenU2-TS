"use strict";
var EjerciciosTS = /** @class */ (function () {
    function EjerciciosTS() {
    }
    //Ejercicio 1
    EjerciciosTS.prototype.ejercicio1 = function () {
        alert("hola Mundo");
    };
    //Ejercicio 2
    EjerciciosTS.prototype.ejercicio2 = function () {
        var saludo = "Hola Mundo";
        alert(saludo);
    };
    //Ejercicio 3
    EjerciciosTS.prototype.ejercicio3 = function () {
        var nombre = prompt('ingresa tu nombre');
        alert("hola " + nombre);
    };
    //Ejercicio 4
    EjerciciosTS.prototype.ejercicio4 = function () {
        var nombre = prompt('ingresa tu nombre');
        var numero = prompt('ingresa un numero entero');
        alert("Tu nombre es :  " + nombre + " \n " + "Tu numero fue: " + numero + " \n " +
            nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n");
    };
    //ejercicio 5
    EjerciciosTS.prototype.ejercicio5 = function () {
        var nombre = prompt('ingresa tu nombre completo');
        var mayuscula = nombre.toUpperCase();
        var minuscula = nombre.toLowerCase();
        var alterno = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        alert(mayuscula + " \n " + minuscula + " \n " + alterno);
    };
    //ejercicio 6
    EjerciciosTS.prototype.ejercicio6 = function () {
        var edad = prompt('Ingresa tu edad');
        if (edad > 18) {
            alert('Eres mayor de edad');
        }
        else {
            alert('eres menor de edad');
        }
    };
    //ejercicio 7
    EjerciciosTS.prototype.ejercicio7 = function () {
        var contraseña = "contraseña";
        var contraseña1 = prompt('introduce la contraseña');
        contraseña1 = contraseña1.toUpperCase();
        contraseña1 = contraseña1.toLowerCase();
        if (contraseña == contraseña1) {
            alert('contraseña correcta');
        }
        else {
            alert('contraseña incorrecta');
        }
    };
    //ejercicio 8
    EjerciciosTS.prototype.ejercicio8 = function () {
        var palabra = prompt('ingresa un palabra');
        for (var index = 1; index < 11; index++) {
            console.log(index + ".-" + palabra);
        }
    };
    //ejercicio 9
    EjerciciosTS.prototype.ejercicio9 = function () {
        var edad = prompt('Ingresa tu edad');
        for (var index = 1; index <= edad; index++) {
            console.log('Los años que has cumplido son : ' + index + " años");
        }
    };
    //ejercicio 10
    EjerciciosTS.prototype.ejercicio10 = function () {
        var cantidad = prompt('Ingresa la cantidad a invertir');
        var interes = prompt('Ingresa el interes anual');
        var numero = prompt('Ingresa el numero de años');
        var tasa = interes / 100;
        var A = (cantidad * (1 + (tasa * numero)));
        alert('inversion ' + A.toFixed(2));
    };
    return EjerciciosTS;
}());
var Ejercicios = new EjerciciosTS();
//Ejercicios.ejercicio1()
//Ejercicios.ejercicio2();
//Ejercicios.ejercicio3();
//Ejercicios.ejercicio4();
//Ejercicios.ejercicio5();
//Ejercicios.ejercicio6();
//Ejercicios.ejercicio7();
//Ejercicios.ejercicio8();
//Ejercicios.ejercicio9();
Ejercicios.ejercicio10();
