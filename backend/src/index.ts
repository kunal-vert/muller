import express from "express";


const app = express();

app.use(express.json());

app.post("/api/v1/signup", (req, res) => {
  const {username, email, password} = req.body;
});


app.post("/api/v1/signin", (req, res) => {
  
});


app.post("/api/v1/content", (req, res) => {
  
});


app.get("/api/v1/content", (req, res) => {
  
});


app.delete("/api/v1/content", (req, res) => {
  
});



app.get("/api/v1/brain/ :shareLink", (req, res) => {
  
});




app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});