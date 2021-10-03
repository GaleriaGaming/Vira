const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Vira Funcionando');
});
 
function keepAlive() {
   server.listen(() => { console.log("Keep Alive Funcionando")
   });
}

module.exports = keepAlive;