import './Card.css';

const Card = ({weatherI, wind,pressure,pov,humidity,gusts}) => {
    return(
        <div id="Card">
            <div id="Tempdiv">
                <h1 id="h1"></h1><h1 id="typeDeg"></h1>
            </div>
            <div id="icon">
                <img width='250px' src={`http://openweathermap.org/img/wn/${weatherI}@2x.png`}></img>
            </div>
            <div id="addInfo">
                <div id='first'>
                    <h3>Wind: {wind}</h3>
                    <h3>Pressure: {pressure}</h3>
                </div>
                <div id="second">
                    <h3>Weather: {pov}</h3>
                    <h3>Humidity: {humidity}</h3>
                </div>
                <h3 id="row">Gusts: {gusts}</h3>
            </div>
        </div>
    );
}

export default Card;

//pressure, wind speed, POV eg. Clouds sunny etc., hummidity, max temp, Lat Long, wind gusts, (Sun rise, sun set) Optional
//pressure, wind speed, POV eg. Clouds sunny etc.,