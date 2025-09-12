document.addEventListener("DOMContentLoaded", function () {
    form = document.querySelector("form");
	
    form.addEventListener("submit", function () {
        
        let g1 = parseFloat(document.getElementById("g1").value);
        let g2 = parseFloat(document.getElementById("g2").value);
        let g3 = parseFloat(document.getElementById("g3").value);
        let g4 = parseFloat(document.getElementById("g4").value);
        let g5 = parseFloat(document.getElementById("g5").value);

        
        let avg = (g1 + g2 + g3 + g4 + g5) / 5;

        
        document.write("<h2>Grade Checker Result</h2>");
        document.write("<p>Your average grade is: <b>" + avg.toFixed(2) + "</b></p>");
    });
});
