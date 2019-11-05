
var form = document.getElementById("mYtable");
var width = document.getElementById("width");
var height = document.getElementById("height");
var result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (!form.checkValidity())
        return;
    var table = document.createElement('TABLE');
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    
    var tableWidth = parseInt(width.value);
    var tableHeight = parseInt(height.value);
    var finalpub = "<table>";
    
    for (var y = 1; y <= tableHeight; y++) {
        finalpub += "<tr>";
        
        for (var x = 1; x <= tableWidth; x++) {
            finalpub += "<td>" + x + "." + y + "</td>";
        }
        
        finalpub += "</tr>";
    }
    
    finalpub += "</table>";
    result.innerHTML = finalpub;
});