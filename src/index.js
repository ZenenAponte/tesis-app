const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 

const taskRoutes = require('./routes/task.routes');
//const {Server }= require ('socket.io');
//const http = require ('http');

const app = express();
//const server = http.createServer(app);
//const io = new Server(server, {
  // cors: {
  //   origin: "http://localhost:3000",
  // },
//});

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes); 

app.use((err, req, res, next) => {
    return res.json({
       message:err.message
   })
})  


  
app.listen(4000)
console.log('Todo esta funcionando puerto 4000')