const Location = () => {
    const tryFun = () => {
        const change = (pos) => {
            document.getElementById('lat').innerHTML = 'Latitude: ' + pos.coords.latitude + '| ';
            document.getElementById('long').innerHTML = 'Longitude: ' +  pos.coords.longitude;
        }
        navigator.geolocation.getCurrentPosition(change)
    }
    
    return(
        <div id="loc">
            {tryFun()}
            <h5 id="lat"></h5>
            <h5 id="long"></h5>
        </div>
    );
}

export default Location;