const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'acme'
})

db.connect(); 

app.get('/users', (req, res) => {
    const sql = 'SELECT COUNT(id) FROM posts;';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result); 
    })
});

app.listen(placeholder, () => console.log('server started'));


