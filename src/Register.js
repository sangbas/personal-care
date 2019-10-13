import React from 'react'
import {
    Box,
    Button,
    Image,
    Grommet,
    Form,
    FormField,
    Text,
} from "grommet";
import { Link } from 'react-router-dom';
import { grommet } from "grommet/themes";
import niveaSmall from './assets/nivea_small.png';
import niveaMen from './assets/nivea_men.png';
import {API_URL} from './Const';

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  componentDidMount() {
    if(localStorage.getItem('name') != null) {
      window.open("/home", "_top");
    }
  }

  handleSubmit(value) {
      // event.preventDefault();
      // const data = new FormData(event.target);
      console.log(value)
      var AWS = require('aws-sdk');
      var uuid = require('uuid');
      fetch(API_URL+'/register', {
        method: 'POST',   
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value),
        
      }).then(function (response) {
          // this.setState({ user_id: response.id});
          if (response.ok) {
            response.json().then(json => {
              localStorage.setItem('userId', json.id);
              localStorage.setItem('name', value.name);
              window.open("/home", "_top");
            });
          }
          
          
          // return response.json(); //response.json() is resolving its promise. It waits for the body to load
      }).then(function (responseData) {
          //Do your logic
      });
    }
  
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
    
    
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} width="200px" height="200px" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return <Grommet full theme={grommet}>
      <div className='bg'>
      <div>
      <Box fill justify="center" direction="row">
        <Image src={niveaSmall} height={100} style={{margin:20}}/>
        <Image src={niveaMen} height={100} style={{margin:20}} />
      </Box>
      </div>
      <div>
      <Box fill width="medium" justify="center" align="center" >
        <Text style={{color:"#fff", marginTop:20, marginBottom: 20,fontFamily:"Nivea"}}>YOUR NAME</Text>
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => this.handleSubmit(value)}
        >
          <FormField
            name="name"
            required
            style={{backgroundColor:"#fff"}}
            validate={{ regexp: /^[a-z]/i }}
          />
          {/* <input className="fileInput" 
            type="file" 
            style={{color:"#fff",fontFamily:"Nivea"}}
            onChange={(e)=>this._handleImageChange(e)} />
          
          <div className="imgPreview">
            {$imagePreview}
          </div> */}
          
          <Box direction="row" align="center" justify="center" style={{marginTop:20}}>
            <Button type="submit" label="Submit" primary />
          </Box>
        </Form>
      </Box>
      </div>
      
    </div>
  </Grommet>
    
    
  }
}
export default Register
