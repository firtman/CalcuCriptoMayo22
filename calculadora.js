navigator.serviceWorker.register("serviceworker.js");

// Convierte lo que el usuario ingresa en pesos a bitcoin
 async function convertir() {
    if (navigator.onLine) {
        var entrada = document.querySelector("input");
        var pesos = entrada.value;
    
        // vamos a buscar a un backend la cotización real del bitcoin
        var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars";
        var respuesta = await fetch(url);
        var json = await respuesta.json();
    
        var cotizacionBitcoin = json.bitcoin.ars;
        var bitcoins = (pesos / cotizacionBitcoin) * 1000; 
    
        var salida = document.querySelector("output");
        salida.innerHTML = "₿" + bitcoins.toFixed(5) + " milibitcoins";
    } else {
        var salida = document.querySelector("output");
        salida.innerHTML = "Disculpá, no hay internet 😢";    
    }

    
}

