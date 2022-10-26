let sumarlento =(numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(numero+1)
        }, 800);
        // reject('El número es muy alto');
    });
}

let sumarRapido =(numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(numero+1)
        }, 300);
    });
}

// sumarlento(5).then(console.log);
// sumarRapido(10).then(console.log);

Promise.all([sumarlento(5), sumarRapido(10)]).then(respuesta=>{
     console.log(respuesta);
})