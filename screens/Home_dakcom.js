import React from 'react';
import { 
    View, StyleSheet,Text,TextInput,TouchableOpacity,Alert,Image,ImageBackground,ScrollView,TouchableHighlight
} from 'react-native';
import { Container, Content, Icon,CheckBox,ListItem,Body} from "native-base";
import MainStyle from '../styles/MainStyle.js';

export default class Experience extends React.Component{
    static navigationOptions = ({ navigation }) => ({
		header: null,
    });
    onSubmit(){
        this.props.navigation.navigate('');
    }
    render(){
        const {navigation} = this.props;
        return(
           <View style={MainStyle.Home_dakcom}>
               <View style={MainStyle.headerHome_dakcom}>
                     <Text style={MainStyle.Text_headerHome_dakcom}>Danh Kiệt</Text>
               </View>
               <View style={MainStyle.Container_Home_dakcom}>
                    <View style={MainStyle.a_Container_Home_dakcom}>
                        <TouchableOpacity style={MainStyle.location_Home}>
                            <View style={MainStyle.location_Home}>
                                <Icon type="Feather" name="map-pin" style={MainStyle.Icon_a_Container_Home_dakcom} />
                                <Text style={MainStyle.Text_a_Container_Home_dakcom}>Vị trí nhà cung cấp</Text>
                            </View>
                             <TouchableHighlight
                                underlayColor = '#ffffff' 
                                onPress={this._onPressButton}
                                >
                             </TouchableHighlight>
                        </TouchableOpacity>
                        <TouchableOpacity  style={MainStyle.Phonebook_home}>
                            <View style={MainStyle.Phonebook_home}>
                                <Icon type="SimpleLineIcons" name="book-open" style={MainStyle.Icon_a_Container_Home_dakcom} />
                                <Text style={MainStyle.Text_a_Container_Home_dakcom}>Danh bạ nhà cung cấp</Text>
                                {/* <TouchableHighlight
                                underlayColor = '#ffffff' 
                                style={MainStyle.boder_a_Container_Home_dakcom}
                                onPress={this._onPressButton}
                                >
                                </TouchableHighlight> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View  style={MainStyle.b_Container_Home_dakcom}>
                        <ScrollView>
                            <View>
                                <Image
                                style={MainStyle.Img_Dkname}
                                source={require('./../assets/IMG_homedakcom.png')} style={MainStyle.IMG_homedakcome} />
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={MainStyle.c_Container_Home_dakcom}>
                            <View style={MainStyle.show_list_home}>
                                <Text style={MainStyle.Text_show_list_home}>
                                    Hiện thị danh sách
                                </Text>
                            </View>
                        <View style={MainStyle.border_show_list_home}></View>
                    </TouchableOpacity>
               </View>
               <View style={MainStyle.footer}>
                        <TouchableOpacity style={MainStyle.a_footer} onPress={() => navigation.navigate('')}>
                            <View style={MainStyle.b_footer} >
                                <Icon type="Entypo" name="home" style={{color:'#ffa1a8'}} />
                            </View>
                            <Text style={MainStyle.Text_footer}>TRANG CHỦ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.a_footer} onPress={() => navigation.navigate('')}>
                            <View  style={MainStyle.b_footer}>
                                <Icon type="AntDesign" name="search1" style={{color:'#ffa1a8'}} />
                            </View>
                            <Text  style={MainStyle.Text_footer}>TÌM KIẾM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.a_footer} onPress={() => navigation.navigate('')}>
                            <View  style={MainStyle.b_footer}>
                                <Icon type="FontAwesome" name="phone" style={{color:'#ffa1a8'}} />
                            </View>
                            <Text  style={MainStyle.Text_footer}>DS ĐÃ GỌI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.a_footer} onPress={() => navigation.navigate('CommentScreen')}>
                            <View style={MainStyle.b_footer}>
                                <Icon type="SimpleLineIcons" name="people" style={{color:'#ffa1a8'}} />
                            </View>
                            <Text  style={MainStyle.Text_footer}>TK CỦA TÔI</Text>
                        </TouchableOpacity>
                </View>
           </View>
        );
    }
}