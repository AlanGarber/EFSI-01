const express = require("express");
const app = express();
const PORT = 3000;
const CANT_NUMEROS = 4;
let jugadores = [];
let cartones = [];

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
    if(jugadores.length==2){
        console.log("Existen mas jugadores que cartones, vuelva a intentar");
        res.send("Existen mas jugadores que cartones, vuelva a intentar");
    }else{
        let jugador=req.body.jugador;
        jugadores.push(jugador);
        console.log(`Jugador ${jugador}: ${cartones[jugadores.length-1]}`)
        res.send(`Jugador ${jugador}: ${cartones[jugadores.length-1]}`);
    }
});

app.get(`/cartones`,function(req,res){
    if(req.body.tablero>cartones.length){
        console.log("Carton no existente");
    }else{
        if(req.body.tablero===null){
            console.log(cartones)
            res.send(cartones);
        }else{
            console.log(cartones[req.bodytablero-1]);
            res.send(cartone[req.body.tablero-1]);
        }
    }
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


