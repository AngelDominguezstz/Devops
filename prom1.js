function sumarUno(numero){
    var promesa = new Promise(function (resolve, reject){
        console.log(numero);
        if(numero>=7){
            reject('El número es muy alto');
        }
        setTimeout(() => {
            resolve(numero+1);
        }, 800);
    }).catch(error=>{

        console.log('error en promesa');
        console.log(error);

    })
    return promesa;
}

sumarUno(5)
.then(sumarUno)
.then(sumarUno)
.then(nuevoNumero =>{
    // console.log(nuevoNumero);
});