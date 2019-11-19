import React, { Component } from "react";
import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import { ReactTabulator } from "react-tabulator"; // for React 15.x, use import { React15Tabulator }
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

// for React 16.4.x use: import { ReactTabulator } - example in github repo.
import { React15Tabulator, reactFormatter } from "react-tabulator"; // for React 15.x
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";
import { stat } from "fs";
var data;
// function SimpleButton(props) {
//   console.log(props);
//   const cellData = props.cell._cell.row.data;
//   return <button onClick={() => props.onSelect(cellData.Name)}>Edit</button>;
// }

//console.log(this.props.allData);
//const data = this.props.allData;
// const data = [
//   {
//     Id: 1,
//     Name: "Devang",
//     Email: "Devang@gmail.com",
//     DOB: "22/11/1996",
//     Gender: "Male",
//     Hobby: ["cricket", "travelling"],
//     Marrige: false,
//     Discription: "software developer"
//   },
//   {
//     Id: 2,
//     Name: "Pavan",
//     Email: "Pavan@gmail.com",
//     DOB: "08/08/1995",
//     Gender: "Male",
//     Hobby: ["bike riding"],
//     Marrige: true,
//     Discription: "collection"
//   },
//   {
//     Id: 3,
//     Name: "Gavrav",
//     Email: "Gavrav@gmail.com",
//     DOB: "06/06/1992",
//     Gender: "Male",
//     Hobby: ["reading", "Music"],
//     Marrige: true,
//     Discription: "Lead developer"
//   },
//   {
//     Id: 4,
//     Name: "Tarak",
//     Email: "Tarak@gmail.com",
//     DOB: "04/04/1992",
//     Gender: "Male",
//     Hobby: ["reading", "Music", "watching movie"],
//     Marrige: true,
//     Discription: "IT Admin"
//   }
// ];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedId: "",
      selectedData: "",
      data1: []
      //data1: this.props.allData
    };
    // this.setState({
    //   data1: this.props.allData
    // });
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("get derived state from props");
  //   console.log(props.allData);
  //   console.log(stat.data1);
  //   if (props.allData !== state.data1) {
  //     return { data1: props.allData };
  //   }
  //   return null;
  // }

  // componentDidMount() {
  //   const { data12 } = this.props.allData;
  //   this.setState({ data1: data12 });
  // }

  // state = {
  //   data: [],
  //   selectedId: "",
  //   selectedData: ""
  // };
  ref = null;

  handleEditClick = (selectedData, e) => {
    alert("edit click");
    console.log(selectedData);
  };

  handleDeleteClick = (Id, e) => {
    alert("Delete click");
    alert(Id);
  };

  columns = [
    { title: "Name", field: "Name", width: 150 },
    { title: "Email", field: "Email", align: "left", formatter: "email" },
    { title: "DOB", field: "DOB" },
    { title: "Gender", field: "Gender" },
    { title: "Hobby", field: "Hobby", align: "center" },
    { title: "Marrige Status", field: "Marrige", align: "center" },
    { title: "Discription", field: "Discription" },
    {
      title: "Action",
      field: "custom",
      align: "left",
      formatter: reactFormatter(
        <div>
          <PrimaryButton
            text="Edit"
            onClick={e => {
              this.handleEditClick(this.state.selectedData, e);
            }}
          />
          <PrimaryButton
            text="Delete"
            onClick={e => {
              this.handleDeleteClick(this.state.selectedId, e);
            }}
          />
        </div>
      )
    }
    // {
    //   title: "Action",
    //   field: "custom",
    //   align: "left",
    //   formatter: reactFormatter(
    //     <SimpleButton
    //       onSelect={Name => {
    //         this.setState({ selectedName: Name });
    //         alert(Name);
    //       }}
    //     />
    //   )
    // }
  ];

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("rowClick id: ${row.getData().id}", row, e);
    // console.log(row.getData());
    this.setState({
      selectedId: row.getData().Id,
      selectedData: row.getData()
    });
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    console.log("home render method call");
    //alert("data");
    console.log(this.props.allData);
    // console.log(this.state.data1);
    data = this.props.allData;
    const options = {
      //height: 150,
      movableRows: true
    };

    return (
      <div>
        <React15Tabulator
          ref={ref => (this.ref = ref)}
          columns={this.columns}
          data={data}
          rowClick={this.rowClick}
          options={options}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />
      </div>
    );
  }
}

export default Home;
