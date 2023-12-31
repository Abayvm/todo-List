import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let todoList = [];


app.get('/', (req, res) =>{
    res.render("index.ejs", { list: todoList });
})

app.post('/add', (req, res)=>{
    const task = req.body.task;
    if (task.trim() !== '') {
        todoList.push(task);
    }
    res.redirect('/');
})

app.listen(port, () =>{
    console.log(`The server is running on http://localhost:${port}`);
})