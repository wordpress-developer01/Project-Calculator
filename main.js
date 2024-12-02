function plus() {
    let num1, num2, result;

    num1 = document.getElementById("number-one").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("number-two").value;
    num2 = parseInt(num2);

    result = num1 + num2;
    result2 = num1 - num2;
    result3 = num1 * num2;
    result4 = num1 / num2;
    document.getElementById("out").innerHTML = result;
    document.getElementById("out").innerHTML = result2;
    document.getElementById("out").innerHTML = result3;
    document.getElementById("out").innerHTML = result4;
}


