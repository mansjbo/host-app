const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.status(201).send("Testing.....");
});

app.get("/testing", (req, res) => {
	res.status(201).json({ message: "Working Fine......" });
});

const PORT = 4496;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
