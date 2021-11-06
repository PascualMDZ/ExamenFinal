//se importa el express para el servidor
const express = require('express'); //se crea una constante express e importamos libreria requiere
const app = express(); // se crea una constante app y lo igualamos a las funciones almacena express


app.use(express.static(__dirname+'/')) //dirname es para proporcionar un directorio relativo simbolizando el local host

//Definimos las rutas

app.get('/informacion', function(req,res){//req es el objeto que contiene información sobre la solicitud HTTP y res la respuesta
    res.sendFile(__dirname+'/info.html'); //dirname es para manejar un directorio relativo y abrir el archivo html
});


//Ejemplo de errores

//para el primer error el directorio no existe
app.get('*', function(req,res){
    res.send('404 | Page not found');
});

//para el segundo error cambiarle algo al html o nombre mal escrito
app.use((err, req, res, next) =>{ //aparte del req y res podemos pasarle un error
    console.error(err.stack); //el error se imprime con err.stack pila de error
    res.status(500).send("algo salió mal con el servidor"); //error del servidor
    });
    
//configuración del servidor con el puerto definido : 5500
app.listen('5500', () =>{
    console.log('servidor levantado en el puerto 5500')
})

