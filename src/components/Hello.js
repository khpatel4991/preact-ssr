import { h, Component } from 'preact';

class Hello extends Component {

  componentDidMount = async () => {
    const answer = await Promise.resolve(42);
    console.log(answer);
  }

  handleClick = async () => {
    console.log("Clicked");
  }

  render(props, state) {
    return (
      <div>
        Hello From Preact
        <button onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  }
}

export default Hello