var ajax = new XMLHttpRequest();

function getText() {

    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                console.dir(ajax.responseText);

        document.getElementById("table_insert").innerHTML = "<table border=`1`><tr><th>name</th><th>date</th><th>country</th>"
                + "<th>quality</th><th>resolution</th><th>codec</th>"
                + "<th>producer</th><th>director</th><th>carrier</th></tr>"
                + ajax.response
                + "</table>";
            }
        }
    }

        let genre = document.getElementById("genre").value;
        ajax.open("GET", "genre.php?genre=" + genre);
        ajax.send();
}

function getXML() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {

                console.dir(ajax);
                let rows = ajax.responseXML.firstChild.children;
                let result = "<table border ='1'>";

                result += "<tr><th>name</th><th>date</th><th>country</th><th>quality</th><th>resolution</th><th>codec</th><th>producer</th><th>director</th><th>carrier</th></tr>";

                for (var i = 0; i < rows.length; i++) {
                    result += "<tr>";
                    result += "<td>" + rows[i].children[0].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[1].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[2].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[3].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[4].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[5].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[6].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[7].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[8].firstChild.nodeValue + "</td>";
                    result += "</tr>";
                }
       
                document.getElementById("table_insert").innerHTML = result;

            }
        }
    }
    let actor = document.getElementById("actor").value;
    ajax.open("GET", "actor.php?actor=" + actor);
    ajax.send();
}





function getJSON() {

    ajax.onreadystatechange = loadData3;
    let period_start = document.getElementById("period_start").value;
    let period_end = document.getElementById("period_end").value;
    ajax.open("GET", "release_date.php?period_start=" + period_start +"&period_end=" +period_end );
    ajax.send();
}

function loadData3(){
if(ajax.readyState === 4)
{
    if(ajax.status === 200)
        console.log(ajax);

        let res = JSON.parse(ajax.response);
        let result = "<table border=`1`><tr><th>name</th><th>date</th><th>country</th><th>quality</th><th>resolution</th><th>codec</th><th>producer</th><th>director</th><th>carrier</th></tr>";

        for (var i = 0; i < res.length; i++) {
            result += "<tr>";
            result += "<td>" + res[i].name + "</td>";
            result += "<td>" + res[i].date + "</td>";
            result += "<td>" + res[i].country + "</td>";
            result += "<td>" + res[i].quality + "</td>";
            result += "<td>" + res[i].resolution + "</td>";
            result += "<td>" + res[i].codec + "</td>";
            result += "<td>" + res[i].producer + "</td>";
            result += "<td>" + res[i].director + "</td>";
            result += "<td>" + res[i].carrier + "</td>";
            result += "</tr>";
        }
        result +="</table>";
       
        document.getElementById("table_insert").innerHTML = result;

}  
}