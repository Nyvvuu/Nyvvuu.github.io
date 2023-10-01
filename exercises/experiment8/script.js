function updateTemperature() {
    const inputElement = document.getElementById("temperature-input");
    const temperatureValue = parseFloat(inputElement.value);

    if (!isNaN(temperatureValue) && temperatureValue >= 0 && temperatureValue <= 100) {
        const thermometerLiquid = document.getElementById("thermometer-liquid");
        thermometerLiquid.style.setProperty("--temperature", `${temperatureValue}%`);
    } else {
        alert("Please enter a valid temperature value between 0 and 100.");
    }
}
