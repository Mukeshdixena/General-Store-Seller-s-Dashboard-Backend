const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

const sequelize = require('./util/database');
const storeItemRouter = require('./router/storeItemRouter');

app.use(storeItemRouter);

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log(err));
