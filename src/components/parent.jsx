import React, { Component } from "react";
//import Home from "./components/home";
//import Register from "./components/register";
import Home from "./home";
import Register from "./register";
import "./styles.css";

const data = [
  {
    Id: 1,
    Name: "Devang",
    Email: "Devang@gmail.com",
    DOB: "22/11/1996",
    Gender: "Male",
    Hobby: ["cricket", "travelling"],
    Marrige: false,
    Discription: "software developer"
  },
  {
    Id: 2,
    Name: "Pavan",
    Email: "Pavan@gmail.com",
    DOB: "08/08/1995",
    Gender: "Male",
    Hobby: ["bike riding"],
    Marrige: true,
    Discription: "collection"
  },
  {
    Id: 3,
    Name: "Gavrav",
    Email: "Gavrav@gmail.com",
    DOB: "06/06/1992",
    Gender: "Male",
    Hobby: ["reading", "Music"],
    Marrige: true,
    Discription: "Lead developer"
  },
  {
    Id: 4,
    Name: "Tarak",
    Email: "Tarak@gmail.com",
    DOB: "04/04/1992",
    Gender: "Male",
    Hobby: ["reading", "Music", "watching movie"],
    Marrige: true,
    Discription: "IT Admin"
  }
];

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: ""
    };
  }
  getviewdata = allInfo => {
    alert("parent getviewdata function call");
    this.setState({
      allData: allInfo
    });
  };

  render() {
    alert("parent render method call");
    console.log(this.state.allData);
    return (
      <div>
        {/* <div id="allData">
          <Home allData={data} />
        </div> */}
        <div>
          <Register viewData={this.getviewdata} />
        </div>
      </div>
    );
  }
}

export default Parent;
