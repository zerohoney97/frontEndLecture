import { Component } from "react";
import { Mycom, Mycom2 } from "../components/Mycom";
import Calander from "../components/Calendar";
import Modal from "../components/modal/Modal";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(params) {
    this.setState({ isDisplay: !this.state.isDisplay });
  }

  render() {
    return (
      <>
        {/* <Mycom name="첫번째 컴포넌트" Cname="red"></Mycom> */}
        {/* <Mycom name="두번째 컴포넌트" Cname="blue"></Mycom> */}
        {/* <Mycom3 numb={1} /> */}
        <Calander isDisplay={this.state.isDisplay} />
        <Modal changeDisplay={this.changeDisplay}  isDisplay={this.state.isDisplay}/>
      </>
    );
  }
}

export default Main;
