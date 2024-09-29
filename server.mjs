import express from "express"

const app = express();
const PORT = 3000;

app.get("/api/users", (req, res) => {
    res.status(200).json({message: "Hello how are you?"})
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
})