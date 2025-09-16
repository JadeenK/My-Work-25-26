window.addEventListener("load", addListener)

function addListener()
{
	document.getElementById("btnlogin").addEventListener("click",PreformCalc)
}

function PreformCalc()
{
        g1 = parseFloat(document.getElementById("g1").value);
        g2 = parseFloat(document.getElementById("g2").value);
        g3 = parseFloat(document.getElementById("g3").value);
        g4 = parseFloat(document.getElementById("g4").value);
        g5 = parseFloat(document.getElementById("g5").value);
		
        avg = (g1 + g2 + g3 + g4 + g5) / 5;

        
        document.write("<h2>Grade Checker Result</h2>");
        document.write("<p>Your average grade is: <b>" + avg + "</b></p>");
    
}