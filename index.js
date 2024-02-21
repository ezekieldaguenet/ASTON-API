import express from "express";


const app = express();
const PORT = 4000; 

// Middlewares 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes 
app.get('/api', (req, res) => {
    res.json({
        message:"Hello World",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
