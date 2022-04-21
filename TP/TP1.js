const express = require("express");
const app = express();
const PORT = 3000;

const crearCarton=()=>{
    let carton=[];
        for(let i=0;i<15;i++){
            carton[i]=Math.floor(Math.random() * 99);
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
        res.send(crearCarton());
    }
    
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


