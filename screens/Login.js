import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground,TouchableHighlight,
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Button,Body,} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonText: 'Tiếp tục',
            user: '',
            pass: ''
        }
    }
    onSubmit(){
        var {user,pass} = this.state;
        this.setState = {buttonText:'Đang đăng nhập.....'}
        this.props.navigation.navigate('Screen');
    }
    _onPressButton=() =>{}
    render(){
        return(
            <View style={MainStyle.Login}>
                <View style={{flexDirection:'row',flex:1,paddingTop:20}}>
                     <TouchableOpacity>
                        <Icon type="AntDesign" name="arrowleft" style={MainStyle.Iconleft} />
                     </TouchableOpacity>
                     <View style={{alignItems:'center',flex:4}}>
                         <Text style={MainStyle.LoginText_a}>Đăng nhập</Text>
                     </View>
                </View>
                <View style={MainStyle.Login_Img}> 
                    <Image
                     style={{width:150,height:150}}
                     source={require('./../assets/logo_login.png')} />
                </View>
                <View style={{flex:3}}>
                    <View style={MainStyle.LoginText}>
                        <Icon type="FontAwesome" name="phone" style={MainStyle.IconPhone} />
                    <View>
                            <TextInput style={MainStyle.LoginText_b}
                            onChangeText={(user)=>this.setState({user})} onSubmitEditing={()=>{this.loginPass.focus();}}
                            placeholder='Số điện thoại'
                            placeholderTextColor='#ffffff'
                            returnKeyType='next'
                            />
                    </View>
                    </View>
                    <View style={MainStyle.LoginPass}>
                        <Icon type="AntDesign" name="key" style={MainStyle.IconPhone} />    
                        <TextInput style={MainStyle.LoginText_c}
                        onChangeText={(pass)=>this.setState({pass})} onSubmitEditing = {()=>this.onSubmit()} ref={input=>{this.loginPass = input;}}
                        placeholder='Mật khẩu'
                        placeholderTextColor='#ffffff'
                        secureTextEntry={true}
                        returnKeyType='done'
                        secureTextEntry={true}
                        password={"true"}
                        
                        />
                    </View>
                </View>
                <View style={{flex:3}}>
                    <TouchableHighlight 
                    underlayColor = '#ffffff' 
                    style={MainStyle.Button_a}
                    onPress={this._onPressButton}
                    >
                        <Text style={MainStyle.LoginText_d}>
                            TIẾP TỤC
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                     underlayColor = '#ffffff' 
                     onPress={this._onPressButton}
                    style={MainStyle.Button_b}>
                        <Text style={MainStyle.LoginText_e}>
                            QUÊN MẬT KHẨU?
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}