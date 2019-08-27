import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body,Navigation} from "native-base";
import MainStyle from '../styles/MainStyle.js';


export default class DKNation extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('ExperienceScreen');
    }
    _onSubmit(){
        this.props.navigation.navigate('DKDeviceScreen');
    }
    render(){
        const {navigation} = this.props;
        return(
           <View style={MainStyle.DKNation}>
               <View style={MainStyle.Header_DKNation}>
                   <View style={MainStyle.aHeader_DKNation}>
                       <TouchableOpacity  onPress={()=>this._onSubmit()}>
                             <Icon type="AntDesign" name="arrowleft" style={MainStyle.IconLeft_DKNation} />
                       </TouchableOpacity>
                       <View style={{flex:8,alignItems:'center'}}>
                           <Text style={MainStyle.Textheader_DKNation}>Tạo tài khoản</Text>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <Image
                   style={MainStyle.Img_DKNation}
                    source={require('./../assets/Img_nation.png')} />
               </View>
               <Container style={MainStyle.Container_DKNation}>
                   <View style={MainStyle.Text_DKNation}>
                       <Text style={MainStyle.aText_DKNation}>QUỐC GIA, THÀNH PHỐ</Text>
                   </View>
                   <View style={MainStyle.Import_DKNation}>
                       <View style={MainStyle.aImport_DKNation}>
                            <Icon type="Entypo" name="globe" style={MainStyle.IconGlobe_DKNation} />
                           <Text style={MainStyle.aTextImport_DKNation}>
                               Chọn quốc gia
                           </Text>
                           <TouchableOpacity>
                                <Icon type="AntDesign" name="down" style={MainStyle.IconButton_DKNation} />
                           </TouchableOpacity>
                       </View>
                       <View style={MainStyle.aImport_DKNation}>
                           <Icon type="FontAwesome5" name="city" style={MainStyle.IconCity_DKNation} />
                           <Text style={MainStyle.bTextImport_DKNation}>
                               Thành phố
                           </Text>
                           <TouchableOpacity>
                                <Icon type="AntDesign" name="down" style={MainStyle.IconButton_DKNation} />
                           </TouchableOpacity>
                       </View>
                   </View>
                   <TouchableOpacity
                   onPress={()=>this.onSubmit()}
                    style={{flex:3}} 
                   >
                       <View style={MainStyle.Button_DKNation}>
                           <Text style={MainStyle.TextButton_DKNation}>TIẾP TỤC</Text>
                       </View>
                   </TouchableOpacity>
                   
               </Container>
           </View>
        );
    }
}