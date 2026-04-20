function la_so(x) {
    return !isNaN(x) && x != "";
}

function inBang() 
    let n = document.getElementById("so").value; {

    if (!la_so(n)) {
        document.getElementById("kq").innerHTML = "Nhập số!";
        return;
    }

    let kq = "";
    for (let i = 1; i <= 10; i++) {
        kq += n + " x " + i + " = " + (n * i) + "<br>";
    }
}
    document.getElementById("kq").innerHTML = kq;