const express = require("express") const sql = require("mysql")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const connect = sql.createConnection({ user: "root",
host: "localhost",
password: "",
database: "NumerExample"
})
app.get('/example', (req, res)=>{ connect.query("SELECT * FROM example",
(err, result)=>{ if(err){
console.error(err)
}else{
res.send(result)
}
})
})
app.listen('3002', ()=>{ console.log("Connect on port 3002") })