var test = require('./test');
var $ = require('jquery');
require('./index.scss');

let app = document.createElement('div');
app.innerHTML = '<h1>index22211222111@@@44</h1>';
app.appendChild(test());
document.body.appendChild(app);
console.log($('div').html());