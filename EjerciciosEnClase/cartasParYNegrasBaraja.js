let numerosPoker=["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let palosPoker=["Diamante","Corazon","Pica","Trebol"];
let coloresPoker=["Rojo","Negro"];
let baraja=[];

for(let i=0;i<palosPoker.length;i++){
    for(j=0;j<numerosPoker.length;j++){ 
        let carta={
            numero:numerosPoker[j],
            palo:palosPoker[i]
            
        }
        baraja.push(carta);
    }
}
console.log(baraja);