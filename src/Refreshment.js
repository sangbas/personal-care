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
            <Text textAlign="center" style={{color:"#fff",margin:50,fontFamily:"Nivea",fontSize:50}}>
                Refreshment Area
            </Text>
            <Image
                fit="contain"
                src={`https://chart.googleapis.com/chart?chl=/order&cht=qr&chs=400x400`}
            />
          </Box>
          </div>
          
        </div>
        </Grommet>
    }
}
export default ExtraWhite
