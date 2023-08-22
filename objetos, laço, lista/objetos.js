let objeto = {
    
};

const cadeado = {
    "cor": "Dourada",
    "rotulo": 23,
    "corDaAlça": "Prata",
    "tamanho": "Pequeno",
    "estaTrancado": true,
    "destrancar": function(chave){
        // debugger;
        // Safe guard
        if(!chave){
            return;
        }
        console.log("Tentando destrancar o cadeado com a chave: " + chave.nome);
        if(chave.rotuloDoCadeado == this.rotulo){
            this.estaTrancado = false;
            console.log("Cadeado destrancado! :D");
        }
    },
    "trancar": function(){
        this.estaTrancado = true;
    }
};

const chavePequenaPrateada = {
    nome: "Chave do cadeado da cozinha",
    cor: "Prata",
    tamanho: "Pequena",
    rotuloDoCadeado: 23
};

const chavePequenaDourada = {
    nome: "Chave da garagem",
    cor: "Dourada",
    tamanho: "Pequena",
    rotuloDoCadeado: 21
};

const chaveiro = {
    chaves: [chavePequenaDourada, chavePequenaPrateada]
}

// if(chaveiro.chaves[1].cor == "Prata"){
//     console.log("hehe ela é prata huahuahuahua");
// }

const parametroDaTranca = "estaTrancado";
console.log("O cadeado está trancado? " + cadeado[parametroDaTranca]);
cadeado.destrancar(chaveiro.chaves[1]);
console.log("O cadeado está trancado? " + cadeado.estaTrancado);
