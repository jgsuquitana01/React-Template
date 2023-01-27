import React from 'react';
import { Card } from 'antd';
//import Gallery from "./Gallery";
//import {Profile} from './Gallery';
const { Meta } = Card;

//export default function App(){
 // return(
   // <Profile/>
  //);
//}
const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default App;