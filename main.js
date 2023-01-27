import './assets/styles/main.scss'
import './assets/scripts/main.js';
import.meta.glob( [
	'../assets/img/**',
] );

document.querySelector('#app').innerHTML = `
<div class="bg">
  <h1>Viteの静的コーディングはじまるよ！</h1>
</div>
`
