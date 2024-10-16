document.getElementById('getWeather').addEventListener('click',function(){
const city=document.getElementById('city').value;
const apiKey='ea6dccad873b0ff339c2e5d97f96d416';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(weatherUrl)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    const weatherCondition=data.weather[0].description;
    const temprature=data.main.temp;
    const windSpeed=data.wind.speed;
    const weatherIcon=data.weather[0].icon;

   document.getElementById('weatherDetails').innerHTML=`
   <p><strong>Condition:</strong> ${weatherCondition}</p>
   <p><strong>Temprature:</strong> ${temprature}</p>
   <p><strong>WindSpeed:</strong> ${windSpeed}</p>`
   ;
   let weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png` ;
   document.getElementById('weatherImage').src=weatherIconUrl;

})
.catch(error=>
{
    console.log('Error fetching weather data:',error);
    document.getElementById('weatherDetails').innerHTML=`<p>City not found or API error!!!</p>`;
}
);


});
