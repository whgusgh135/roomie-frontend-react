const express = require("express");
const app = express();
//const config = require("./config/dev");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = Promise;
//mongoose.connect(config.DB_URI, { useNewUrlParser: true });
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

// const cors = require("cors");
// app.use(cors());


// routes
const userRoutes = require("./routes/user");
const roomieRoutes = require("./routes/roomie");
const rentRoutes = require("./routes/rent");
const messageRoutes = require("./routes/message");

app.use("/api/user", userRoutes);
app.use("/api/roomie", roomieRoutes);
app.use("/api/rent", rentRoutes);
app.use("/api/message", messageRoutes);

// route to get all the image files stored in the server
app.get("/api/image/uploads/:id", async function(req, res, next) {
    try {
        res.sendFile(__dirname + "/uploads/" + req.params.id);
    } catch(error) {
        return next({
            status: 400,
            message: error.message
        });
    }
})

// error handler
app.use(function(error, request, response, next) {
    return response.status(error.status || 500)
        .json({ error: {
            message: error.message || "Something went wrong."
        }})
});

// run static page together with server
const path = require("path");
const appPath = path.join(__dirname, "..", "build");
app.use(express.static(appPath));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
});


// server running
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log("Server Running");
});