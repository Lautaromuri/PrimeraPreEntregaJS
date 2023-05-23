let Valor1 , Valor2 , Valor3;

/* Ingreso de valores */

for( let I=0; I<3 ; I++ ){
    if( I == 0){
        Valor1 = prompt("Asignar valor " + (I+1) );
        while( Valor1 == '' || Valor1 == null ){
            Valor1 = prompt("ERROR\nAsignar valor " + (I+1) + " nuevamente");
        }
    }

    if( I == 1){
        Valor2 = prompt("Asignar valor " + (I+1) );
        while( Valor2 == '' || Valor2 == null ){
            Valor2 = prompt("ERROR\nAsignar valor " + (I+1) + " nuevamente");
        }
    }

    if( I == 2){
        Valor3 = prompt("Asignar valor " + (I+1) );
        while( Valor3 == '' || Valor3 == null ){
            Valor3 = prompt("ERROR\nAsignar valor " + (I+1) + " nuevamente");
        }
    }
}

/* Funcion Busqueda */

Busqueda();

//////////////////////////////////////////////////////////////////////////////

function Busqueda(){
    let Buscar;
    let Band = 0;

    Buscar = prompt("Ingresar nombre del articulo\n\nValores\n\n" + Valor1 + "\n\n" + Valor2 + "\n\n" + Valor3 + "\n\nTerminado (Para finalizar el programa)" );

    if( Buscar == 'Terminado' ){
        alert( 'Fin del programa' );
        Band = 1;
    }

    while( Buscar != 'Terminado' ){

        Band = 0;

        if( Buscar == Valor1 ){
            alert( 'El articulo ingresado es ' + Valor1 );
            Band = 1;
        }

        if( Buscar == Valor2 ){
            alert( 'El articulo ingresado es ' + Valor2 );
            Band = 1;
        }

        if( Buscar == Valor3 ){
            alert( 'El articulo ingresado es ' + Valor3 );
            Band = 1;
        }

        if( Band == 0 ){
            alert( 'Articulo no encontrado, ingrese nuevamente');
        }

        Buscar = prompt("Ingresar nombre del articulo\n\nValores\n\n" + Valor1 + "\n\n" + Valor2 + "\n\n" + Valor3 + "\n\nTerminado (Para finalizar el programa)" );

        if( Buscar == 'Terminado' ){
            alert( 'Fin del programa' );
            Band = 1;
        }
    }
}