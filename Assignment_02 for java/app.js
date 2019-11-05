

         
    var wid = document.getElementById("widthTab");
    var hight = document.getElementById("heightTab");
    var table = document.getElementById("myTableData");


function addTable() {
     
    var myTableDiv = document.getElementById("myDynamicTable");
     
    var table = document.createElement('TABLE');
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
     
    var tableWidth = parseInt(wid.value);
    var tableHeight = parseInt(hight.value);
    
    for (var i=1; i<=tableWidth; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
      
       for (var j=1; j<=tableHeight; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("" + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
   
}

function load() {
   
    console.log("Page load finished");

}