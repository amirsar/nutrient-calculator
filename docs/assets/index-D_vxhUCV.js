(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;document.querySelector("#period").addEventListener("change",a);function a(){const o=document.querySelector("#period").value;document.querySelector('label[for="water"]').textContent=`Irrigation Water (m³ per dunam per ${o.slice(0,-2)}):`}a();document.querySelector("#calculate").addEventListener("click",s);function s(){const o=parseFloat(document.querySelector("#water").value),r=parseFloat(document.querySelector("#nitrate").value)||0,u=parseFloat(document.querySelector("#ammonium").value)||0,i=parseFloat(document.querySelector("#phosphorus").value)||0,e=parseFloat(document.querySelector("#potassium").value)||0;if(isNaN(o)||o<=0){document.querySelector("#results").innerHTML="<p>Please enter a valid positive number for water amount.</p>";return}const t=(r+u)/1e3*o,n=i/1e3/.4366*o,l=e/1e3/.83*o;document.querySelector("#results").innerHTML=`
    <h2>Results:</h2>
    <p>Nitrogen: ${t.toFixed(2)} kg/dunam</p>
    <p>Phosphorus: ${n.toFixed(2)} kg/dunam</p>
    <p>Potassium: ${l.toFixed(2)} kg/dunam</p>
  `}
