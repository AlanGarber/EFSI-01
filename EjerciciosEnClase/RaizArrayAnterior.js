let arrayOriginal=[2,3,5,12,54,5,-1,0,23,66,7];
let arrayDuplicado=arrayOriginal.concat(arrayOriginal);
let arrayFinal=[];

for(let i=0;i<arrayDuplicado.length;i++){
    let obj={
        orig:arrayDuplicado[i],
        raiz:Math.sqrt(arrayDuplicado[i])
    }
    arrayFinal.push(obj);
}
console.log(arrayFinal);


