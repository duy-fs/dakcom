import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class Experience extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('DKPassScreen');
    }
    _onSubmit(){
        this.props.navigation.navigate('DKNationScreen');
    }
    render(){
        const {navigation} = this.props;
        return(
           <View style={MainStyle.Experience}>
               <View style={MainStyle.Header_Experience}>
                   <View style={MainStyle.aHeader_Experience}>
                       <TouchableOpacity onPress={()=>this._onSubmit()}>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_Experience} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_Experience}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_Experience}
                    source={require('./../assets/Img_experience.png')} />
               </View>
               <Container style={MainStyle.Container_Experience}>
                   <View style={MainStyle.Text_Experience}>
                       <Text style={MainStyle.aText_Experience}>KINH NGHIỆM LÀM VIỆC</Text>
                       <Text style={MainStyle.bText_Experience}>Nhập kinh nghiệm làm việc, các công trình</Text>
                       <Text style={MainStyle.bText_Experience}>đã thực hiện của bạn</Text>
                   </View>
                   <View style={MainStyle.Import_Experience}>
                   <View style={MainStyle.aImport_Experience}>
                           <TextInput
                           placeholder='Kinh nghiệm làm việc'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='next'
                            />
                       </View>
                       <View style={MainStyle.bImport_Experience}>
                           <TextInput
                           placeholder='Công trình đã làm'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='done'
                            />
                       </View>
                   </View>
                   <TouchableOpacity 
                   onPress={()=>this.onSubmit()}
                   style={{flex:3}}>
                       <View style={MainStyle.Button_Experience}>
                           <Text style={MainStyle.TextButton_Experience}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}