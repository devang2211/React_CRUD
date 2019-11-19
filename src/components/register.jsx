import React, { Component } from "react";
import Home from "./home";
import "./styles.css";

//document.getElementById("allData").style.display = "none";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getInformation = this.getInformation.bind(this);

    this.state = {
      Name: "",
      Email: "",
      Gender: "",
      datas: [],
      act: 0,
      index: ""
    };
  }

  onChangePersonName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onChangeGstNumber(e) {
    this.setState({
      Gender: e.target.value
    });
  }

  onSubmit(e) {
    let datas = this.state.datas;
    e.preventDefault();
    console.log(
      `The values are ${this.state.Name}, ${this.state.Email}, and ${this.state.Gender}`
    );
    if (this.state.act === 0) {
      alert("condition true");
      var data = {
        Name: this.state.Name,
        Email: this.state.Email,
        Gender: this.state.Gender
      };
      console.log(data);
      // let data = {
      //   Name,
      //   Email
      // };
    }
    // else {
    //   let index = this.state.index;
    //   datas[index].Name = Name;
    //   datas[index].Email = Email;
    // }
    datas.push(data);
    console.log(datas);
    this.setState({
      datas: datas,
      act: 0
    });
    this.setState({
      Name: "",
      Email: "",
      Gender: "",
      //datas: [],
      act: 0,
      index: ""
    });
    document.getElementById("allData").style.display = "block";
  }

  getInformation = () => {
    alert("get Information method call");
    this.props.viewData(this.state.datas);
  };

  render() {
    //console.log(this.state.datas);
    //console.log("register render method call");
    return (
      <div>
        <div style={{ marginTop: 10 }} id="formData">
          <h3>Add New Information</h3>
          <form>
            <div className="form-group">
              <label>Person Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.Name}
                onChange={this.onChangePersonName}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeBusinessName}
              />
            </div>
            <div className="form-group">
              <label>Gender: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.Gender}
                onChange={this.onChangeGstNumber}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Register Business"
                className="btn btn-primary"
                onClick={this.onSubmit}
              />
            </div>
          </form>
        </div>

        <div id="allData">
          {this.getInformation}
          <Home allData={this.state.datas} />
        </div>
      </div>
    );
  }
}
