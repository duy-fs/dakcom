import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class DKDevice extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('DKNationScreen');
    }
    render(){
        const {navigation} = this.props;
        return(
           <View style={MainStyle.DKDevice}>
               <View style={MainStyle.Header_DKDevice}>
                   <View style={MainStyle.aHeader_DKDevice}>
                       <TouchableOpacity>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKPhone} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_DKDevice}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_DKDevice}
                    source={require('./../assets/Img_device.png')} />
               </View>
               <Container style={MainStyle.Container_DKDevice}>
                   <View style={MainStyle.Text_DKDevice}>
                       <Text style={MainStyle.aText_DKDevice}>THIẾT BỊ CỦA BẠN</Text>
                   </View>
                   <View style={MainStyle.Import_DKDevice}>
                        <View style={MainStyle.aImport_DKDevice}>
                           <TextInput
                           placeholder='Loại máy sử dụng'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='done'
                            />
                       </View>
                       <View style={MainStyle.bImport_DKDevice}>
                           <Text style={{color:'#BBBBBB'}}>
                                Giấy chứng nhận
                            </Text>
                            <TouchableOpacity>
                                 <Icon type="FontAwesome" name="camera" style={MainStyle.Icon_camera} />
                            </TouchableOpacity>
                       </View>
                   </View>
                   <TouchableOpacity
                    onPress={()=>this.onSubmit()}
                    style={{flex:2}}>
                       <View style={MainStyle.Button_DKDevice}>
                           <Text style={MainStyle.TextButton_DKDevice}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}