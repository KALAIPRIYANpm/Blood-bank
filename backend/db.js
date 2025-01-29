const express=require('express')
const bodyparser=require('body-parser')
const sql=require('mysql2')
const mycors=require('cors')
const cors=mycors()

const base=sql.createConnection({

    database:"blood",
    user:"root",
    password:"kalaipriyan0007",
    port:"3306"

})

const app=express()
app.use(cors)
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

base.connect((err)=>{
    if(err){
        console.log('Database Connection Failed',err.message)
    }
    console.log("database was connected successfully")
})

app.listen(1234,()=>{
    console.log("server was connected successfully")
})

// app.post('/send',async(req,res)=>{
//     const{name,contact,description,urgency,location,peopleCount,foodNeeded}=req.body
// })

app.post('/send', async (req, res) => {
    const { s_no, name, contact, age, blood_group, have_you_donated, address } = req.body;
    
    console.log("Incoming request data:", req.body); 
    const sql = "INSERT INTO donor_details VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    base.query(sql, [s_no, name, contact, age, blood_group, have_you_donated, address], (err, results) => {
        if (err) {
            console.error("Database error:", err); 
            return res.status(500).json({ error: `Database error: ${err.message}` });
        }
        
        console.log("Query executed successfully:", results); 
        return res.status(200).json({ message: `Details have been posted successfully.` });
    });
});
    
  

app.get('/view', async (req, res) => {
    const sql = "SELECT * FROM donor_details";
    base.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: `${err} occurred` });
        } else if (result.length === 0) {
            res.status(404).json({ message: "No records found" });
        } else {
            res.status(200).json({ rows: result });
        }
    });
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    base.query(sql, values, (err,data) => {
        if (err) {
            console.error("Database query error: ", err);
            return res.status(500).json({ message: "ERROR", error: err.message });
        }
        return res.status(200).json({ message: "User registered successfully", data });
    });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    base.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ message: "Database error", error: err.message });
        }
        if (result.length > 0) {
            return res.status(200).json({ message: "Login successful", user: result[0] });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    });
});
