import React from 'react'
import {
    Image,
    Grommet,
    Box,
    Text
} from "grommet";
import { grommet } from "grommet/themes";

class Home extends React.Component {
  render() {
    return <Grommet full theme={grommet}>
            <Image
                fit="cover"
                src="https://chart.googleapis.com/chart?chl=Hello+world&cht=qr&chs=100x100"
            />
            <Text>Hi, John</Text>
            </Grommet>
  }
}
export default Home
