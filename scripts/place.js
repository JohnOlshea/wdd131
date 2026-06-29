/**
 * Calculates the wind chill factor using the metric formula (°C, km/h).
 * @param {number} temperature - Temperature in °C
 * @param {number} windSpeed - Wind speed in km/h
 * @returns {number} Wind chill temperature in °C (one decimal place)
 */
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Static weather values matching the HTML content
const temperature = 10;   // °C
const windSpeed = 5;      // km/h

// Wind chill is only applicable when: temp <= 10°C AND wind > 4.8 km/h
const windChillEl = document.getElementById('wind-chill');

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = chill.toFixed(1) + ' °C';
} else {
    windChillEl.textContent = 'N/A';
}

// Dynamic footer: current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Dynamic footer: last modified date
document.getElementById('last-modified').textContent = document.lastModified;