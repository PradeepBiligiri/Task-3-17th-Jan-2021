//1. Create a request variable
var request = new XMLHttpRequest ();
//2. create a connection
request.open('GET','https://restcountries.eu/rest/v2/all', true);
//3. Send the connection
request.send();
//4. Register a event listner. Once a data is ready load the data.
request.onload = function (){
    var data = JSON.parse(this.response);
    for (i=0;i<data.length;i++)
    {
        let a = data[i].latlng[0];
        let b = data[i].latlng[1];
        //console.log(a)
        //console.log(b)
        let weather = "http://api.openweathermap.org/data/2.5/weather?lat=" +a+ "&lon=" +b+ "&appid=3e5a184a6752d5308cd29ae9afc986e5"
        //console.log(weather)
        var request1 = new XMLHttpRequest ();
        request1.open('GET',weather,true);
        request1. send();
        request1.onload = function(){
            var data1 = JSON.parse(this.response);
            console.log(data1.main.temp);
        }
    }
    
    
}

