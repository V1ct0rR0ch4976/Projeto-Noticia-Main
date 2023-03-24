const setaCores = document.querySelector('.setinha-cores');
const setaLetra = document.querySelector('.setinha-tamanho-letra')

const cor = JSON.parse(localStorage.getItem("cor")) || [];

const configCores = document.querySelectorAll('.cor')
let vermelho = document.querySelector('.vermelho')   
let azul = document.querySelector('.azul')
let amarelo = document.querySelector('.amarelo')   
let verde = document.querySelector('.verde')
let preto = document.querySelector('.preto')
let corAtual = {
    'cor': 0
}

const letras = document.querySelectorAll('.tamanho')
const small = document.querySelector('.tamanho-pequeno')
const medio = document.querySelector('.tamanho-medio')
const big = document.querySelector('.tamanho-grande')

const body = document.querySelector('body')
const bodyP = body.querySelectorAll('p')
const bodyH1 = body.querySelectorAll('h1')

configCores.forEach(element => {
    element.classList.add('d-none')
})

letras.forEach(element => {
    element.classList.add('d-none')
})

setaCores.addEventListener('click', (event) => {  
    if(setaCores.innerHTML == 'keyboard_arrow_down') {
        setaCores.innerHTML = 'navigate_next';
        configCores.forEach(element => {
            element.classList.add('d-none')
        })
    } else {
        setaCores.innerHTML = 'keyboard_arrow_down';
        configCores.forEach((element) => {
            element.classList.remove('d-none')
        })
    }
})

// setaLetra.addEventListener('click', () => {  
//     if(setaLetra.innerHTML == 'keyboard_arrow_down') {
//         setaLetra.innerHTML = 'navigate_next';
//         letras.forEach(element => {
//             element.classList.add('d-none')
//         })
//     } else {
//         setaLetra.innerHTML = 'keyboard_arrow_down';
//         letras.forEach(element => {
//             element.classList.remove('d-none')
//         })
//     }
// })

vermelho.addEventListener('click', (event) => {
    if(!body.classList.contains('vermelho') && !body.classList.contains('checked')){
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('vermelho')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        vermelho.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(azul), 4);
    } else {
        body.classList.remove('vermelho')
        vermelho.classList.remove('checked')
        cor.splice(cor.indexOf(vermelho), 1);
    }
    corAtual.cor = 1
    cor.splice(0, 1)
    cor.push(corAtual)
})


azul.addEventListener('click', (event) => {
    if(!body.classList.contains('azul') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('azul')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        azul.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(verde), 3);
        cor.splice(cor.indexOf(vermelho), 1)
    } else {
        body.classList.remove('azul')
        azul.classList.remove('checked')
        cor.splice(cor.indexOf(azul), 1);

    }
    corAtual.cor = 2
    cor.splice(0, 1)
    cor.push(corAtual)
})

amarelo.addEventListener('click', (event) => {
    if(!body.classList.contains('amarelo') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('amarelo')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        amarelo.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(verde), 2);
        cor.splice(cor.indexOf(vermelho), 2);
    } else {
        body.classList.remove('amarelo')
        amarelo.classList.remove('checked')
        cor.splice(cor.indexOf('amarelo'), 1);
    }
    corAtual.cor = 3
    cor.splice(0, 1)
    cor.push(corAtual)
})

verde.addEventListener('click', (event) => {
    if(!body.classList.contains('verde') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('preto')
        body.classList.add('verde')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        verde.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(preto), 1);
        cor.splice(cor.indexOf(vermelho), 3);
    } else {
        body.classList.remove('verde')
        verde.classList.remove('checked')
        cor.splice(cor.indexOf('verde'), 1); 
    }
    corAtual.cor = 4
    cor.splice(0, 1)
    cor.push(corAtual)
})

preto.addEventListener('click', (event) => {
    if(!body.classList.contains('preto') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.add('preto')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        preto.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.add('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.add('whiteText')
        })
        cor.splice(cor.indexOf(vermelho), 4);
        preto.tagName = 'preto'
    } else {
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        body.classList.remove('preto')
        preto.classList.remove('checked')
        cor.splice(cor.indexOf('preto'), 1); 
    }
    corAtual.cor = 5
    cor.splice(0, 1)
    cor.push(corAtual)
})

