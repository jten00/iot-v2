import './style.css'
import{ PIR } from './pir';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <div id="container"></div>
  </div>
`

new PIR(
  document.querySelector<HTMLDivElement>("#container")!
);