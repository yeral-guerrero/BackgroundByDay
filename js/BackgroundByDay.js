//Programa para Asignar un Fondo Diferente Cada día.
var fechadia = new Date();
var dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

d = fechadia.getDay();
elegirfondo(d);
document.write(`Fondo del dia ${dias[d]}`);
function elegirfondo(d){
    
    switch(d){
        case 0: document.body.style.backgroundColor = 'red'; break;
        case 1: document.body.style.backgroundColor = 'green'; break;
        case 2: document.body.style.backgroundColor = 'orange'; break;
        case 3: document.body.style.backgroundColor = 'yellow'; break;
        case 4: document.body.style.backgroundColor = 'purple'; break;
        case 5: document.body.style.backgroundColor = 'cyan'; break;
        case 6: document.body.style.backgroundColor = 'pink'; break;
    }
}