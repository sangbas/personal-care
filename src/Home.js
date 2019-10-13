import React from 'react'
import {
    Image,
    Grommet,
    Box,
    Button,
    Text
} from "grommet";
import { grommet } from "grommet/themes";
import niveaSmall from './assets/nivea_small.png';
import niveaMen from './assets/nivea_men.png';
import { Link } from "react-router-dom";

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.setState({userId:''})
    this.setState({name:''})

  }

  componentDidMount() {
    this.setState({userId: localStorage.getItem('userId')})
    this.setState({name: localStorage.getItem('name')})

    // let id = sessionStorage.getItem('userId');
    // let name = sessionStorage.getItem('name')
  }

  goToScan = () => {
    window.open("/scan", "_top");
  }

  render() {
    return <Grommet full theme={grommet}>
    <div className='bg'>
    <div>
      <Box fill justify="center" direction="row">
        <Image src={niveaSmall} height={100} style={{margin:20}}/>
        <Image src={niveaMen} height={100} style={{margin:20}} />
      </Box>
      </div>
      <Box align="center" justify="center" pad="large">
        <Image
            fit="contain"
            src={`https://chart.googleapis.com/chart?chl=${localStorage.getItem('name')}&cht=qr&chs=200x200`}
        />
      <Text textAlign="center" style={{color:"#fff",margin:20,fontFamily:"Nivea"}}>Hi, {localStorage.getItem('name')}</Text>
      <Text textAlign="center" style={{color:"#fff",fontFamily:"Nivea", marginBottom:50}}>Please scan QR Code to start experience</Text>

      <Button type="submit" label="Scan QR" onClick={this.goToScan} primary />
      </Box>
      
    </div>
  </Grommet>
  }
}
export default Home
