let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/prototip'));

app.get('/*', (req, resp) => {
  resp.set('Access-Control-Allow-Origin', 'https://courseapp191126backend.herokuapp.com')
  resp.sendFile(__dirname+'/dist/prototip/index.html')
});

app.listen(process.env.PORT || 4200)
