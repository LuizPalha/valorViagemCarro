// Very useful code for calculating vehicle fuel prices
let consumoCarroGas = 12 //Km por litros de gasolina 
let consumoCarroEt= 8 // Km por litros de etanol
let distViagem = 1000
let precoEtanol = 4.80
let precoGasolina = 6.30
let totalGas =   (distViagem / consumoCarroGas) * precoGasolina
let totalEt = (distViagem / consumoCarroEt) * precoEtanol

if (consumoCarroGas){
    console.log ("Total fuel expenditure of the trip in gasoline is R$ " + totalGas.toFixed(2))
} 
     if (consumoCarroEt) {
        console.log ("Total fuel expenditure of the trip in Ethanol is R$ " + totalEt.toFixed(2))
    }
