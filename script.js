
/*

AJAX - 2005

Asychronous Javascript And XML

ROTAS 

ENDPOINT

*/
const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    console.log(this.responseText)
}
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()

