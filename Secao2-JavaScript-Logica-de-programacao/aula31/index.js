const verdadeiro = true;

//let tem escopo de bloco { ... bloco }
//var só tem escopo de função 

/** a variável sempre vai buscar seu valor no seu escopo, caso não ache, ela passará para 
 * o próximo até encontrar seu valor, caso não tenha, ela irá retornar un error
 * 
 let nome = 'Luiz'; //criando
 var nome2 = "Luiz";
 
 if (verdadeiro) {
     let nome = "Otávio"; //criando
     console.log(nome, nome2);
     
     if (verdadeiro) {
         let nome = 'Outra coisa';
         console.log(nome, nome2);
        }
    }
    
    
    // a grande diferença entre let e var é o escopo.
    
    let nome = 'Luiz'; //criando
    var nome2 = "Luiz"; //criando
    
    var nome2 = 'Otávio';
    //console.log(nome, nome2);
    
    if (verdadeiro) {
        let nome = "Otávio"; //criando
        var nome2 = 'Rogério'; //redeclarando 
        
        if (verdadeiro) {
            let nome = 'Outra coisa';
            var nome2 = 'Ronaldo'; //redeclarando
        }
    }
    console.log(nome, nome2);
    
    var sobrenome = 'Miranda';
    
    function falaOi () { //var respeitar enquanto estiver no limete de alguma {}
        console.log(sobrenome); //let só respeita o escopo que estiver
    }
    
    falaOi();
*/


let sobrenome = 'Laborda';

console.log(sobrenome);




