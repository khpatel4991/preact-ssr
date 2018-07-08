import { h } from "preact";
import render from "preact-render-to-string";

import Hello from "../components/Hello";
import htmlWrapper from './base'

const preactHandler = (req, res) => {
  const str = htmlWrapper(render(<Hello />));
  res
    .code(200)
    .type("text/html")
    .send(str);
}

export default preactHandler;