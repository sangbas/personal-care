import React from 'react'
import PropTypes from "prop-types";

import { Box, Grommet, Select, Text, Button, Form, RadioButton } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const customRoundedTheme = deepMerge(grommet, {
    global: {
      control: {
        border: {
          radius: "24px"
        }
      },
      input: {
        weight: 400
      },
      font: {
        size: "12px"
      }
    },
    text: {
      medium: "13px"
    },
    textInput: {
      extend: "padding: 0 12px;"
    },
    select: {
      control: {
        extend: "padding: 3px 6px;",
        open: {
          background: "#ece0fa",
          border: "1px solid #7D4CDB"
        }
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
          body: JSON.stringify({userId: '1', beverageId: this.state.beverage+''}),
        }).then(function (response) {
            // this.setState({ user_id: response.id});
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
    
      render() {
        const { theme, ...rest } = this.props;
        const { options, select, beverage } = this.state;
        var hidden = {
			display: this.state.select==='Massage'||this.state.select==='' ? "none" : "block"
        }
        var submit = {
            display: this.state.select==='' ? "none" : "block"
        }
        return (
          <Grommet full theme={theme || grommet}>
            <Box fill align="center" justify="start" pad="large">
              <Text>Choose</Text>
              
              
              <Form 
                onReset={event => console.log(event)}
                onSubmit={({ value }) => this.handleSubmit(value)}>
              <Select
                id="select"
                name="select"
                placeholder="Select"
                value={select}
                options={options}
                onChange={({ option }) => this.setState({ select: option })}
                {...rest}
              />
              <Box fill align="left" justify="start" pad="large" style={hidden}>
              <RadioButton
                label="Cappucino"
                name="radio"
                value="1"
                checked={beverage === "1"}
                onChange={this.onChange}
              />
              <RadioButton
                label="Latte"
                name="radio"
                value="2"
                checked={beverage === "2"}
                onChange={this.onChange}
              />
              <RadioButton
                label="Macchiato"
                name="radio"
                value="3"
                checked={beverage === "3"}
                onChange={this.onChange}
              />
              </Box>
              <Box style={submit} align="center" direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="submit" label="Submit" primary />
              </Box>
              </Form>
            </Box>
          </Grommet>
        );
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
