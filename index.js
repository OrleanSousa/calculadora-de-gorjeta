

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let bilTotal = bill + tipValue
    let billEach = bilTotal / split
    
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = 'R$ ' + tipValue
    document.getElementById('totalWithTip').innerHTML = 'R$ ' + bilTotal
    document.getElementById('splitValue').innerHTML = split
    document.getElementById('billEach').innerHTML = 'R$ ' + billEach

}