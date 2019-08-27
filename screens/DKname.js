import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class DKname extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('DKPhoneScreen');
    }
    _onSubmit(){
        this.props.navigation.navigate('DKPhoneScreen');
    }
    render(){
        const {navigation} = this.props;
        return(
           <View style={MainStyle.Dkname}>
               <View style={MainStyle.Header_Dkname}>
                   <View style={MainStyle.aHeader_Dkname}>
                       <TouchableOpacity onPress={()=>this._onSubmit()}>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKPhone} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_Dkname}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_Dkname}
                    source={require('./../assets/Img_dkname.png')} />
               </View>
               <Container style={MainStyle.Container_Dkname}>
                   <View style={MainStyle.Text_Dkname}>
                       <Text style={MainStyle.aText_Dkname}>TÊN BẠN LÀ GÌ</Text>
                       <Text style={MainStyle.bText_Dkname}>Dùng tên thật giúp bạn bè dễ nhận ra</Text>
                       <Text style={MainStyle.bText_Dkname}> bạn hơn</Text>
                   </View>
                   <View style={MainStyle.Import_Dkname}>
                         <View style={MainStyle.aImport_Dkname}>
                           <TextInput
                           placeholder='Họ'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='next'
                            />
                       </View>
                       <View style={MainStyle.bImport_Dkname}>
                           <TextInput
                           placeholder='Tên'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='done'
                            />
                       </View>
                   </View>
                   <TouchableOpacity 
                    onPress={()=>this.onSubmit()}
                   style={{flex:2}} >
                       <View style={MainStyle.Button_Dkname}>
                           <Text style={MainStyle.TextButton_Dkname}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}