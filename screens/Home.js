import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class Home extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground style={MainStyle.ground_home}
                     source={require('./../assets/01-dakcom.jpg')}>
                     <View style={MainStyle.LogoHome}>
                        <Image
                        style={MainStyle.Logo_dakcom}
                         source={require('./../assets/logo_dakcom.png')} />
                     </View>
                     <View style={MainStyle.TextHome}>
                         <Icon type="Entypo" name="creative-commons-public-domain" style={MainStyle.Icon_texthome} />
                         <Text style={MainStyle.Text2018}>2018 Danhkiet.com</Text>
                     </View>
                </ImageBackground>
            </View>
            
        );
    }
}