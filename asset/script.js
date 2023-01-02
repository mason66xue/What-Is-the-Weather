const key =b4e6cc41316823e195bbd1af5b375700;
const api =`api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;
const lang ='en';
const units ='imperial';
var lat;
var lon;

fetch(api)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

}
)