import { h, render } from "preact";
import Hello from './components/Hello';
import "./main.css";

const init = () => {
  const hydrate = (vnode, parent) => {
    return render(vnode, parent, parent.firstElementChild);
  }
  hydrate(<Hello />, document.querySelector(".content-1"));
};

init();