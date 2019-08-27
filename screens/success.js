import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class success extends React.Component{
    render(){
        return(
           <View style={MainStyle.success}>
               <View style={MainStyle.Header_success}>
                   <View style={MainStyle.aHeader_success}>
                       <TouchableOpacity>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKPhone} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_success}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_success}
                    source={require('./../assets/Img_success.png')} />
               </View>
               <Container style={MainStyle.Container_success}>
                   <View style={MainStyle.Text_success}>
                       <Text style={MainStyle.aText_success}>CHÚC MỪNG BẠN!</Text>
                       <Text style={MainStyle.bText_success}>Tài khoản của bạn đã được tạo thành công.</Text>
                       <Text style={MainStyle.bText_success}>Bạn có thể đăng nhập và sử dụng dịch vụ</Text>
                       <Text style={MainStyle.bText_success}>của chúng tôi ngay</Text>
                   </View>
                   <TouchableOpacity style={{flex:5}}>
                       <View style={MainStyle.Button_success}>
                           <Text style={MainStyle.TextButton_success}>ĐĂNG NHẬP</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}