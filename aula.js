let consumoCarroGas = 12 //Km por litros de gasolina 
let consumoCarroEt= 8 // Km por litros de etanol
let distViagem = 1000
let precoEtanol = 4.80
let precoGasolina = 6.30
let consumoCarro = 0
let totalGas =   (distViagem / consumoCarroGas) * precoGasolina
let totalEt = (distViagem / consumoCarroEt) * precoEtanol

if (consumoCarroGas){
    console.log ("o gasto total de combustivel da viagem em gasolina e de R$ " + totalGas.toFixed(2))
} 
     if (consumoCarroEt) {
        console.log ("o gasto total de combustivel da viagem em Etanol e de R$ " + totalEt.toFixed(2))
    }
