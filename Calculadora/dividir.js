function dividir (a, b) {
    if(a == 0 || b == 0){
        return 'Não se pode dividir por zero'
    }
    else{
        return a / b
    }
};

/*console.log(dividir(10,2));*/

export default dividir;