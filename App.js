import React from 'react';
import { DakcomGo } from './Router';
import { createAppContainer} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
//import { StyleSheet, Text, View } from 'react-native';
//import Home from './screens/Home.js';
export default createAppContainer(DakcomGo);

// export default class App extends React.Component {
//   render(){
//     return(
//         <Home/>
//     )
//   }
// }