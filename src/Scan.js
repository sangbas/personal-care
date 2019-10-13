import React from 'react'
import {
    Image,
    Grommet,
    Box,
    Button,
    Text
} from "grommet";
import QrReader from 'react-qr-reader'
import { grommet } from "grommet/themes";
import niveaSmall from './assets/nivea_small.png';
import niveaMen from './assets/nivea_men.png';


class Scan extends React.Component {

  constructor(props) {
    super(props)
    this.setState({userId:''})
    this.setState({name:''})

  }

  backToPrevious = () => {
    window.history.back();
  }

  handleScan = data => {
    if (data) {
      console.log(data);
      window.open(data, "_top");
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
        <Image src={niveaSmall} height={100} style={{margin:20}}/>
        <Image src={niveaMen} height={100} style={{margin:20}} />
      </Box>
      </div>
      <Box align="center" justify="center" pad="large">
      <QrReader
                delay={3000}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%'}}
            />
      </Box>
      <Button type="submit" label="< Back" primary style={{marginLeft:20}} onClick={this.backToPrevious} />

    </div>
  </Grommet>
  }
}
export default Scan
