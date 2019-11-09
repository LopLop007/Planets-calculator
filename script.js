var pes = document.getElementById("peso")



function calcular() {
    var msg = document.getElementsByTagName("p")
    if (pes.value.length == 0) {
        window.alert("Informe um valor")
    } else {

        var massa = Number(pes.value) / 9.8
        if (massa < 0) {
            window.alert("Informe um valor positivo")
        } else {
            window.alert("Valor calculado,veja abaixo")
            var pes_plan = [massa * 1.6, massa * 3.7, massa * 8.9, massa * 3.7, massa * 24.79, massa * 10.44, massa * 8.69, massa * 11.15, massa * 0.62]

            for (var c = 0; c <= pes_plan.length; c++) {
                msg[c].innerHTML = `${pes_plan[c].toFixed(2)}Kg`
            }
        }
    }
}