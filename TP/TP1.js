const express = require("express");
const app = express();
const PORT = 3000;
const CANT_NUMEROS = 4;
let jugadores = [];
let cartones = [];
let contadorJugadores=0;

const crearCarton=()=>{
    let carton=[];
    let num;
        for(let i=0;i<CANT_NUMEROS;i++){
            num=Math.floor(Math.random() * 99);
                for(let j; j<CANT_NUMEROS; j++){
                    while(num===carton[j]){
                        num=Math.floor(Math.random() * 99);
                    }
                }
            carton[i] = num;
        }
    return carton;
}


const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

app.use(express.json());
	
app.post("/", function (req, res) {
	console.log(req.body)
	// res.end();

    let limite = req.body.limite;
    res.send(process_data(req.body));
});

app.get("/mi_endpoint", function (req, res) {
    res.send("respuesta");
});

app.post("/numero_aleatorio",function(req,res){
    console.log(req.body);
    res.send([Math.floor(Math.random() * (req.body.numero-1))+1]);
});

app.post("/iniciar_juego",function(req,res){
    console.log(req.body);

    for(let i=0;i<req.body.cartones;i++){
        carton = crearCarton();
        cartones.push(carton);
    }
    res.send(cartones);
    
});

app.get("/obtener_carton",function(req,res){
    if(jugadores.length>=cartones.length){
        console.log("Existen mas jugadores que cartones, vuelva a iniciar el juego");
        res.send("Existen mas jugadores que cartones, vuelva a iniciar el juego");
    }else{
        let jugador={
            nombre:req.body.jugador,
            carton:cartones[contadorJugadores]
        }
        contadorJugadores=contadorJugadores+1
        jugadores.push(jugador);
        console.log(`Jugador ${jugador.nombre}: ${jugador.carton}`)
        res.send(`Jugador ${jugador.nombre}: ${jugador.carton}`);
    }
});

app.get(`/cartones/:Nombre?`,function(req,res){
    const cartonesNombre = req.params.Nombre;
    let cartonElegido;
        if(cartonesNombre===undefined){
            console.log(cartones)
            res.send(cartones);
        }else{
            for(let i=0;i<jugadores.length;i++){
                if(cartonesNombre==jugadores[i].nombre){
                    cartonElegido=jugadores[i].carton;
                }
            }
            console.log(cartonElegido);
            res.send(cartonElegido);
        }
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


