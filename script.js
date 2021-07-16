function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate / 100;
    var interestResult = document.getElementById("interest");
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result")

    if (principal.value < 1) {
        alert("Enter a positive number")
        principal.focus();
    } else {
        interestResult.innerText = interest;
        result.innerHTML = "If you deposit <mark>" + principal.value + "</mark>" +
                            "<br>at an interest rate of <mark>" + rate + "</mark>" +
                            "<br>you will receive an amount of <mark>" + interest + "</mark>" +
                            "<br>in the year " + "<mark>" + year + "</mark>";
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        