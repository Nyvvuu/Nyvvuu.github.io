function updateTemperature() {
    const inputElement = document.getElementById("donations");
    const temperatureValue = parseFloat(inputElement.value);

    if (!isNaN(temperatureValue) && temperatureValue >= 0 && temperatureValue <= 10000000) {
        const thermometerLiquid = document.getElementById("thermometer");
        thermometerLiquid.style.setProperty("--progress", `${(temperatureValue / 10000000) * 100}%`);
    } else {
        alert("Please enter a valid donation amount between 0 and 10,000,000.");
    }
}
