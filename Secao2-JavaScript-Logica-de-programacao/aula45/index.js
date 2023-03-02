// tratando e lançando erros (try, catch, finally)

// try {
//     // é executada quando não há erros
// } catch(e) {
//     // é executada quando há erros
// } finally {
//     // sempre é executadp
// }

// try {
//     console.log('Abri um aquivo');
//     console.log('Manupulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b)
//     } catch {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally');
//     }

// } catch(e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Data.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
    // tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia');
}



