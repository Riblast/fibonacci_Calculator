document.getElementById("calcularButton").onclick = fibonacciSequence;

function fibonacciSequence() {
    const terms = parseInt(document.getElementById("terms").value);
    let n1=0, n2=1, nextTerm;

    if (!isNaN(terms) == false) {
        Swal.fire({
            icon: 'error',
            title: "Ingrese un valor númerico",
            timer: 1500,
            confirmButtonText: "Ok",
            confirmButtonColor: "#eab208"
        })
    }
    else{
        for (let i = 1; i <= terms; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            Swal.fire({
                title: "El número en la posición " + terms + " es",
                text: n1,
                timer: 1500,
                confirmButtonText: "Ok",
                confirmButtonColor: ""
            })
        }
    }



}