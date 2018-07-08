import fastify from 'fastify';
import bodyParser from 'body-parser';
import cors from 'cors';

import preactHandler from "./src/handlers/preact";

const app = express();
const PORT = process.env.PORT || 3033;
const SECRET_KEY = process.env.SECRET_KEY || "my super secret key";

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send("Hello From Express")
});

app.get("/preact", preactHandler);

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`EXPRESS Server is Running http://localhost:${PORT}`);
});
