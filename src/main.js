import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Nutrient Calculator</h1>
    <div class="calculator">
      <label for="period">Time Period:</label>
      <select id="period">
        <option value="weekly">Weekly</option>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>
      <label for="water">Irrigation Water (m³ per dunam per week):</label>
      <input type="number" id="water" step="0.01" />
      <label for="nitrate">Nitrate Concentration (ppm):</label>
      <input type="number" id="nitrate" step="0.01" />
      <label for="ammonium">Ammonium Concentration (ppm):</label>
      <input type="number" id="ammonium" step="0.01" />
      <label for="phosphorus">Phosphorus Concentration (ppm):</label>
      <input type="number" id="phosphorus" step="0.01" />
      <label for="potassium">Potassium Concentration (ppm):</label>
      <input type="number" id="potassium" step="0.01" />
      <button id="calculate">Calculate</button>
      <div id="results"></div>
    </div>
  </div>
`

document.querySelector('#period').addEventListener('change', updateWaterLabel)

function updateWaterLabel() {
  const period = document.querySelector('#period').value
  document.querySelector('label[for="water"]').textContent = `Irrigation Water (m³ per dunam per ${period.slice(0, -2)}):`
}

updateWaterLabel() // initial call

document.querySelector('#calculate').addEventListener('click', calculateNutrients)

function calculateNutrients() {
  const water = parseFloat(document.querySelector('#water').value)
  const nitrate = parseFloat(document.querySelector('#nitrate').value) || 0
  const ammonium = parseFloat(document.querySelector('#ammonium').value) || 0
  const phosphorusConc = parseFloat(document.querySelector('#phosphorus').value) || 0
  const potassiumConc = parseFloat(document.querySelector('#potassium').value) || 0
  if (isNaN(water) || water <= 0) {
    document.querySelector('#results').innerHTML = '<p>Please enter a valid positive number for water amount.</p>'
    return
  }
  const nitrogen = ((nitrate + ammonium) / 1000) * water
  const phosphorus = (phosphorusConc / 1000) / 0.4366 * water
  const potassium = (potassiumConc / 1000) / 0.83 * water
  document.querySelector('#results').innerHTML = `
    <h2>Results:</h2>
    <p>Nitrogen: ${nitrogen.toFixed(2)} kg/dunam</p>
    <p>Phosphorus: ${phosphorus.toFixed(2)} kg/dunam</p>
    <p>Potassium: ${potassium.toFixed(2)} kg/dunam</p>
  `
}