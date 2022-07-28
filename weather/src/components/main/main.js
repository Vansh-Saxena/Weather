import React, {useState} from "react";
import Card from "./Card/Card";

const Main = () => {
    //states
    const [weatherIcon, changeWeatherIcon] = useState('');
    const [typeTemp, changeTypeTemp] = useState('Cel');
    //additional info
    const [wind_speed, changeWind_speed] = useState('');
    const [pressure, changePressure] = useState('');
    const [pov, changePov] = useState('');
    const [humidity, changeHumidity] = useState('');
    const [gusts, changeGusts] = useState('');
    const [place, changePlace] = useState('');
    
    const printer = (val) => {
        if (typeTemp == 'Cel') {
            const longTemp = Number(val.main.feels_like)-273.15;
            const temp = String(longTemp).slice(0,4);
            document.getElementById("h1").innerHTML = temp;
            document.getElementById('typeDeg').innerHTML = '°C';
        } else if (typeTemp == 'Fah') {
            const longTemp = (Number(val.main.feels_like)-273.15)*9/5+32;
            var temp;
            if (longTemp > 99) {
                temp = String(longTemp).slice(0,5);
            } else {
                temp = String(longTemp).slice(0,4)
            }
            document.getElementById("h1").innerHTML = temp;
            document.getElementById('typeDeg').innerHTML = '°F';
        } else if (typeTemp == 'Kel') {
            const temp = val.main.feels_like;
            document.getElementById("h1").innerHTML = temp;
            document.getElementById('typeDeg').innerHTML = '°K';
        }
            changePlace(val.name);
            console.log(place);
    }
    var controller = new AbortController();
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=28.783001&lon=79.017502&appid=d2bf9f640ac235459d6dd0a6fb998343')
    .then(response => response.json())
    .then(data => {
        printer(data)
        changeWeatherIcon(data.weather[0].icon)
        changeWind_speed(data.wind.speed)
        changePressure(data.main.pressure)
        changePov(data.weather[0].description)
        changeHumidity(data.main.humidity)
        changeGusts(data.wind.gust)
    })
    .then(controller.abort())

    const clickCel = () => {
        changeTypeTemp('Cel');
    }
    const clickFah = () => {
        changeTypeTemp('Fah');
    }
    const clickKel = () => {
        changeTypeTemp('Kel');
    }
    return (
        <div>
            <div id="place">
                    <h1 id="placeH1"></h1>
            </div>
            <div id="radioDiv">
                <button type="button" className="button-29" onClick={clickCel}>°C</button>
                <button type="button" className="button-29" onClick={clickFah}>°F</button>
                <button type="button" className="button-29" onClick={clickKel}>°K</button>
            </div>
            <Card weatherI={weatherIcon} wind={wind_speed} pressure={pressure} pov={pov} humidity={humidity} gusts={gusts}/>
        </div>
    );
}

export default Main;