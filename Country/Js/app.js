function coletar() {
    let input = document.querySelector('.Input-Pais').value
    console.log(input)
    Dados(input)
}

async function Dados(input) {
    let dados = await fetch(`https://restcountries.com/v3.1/name/${input}`).then(response => response.json())
    console.log(dados)
    exibirdados(dados)
}

 function exibirdados(dados) {
    document.querySelector('.capital').value = dados[0].capital
    document.querySelector('.regiao').value = dados[0].region
    document.querySelector('.populacao').value = dados[0].population
    document.querySelector('.subregiao').value = dados[0].subregion
 }