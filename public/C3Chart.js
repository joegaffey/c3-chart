const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.1/c3.css';
  </style>
  <div class="chart"></div>
`;

class C3Chart extends HTMLElement {
  
  constructor()  {
    super();    
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    let chartEl = this.shadowRoot.querySelector('.chart');
    
    var chart = c3.generate({
      bindto: chartEl,
      data: JSON.parse(this.getAttribute('data'))
    });
  }
}

customElements.define('c3-chart', C3Chart);

    