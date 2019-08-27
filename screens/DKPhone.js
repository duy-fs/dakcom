import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body,} from "native-base";
import MainStyle from '../styles/MainStyle.js';
// import DKname from './screens/DKname';

export default class DKPhone extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('DKnameScreen');
    }
    _onSubmit(){
        this.props.navigation.navigate('');
    }
    render(){
        const {navigation} = this.props;
        return(
            // <Navigator
            // renderScene={this.renderScene}
            //  />
           <View style={MainStyle.DKPhone}>
               <View style={MainStyle.Header_DKPhone}>
                   <View style={MainStyle.aHeader_DKPhone}>
                       <TouchableOpacity onPress={()=>this._onSubmit()}>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKPhone} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_DKPhone}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_DKPhone}
                    source={require('./../assets/Img_dangky.png')} />
               </View>
               <Container style={MainStyle.Container_DKPhone}>
                   <View style={MainStyle.Text_DKPhone}>
                       <Text style={MainStyle.aText_DKPhone}>NHẬP SỐ DI ĐỘNG</Text>
                   </View>
                   <View style={MainStyle.Import_DKPhone}>
                       <View style={MainStyle.aImport_DKPhone}>
                           <Text style={MainStyle.TextImport_DKPhone}>
                               (+84) Vietnam
                           </Text>
                           <TouchableOpacity>
                                <Icon type="AntDesign" name="down" style={MainStyle.IconButton_DKPhone} />
                           </TouchableOpacity>
                       </View>
                       <View style={MainStyle.bImport_DKPhone}>
                           <TextInput
                           placeholder='Số điện thoại'
                           placeholderTextColor='#BBBBBB'
                           returnKeyType='done'
                            />
                       </View>
                   </View>
                   <TouchableOpacity
                    onPress={()=>this.onSubmit()}
                    style={{flex:2}} 
                   >
                       <View style={MainStyle.Button_DKPhone}>
                           <Text style={MainStyle.TextButton_DKPhone}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}