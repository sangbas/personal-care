import React from 'react'
import {
    Box,
    Button,
    CheckBox,
    Grommet,
    Form,
    FormField,
    RadioButtonGroup,
    RangeInput,
    Select,
    TextArea
} from "grommet";
import { grommet } from "grommet/themes";
  
class Register extends React.Component {

    handleSubmit(value) {
        // event.preventDefault();
        // const data = new FormData(event.target);
        console.log(value)
        fetch('http://localhost:8080/register', {
          method: 'POST',   
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value),
        }).then(function (response) {
            this.setState({ user_id: response.id});
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            //Do your logic
        });
      }
    
  render() {
    return <Grommet full theme={grommet}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => this.handleSubmit(value)}
        >
          <FormField
            label="Name"
            name="name"
            required
            validate={{ regexp: /^[a-z]/i }}
          />
          
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
  }
}
export default Register
