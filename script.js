function calcular() {
    let formNum = document.querySelector('[data-num]')
    let seltxt = document.querySelector('[data-select]')
    if (formNum.value.length == 0) {
        alert('Digite algum numero')
    } else {
        let numero = Number(formNum.value)
        seltxt.innerHTML = ''
        for (let m = 1; m <=10; m++){ //m de multiplicação
            let opto = document.createElement("option")
            opto.text += `${numero} x ${m} = ${numero*m}`
            seltxt.appendChild(opto)
        }
    }
}