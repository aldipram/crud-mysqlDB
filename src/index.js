require('dotenv').config();
const express = require("express");
const usersRoutes = require("./routes/users")
const middlewareRequest = require("./middleware/logs");
const upload = require('./middleware/multer');

const PORT = process.env.PORT;

const app = express();

app.use(middlewareRequest);

app.use(express.json());

app.use("/users",  usersRoutes);

app.post("/upload",upload.single('photo'),(req, res) => {
    try {
        res.json({
            message: "Upload berhasil"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});