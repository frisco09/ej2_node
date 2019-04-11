const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
/*-----------------------------------------------*/

const fs = require('fs');
const direccion = './BASE/';


let files = fs.readdirSync(direccion);
let link_files = files.map(file => ("<a href='" +direccion +file +"'  download>" +file +"</a>"))
//link_files = link_files.map(file => file.replace(/\\/g,''))
console.log(link_files)


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(link_files.join('\n'));
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  /**&
   * 
   * <a href=funcion1 >funcion 1</a>
   * <a href=funcion2 >funcion 2</a>
   */