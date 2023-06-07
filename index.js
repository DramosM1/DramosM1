const servidor = require("express")
const app = servidor()
const port =3000

app.get("/", (req,res)=> {
    res.send("servidor para pruebas")
})

app.listen(port,() =>{
    console.log("servidor activo");
})


let array = {"nombre" : "david"}

console.log(array.nombre);
