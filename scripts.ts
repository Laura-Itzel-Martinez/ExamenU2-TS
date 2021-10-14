class EjerciciosTS{
    //Ejercicio 1
    public ejercicio1():void{
        alert("hola Mundo");
    }
    //Ejercicio 2
    public ejercicio2():void{
        let saludo = "Hola Mundo";
        alert(saludo);
    }
    //Ejercicio 3
    public ejercicio3():void{
        let nombre = prompt('ingresa tu nombre');
        alert("hola " + nombre);
    }
     //Ejercicio 4
    public ejercicio4():void{
        let nombre = prompt('ingresa tu nombre');
        let numero = prompt('ingresa un numero entero');
        alert("Tu nombre es :  " + nombre + " \n " + "Tu numero fue: " + numero + " \n " +
            nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n "
            + nombre + " " + numero + " \n");
    }
    //ejercicio 5
    public ejercicio5():void{
        let nombre :any=prompt('ingresa tu nombre completo');
        let mayuscula = nombre.toUpperCase();
        let minuscula = nombre.toLowerCase();
        let alterno = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        alert(mayuscula + " \n " + minuscula + " \n " + alterno);
    }
     //ejercicio 6
    public ejercicio6():void{
        let edad:any =prompt('Ingresa tu edad');
        if (edad > 18) {
            alert('Eres mayor de edad');
        }
        else {
            alert('eres menor de edad');
        }
    }
    //ejercicio 7
    public ejercicio7():void{
        let contraseña = "contraseña";
        let contraseña1 :any = prompt('introduce la contraseña');
        contraseña1 = contraseña1.toUpperCase();
        contraseña1 = contraseña1.toLowerCase();
        if (contraseña == contraseña1) {
            alert('contraseña correcta');
        }
        else {
            alert('contraseña incorrecta');
        }
    }
    //ejercicio 8
    public ejercicio8():void{
        var palabra = prompt('ingresa un palabra');
        for (var index = 1; index < 11; index++) {
            console.log(index + ".-" + palabra);
        }
    }
    //ejercicio 9
    public ejercicio9():void{
        let edad :any =prompt('Ingresa tu edad');
        for (let index = 1; index <= edad; index++) {
            console.log('Los años que has cumplido son : ' + index + " años");
        }
    }
    //ejercicio 10
    public ejercicio10():void{
        let cantidad:any =prompt('Ingresa la cantidad a invertir');
        let interes:any = prompt('Ingresa el interes anual');
        let numero :any =prompt('Ingresa el numero de años');
        let tasa = interes / 100;
       
        let A = (cantidad * (1 + (tasa * numero)));
           
            alert('inversion ' + A.toFixed(2));
    }

}

const Ejercicios = new EjerciciosTS();
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
