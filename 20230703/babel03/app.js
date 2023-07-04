class App extends React.Component {
  render() {
    return (
      <ul>
        <li>list1</li>
      </ul>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
