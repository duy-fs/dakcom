import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class ForgotPass extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    _onSubmit(){
        this.props.navigation.navigate('ExperienceScreen');
    }
    render(){
        return(
           <View style={MainStyle.ForgotPass}>
               <View style={MainStyle.Header_ForgotPass}>
                   <View style={MainStyle.aHeader_ForgotPass}>
                       <TouchableOpacity onPress={()=>this._onSubmit()}>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_ForgotPass} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_ForgotPass}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
               </View>
               <Container style={MainStyle.Container_ForgotPass}>
                   <View style={{flex:2}}>
                       <Image
                        style={MainStyle.Img_ForgotPass}
                        source={require('./../assets/Img_ForgotPass.png')} />
                   </View>
                   <View style={MainStyle.Text_ForgotPass}>
                       <Text style={MainStyle.aText_ForgotPass}>Hãy điền email đăng ký tài khoản của bạn và</Text>
                       <Text style={MainStyle.aText_ForgotPass}>ấn "Quên mật khẩu". Chúng tôi sẽ gửi</Text>
                       <Text style={MainStyle.aText_ForgotPass}>email tạo lại mật khẩu cho bạn</Text>
                   </View>
                   <View style={MainStyle.Import_ForgotPass}>
                         <View style={MainStyle.aImport_ForgotPass}>
                           <TextInput
                           placeholder='Email đăng ký tài khoản'
                           placeholderTextColor='#ffffff'
                           returnKeyType='done'
                           
                            />
                       </View>
                   </View>
                   <TouchableOpacity style={{flex:3}}>
                       <View style={MainStyle.Button_ForgotPass}>
                           <Text style={MainStyle.TextButton_ForgotPass}>Quên mật khẩu</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}