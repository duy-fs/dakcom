import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class DKPass extends React.Component{
    render(){
        return(
           <View style={MainStyle.DKPass}>
               <View style={MainStyle.Header_DKPass}>
                   <View style={MainStyle.aHeader_DKPass}>
                       <TouchableOpacity>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKPass} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_DKPass}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_DKPass}
                    source={require('./../assets/Img_pass.png')} />
               </View>
               <Container style={MainStyle.Container_DKPass}>
                   <View style={MainStyle.Text_DKPass}>
                       <Text style={MainStyle.aText_DKPass}>TẠO MẬT KHẨU CỦA BẠN</Text>
                       <Text style={MainStyle.bText_DKPass}>Hãy nhớ mật khẩu này. Mật khẩu này giúp ngăn</Text>
                       <Text style={MainStyle.bText_DKPass}>ngừa người lạ sử dụng tài khoản của bạn</Text>
                   </View>
                   <View style={MainStyle.Import_DKPass}>
                   <View style={MainStyle.aImport_DKPass}>
                           <TextInput
                           placeholder='Mật khẩu'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='next'
                            />
                       </View>
                       <View style={MainStyle.bImport_DKPass}>
                           <TextInput
                           placeholder='Nhập lại mật khẩu'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='done'
                            />
                       </View>
                   </View>
                   <TouchableOpacity style={{flex:2}}>
                       <View style={MainStyle.Button_DKPass}>
                           <Text style={MainStyle.TextButton_DKPass}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}