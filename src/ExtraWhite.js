import React from 'react'
import {
    Image,
    Grommet,
    Box,
    Text
} from "grommet";
import QrReader from 'react-qr-reader'
import { grommet } from "grommet/themes";
import niveaSmall from './assets/nivea_small.png';
import niveaMen from './assets/nivea_men.png';
import Artyom from './artyom.js';

class ExtraWhite extends React.Component {
    state = {
        result: ''
    }

        handleScan = data => {
        if (data) {
            const Jarvis = new Artyom();
            this.setState({
                enjoy:'Please enjoy the extra white experience room',
                result: 'Welcome, ' + data
            })
            Jarvis.say("Hi, "+ data );
            Jarvis.say("Please enjoy the extra white experience room")
            // window.open(data, "_top");
        }
        }
        handleError = err => {
        console.error(err)
    }
    render() {
        return <Grommet full theme={grommet}>
        <div className='bg'>
        <div>
          <Box fill justify="center" direction="row">
            <Image src={niveaSmall} height={200} style={{margin:20}}/>
            <Image src={niveaMen} height={200} style={{margin:20}} />
          </Box>
          
          </div>
          <div>
          <Box align="center" justify="center" pad="large">
          <QrReader
                delay={1500}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '50%'}}
            />
            <Text textAlign="center" style={{color:"#fff",marginTop:200,fontFamily:"Nivea",fontSize:40}}>
                {this.state.result}
            </Text>
            <Text textAlign="center" style={{color:"#fff",marginTop:40,fontFamily:"Nivea",fontSize:40}}>
                {this.state.enjoy}
            </Text>
          
          </Box>
          </div>
          
        </div>
        </Grommet>
    }
}
export default ExtraWhite
