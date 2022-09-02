//default depend import
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//module imports
import postRoutes from "./routes/routes.js";

//app.use middleware setup
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

//default route setting
app.use("/api", postRoutes);

//connection params
const CONNECTION_USERNM = `userAdmin`;
//%40 is percent encoding for @
const CONNECTION_PWD = `M%40delein030507`;
const CONNECTION_URL = `mongodb+srv://${CONNECTION_USERNM}:${CONNECTION_PWD}@cluster0.f2adhpg.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on: http://localhost:${PORT}/api`)
        )
    )
    .catch((error) => console.log(error));