// small.addEventListener('click', () => {
//     if(!body.classList.contains('tamanho-pequeno') && !small.classList.contains('checked')){
//         bodyP.forEach((item) => {
//             item.classList.add('tamanho-pequeno')
//         })
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-medio')
//             item.classList.remove('tamanho-grande')
//         })
//         letras.forEach((element) => {
//             element.classList.remove('checked')
//         })
//         small.classList.add('checked')
//     } else {
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-pequeno')
//         })
//         small.classList.remove('checked')
//     }
// })

// medio.addEventListener('click', () => {
//     if(!body.classList.contains('tamanho-medio') && !medio.classList.contains('checked')){
//         bodyP.forEach((item) => {
//             item.classList.add('tamanho-medio')
//         })
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-pequeno')
//             item.classList.remove('tamanho-grande')
//         })
//         letras.forEach((element) => {
//             element.classList.remove('checked')
//         })
//         medio.classList.add('checked')
//     } else {
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-medio')
//         })
//         medio.classList.remove('checked')
//     }
// })

// big.addEventListener('click', () => {
//     if(!body.classList.contains('tamanho-grande') && !big.classList.contains('checked')){
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-medio')
//             item.classList.remove('tamanho-pequeno')
//         })
//         bodyP.forEach((item) => {
//             item.classList.add('tamanho-grande')
//         })
//         letras.forEach((element) => {
//             element.classList.remove('checked')
//         })
//         big.classList.add('checked')
//     } else {
//         bodyP.forEach((item) => {
//             item.classList.remove('tamanho-grande')
//         })
//         big.classList.remove('checked')
//     }
// })

if (cor[0].cor == 1) {
    if(!body.classList.contains('vermelho') && !body.classList.contains('checked')){
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('vermelho')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        vermelho.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(azul), 4);
    } else {
        body.classList.remove('vermelho')
        vermelho.classList.remove('checked')
        cor.splice(cor.indexOf(vermelho), 1);
    }
} else if (cor[0].cor == 2) {
    if(!body.classList.contains('azul') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('azul')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        azul.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(verde), 3);
        cor.splice(cor.indexOf(vermelho), 1)
    } else {
        body.classList.remove('azul')
        azul.classList.remove('checked')
        cor.splice(cor.indexOf(azul), 1);

    }   
} else if (cor[0].cor == 3) {
    if(!body.classList.contains('amarelo') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('verde')
        body.classList.remove('preto')
        body.classList.add('amarelo')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        amarelo.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(verde), 2);
        cor.splice(cor.indexOf(vermelho), 2);
    } else {
        body.classList.remove('amarelo')
        amarelo.classList.remove('checked')
        cor.splice(cor.indexOf('amarelo'), 1);
    }
} else if (cor[0].cor == 4) {
    if(!body.classList.contains('verde') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('preto')
        body.classList.add('verde')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        verde.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        cor.splice(cor.indexOf(preto), 1);
        cor.splice(cor.indexOf(vermelho), 3);
    } else {
        body.classList.remove('verde')
        verde.classList.remove('checked')
        cor.splice(cor.indexOf('verde'), 1); 
    }
} else if (cor[0].cor == 5) {
    if(!body.classList.contains('preto') && !body.classList.contains('checked')){
        body.classList.remove('vermelho')
        body.classList.remove('azul')
        body.classList.remove('amarelo')
        body.classList.remove('verde')
        body.classList.add('preto')
        configCores.forEach((element) => {
            element.classList.remove('checked')
        })
        preto.classList.add('checked')
        bodyP.forEach((item) => {
            item.classList.add('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.add('whiteText')
        })
        cor.splice(cor.indexOf(vermelho), 4);
        preto.tagName = 'preto'
    } else {
        bodyP.forEach((item) => {
            item.classList.remove('whiteText')
        })
        bodyH1.forEach((item) => {
            item.classList.remove('whiteText')
        })
        body.classList.remove('preto')
        preto.classList.remove('checked')
        cor.splice(cor.indexOf('preto'), 1); 
    }
}
