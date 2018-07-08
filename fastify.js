import fastify from 'fastify';
import bodyParser from 'body-parser';
import cors from 'cors';
import fastifyStatic from 'fastify-static';
import { join } from "path";

import preactHandler from "./src/handlers/preact";

const app = fastify();
const PORT = process.env.PORT || 3034;
const SECRET_KEY = process.env.SECRET_KEY || "my super secret key";

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.register(fastifyStatic, {
  root: join(__dirname, 'build'),
  prefix: '/build/', // optional: default '/'
})

// Routes
app.get("/", (req, res) => {
  res
    .code(200)
    .send("Hello from Fastify");
});

app.get("/preact", preactHandler);

app.decorate('notFound', (request, reply) => {
  reply.code(404).type('text/html').send('Not Found')
})

app.setNotFoundHandler(app.notFound)

app.listen(PORT, "127.0.0.1", () => {
  console.log(`FASTIFY Server is Running http://localhost:${PORT}`);
});
