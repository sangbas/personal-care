import React from 'react'
import PropTypes from "prop-types";

import { Box, Grommet, Select, Text, Button, Form, RadioButton,Image } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import niveaSmall from './assets/nivea_small.png';
import niveaMen from './assets/nivea_men.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const customRoundedTheme = deepMerge(grommet, {
    global: {
      control: {
      },
      input: {
        weight: 400
      },
      font: {
        color: "#fffff",
        size: "18px"
      }
    },
    text: {
      color: "#fffff",
      medium: "13px"
    },
    textInput: {
      extend: "padding: 0 12px;"
    },
    select: {
      color:"#fffff",
      border: {
        color: "#fff"
      },
      control: {
        open: {
          background: "#ece0fa",
          border: "1px solid #7D4CDB"
        }
      }
    },
    radioButton: {
      colors: {
        text: '#000000'
      },
      hover: {
        border: {
          color: "dark-3"
        }
      },
      border: {
        color: "#fff"
      },
      check: {
        color: {
          light: "light-1"
        }
      },
      label: {
        color: "#fffff",
        size: "18px"
      },
      icon: {
        size: "16px"
      }
    }
  });
  
class Order extends React.Component {
    constructor() {
        super();
        this.setState({ select: '', beverage:'0' })
    }	

    handleSubmit(value) {
        // event.preventDefault();
        // const data = new FormData(event.target);
        console.log(this.state.select)
        if(this.state.select === 'Massage') {
            this.setState({ beverage:'0' })
        }
        console.log(this.state.beverage)
        fetch('https://personal-care-bdf-be.herokuapp.com/order', {
          method: 'POST',   
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({userId: localStorage.getItem('userId'), beverageId: this.state.beverage+''}),
        }).then(function (response) {
            // this.setState({ user_id: response.id});
            // alert("Thank you for your order, please wait for a moment :)")
            Swal.fire(
              'Thank you for your order!',
              'please wait for a moment :)',
              'success'
            )
            setInterval(() => window.history.back(), 5000);
            
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            //Do your logic
        });
      }
    
    static propTypes = {
        theme: PropTypes.shape({})
      };
    
      static defaultProps = {
        theme: undefined
      };
    
      state = {
        options: ["Massage", "Coffee"],
        select: ""
      };

      onChange = event => this.setState({ beverage: event.target.value });
      onChangeOrder = event => this.setState({ select: event.target.value });
    
      render() {
        const { theme, ...rest } = this.props;
        const { options, select, beverage } = this.state;
        var hidden = {
          color:"#fff",
          fontFamily:"Nivea",
			    display: this.state.select==='Massage'||this.state.select==='' ? "none" : "block"
        }
        var submit = {
          align:"center",
          display: this.state.select==='' ? "none" : "block"
        }
        
        return <Grommet full theme={customRoundedTheme}>
        <div className='bg'>
        <div>
          <Box fill justify="center" direction="row">
            <Image src={niveaSmall} height={100} style={{margin:20}}/>
            <Image src={niveaMen} height={100} style={{margin:20}} />
          </Box>
          
          </div>           
          <Box fill align="center" justify="start" pad="large">
              <Form 
                onReset={event => console.log(event)}
                onSubmit={({ value }) => this.handleSubmit(value)}>
              {/* <Select
                style={{color:"#fff",margin:20,fontFamily:"Nivea"}}
                id="select"
                name="select"
                placeholder="Please choose your order"
                icon={false}
                value={select}
                options={options}
                onChange={({ option }) => this.setState({ select: option })}
                {...rest}
              /> */}
              <Box direction="row" style={{color:"#fff", fontFamily:"Nivea"}}>
              <RadioButton
                label="Massage"
                name="radioOrder"
                value="Massage"
                checked={beverage === "Massage"}
                onChange={this.onChangeOrder}
              />
              <Text style={{margin:10}}></Text>
              <RadioButton
                label="Coffee"
                name="radioOrder"
                value="Coffee"
                checked={beverage === "Coffee"}
                onChange={this.onChangeOrder}
              />
              </Box>
              
              <Box align="left" justify="start" pad="large" style={hidden}>
              <RadioButton
                label="Es Kopi Susu"
                name="radio"
                value="Es Kopi Susu"
                checked={beverage === "Es Kopi Susu"}
                onChange={this.onChange}
              />
              <Text style={{margin:5}}></Text>
              <RadioButton
                label="Ice Latte"
                name="radio"
                value="Ice Latte"
                checked={beverage === "Ice Latte"}
                onChange={this.onChange}
              />
              <Text style={{margin:5}}></Text>
              <RadioButton
                label="Hot Capppucino"
                name="radio"
                value="Hot Capppucino"
                checked={beverage === "Hot Capppucino"}
                onChange={this.onChange}
              />
              <Text style={{margin:5}}></Text>
              <RadioButton
                label="Hot Americano"
                name="radio"
                value="Hot Americano"
                checked={beverage === "Hot Americano"}
                onChange={this.onChange}
              />
              <Text style={{margin:5}}></Text>
              <RadioButton
                label="Espresso Double Shot"
                name="radio"
                value="Espresso Double Shot"
                checked={beverage === "Espresso Double Shot"}
                onChange={this.onChange}
              />
              </Box>
              <Box style={submit} align="center" justify="center" margin={{ top: "medium" }}>
                <Button type="submit" label="Order" primary />
              </Box>
              </Form>
            </Box>
            </div>

          </Grommet>
        
      }
    }
    
    const defaultOptions = [];
    const objectOptions = [];
    for (let i = 1; i <= 200; i += 1) {
      defaultOptions.push(`option ${i}`);
      objectOptions.push({
        lab: `option ${i}`,
        val: i,
        dis: i % 5 === 0,
        sel: i % 13 === 0
      });
    }
    
export default Order
