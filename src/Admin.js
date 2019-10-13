import React from 'react'
import {
  Box,
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text
} from "grommet";
import { grommet } from "grommet/themes";

class Admin extends React.Component {

  constructor(props) {
    super(props)
    // this.setState({beverages:[]});
    // this.setState({massages:[]})
    this.state = {
      beverages: [], 
      massages: []
    }
  }

  componentDidMount() {
    this.getBeverageOrders();
    this.getMassageOrders();

    // setInterval(this.getBeverageOrders, 10000);
    // setInterval(this.getMassageOrders, 10000);
    this.interval = setInterval(() => this.getBeverageOrders(), 10000);
    this.interval = setInterval(() => this.getMassageOrders(), 10000);

  }

  getBeverageOrders() {
    fetch('https://personal-care-bdf-be.herokuapp.com/order/beverage', {
      method: 'GET',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
        // this.setState({ user_id: response.id});
        if(response!=null) {
          // console.log(response._bodyText)
        }
        
        return response.json(); //response.json() is resolving its promise. It waits for the body to load
    }).then((responseData) => this.setState({beverages: responseData})
        //Do your logic
        // console.log(responseData);
        // this.setState({beverages:responseData});
    );
  }

  getMassageOrders() {
    fetch('https://personal-care-bdf-be.herokuapp.com/order/massage', {
      method: 'GET',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
        // this.setState({ user_id: response.id});
        if(response!=null) {
          console.log("massa"+response._bodyText)
        }
        
        return response.json(); //response.json() is resolving its promise. It waits for the body to load
    }).then((responseData) => this.setState({massages: responseData})
        //Do your logic
        // console.log(responseData);
        // this.setState({beverages:responseData});
    );
  }
  
  render() {
    console.log(this.state.beverages)
    return (
      <Grommet theme={grommet}>
      <Box align="left" pad="large">
        <Text margin={{ vertical: "medium" }}>
          Order Kopi
        </Text>
        <table border="1">
          <thead><tr>
      <th>No</th>
      <th>Nama</th>
      <th>Minuman</th>
    </tr></thead>
      <tbody>{this.state.beverages.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{key+1}</td>
                      <td>{item.userId}</td>
                      <td>{item.beverageId}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>

       <Text margin={{ vertical: "medium" }}>
          Order Massage
        </Text>
        <table border="1">
          <thead><tr>
      <th>No</th>
      <th>Nama</th>
    </tr></thead>
      <tbody>{this.state.massages.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{key+1}</td>
                      <td>{item.userId}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
      </Box>
    </Grommet>
      );
  }
}
export default Admin
