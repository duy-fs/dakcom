import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    ForgotPass:{
        flex:1,
        backgroundColor:'#F42535'
    },
    Header_ForgotPass:{
        flex:2,
        alignItems:'center',
    },
    aHeader_ForgotPass:{
        paddingTop:25,
        flexDirection:'row',
    },
    Textheader_ForgotPass:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
    },
    IconLeft_ForgotPass:{
        flex:1,
        paddingLeft:10,
        fontSize:22,
        color:'#ffffff'
    },
    Container_ForgotPass:{
        flex:8,
        alignItems:'center',
        backgroundColor:'#F42535'
    },
    Text_ForgotPass:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    aText_ForgotPass:{
        color:'#ffffff',
        fontSize:16,
    },
    Import_ForgotPass:{
        flex:1
    },
    aImport_ForgotPass:{
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C41E2A',
        height:45,
        width:280,
        borderRadius:25,
    },
    TextImport_ForgotPass:{
        paddingLeft:60,
        paddingRight:45,
        fontSize:16,
        color:'#ffffff'
    },
    Button_ForgotPass:{
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:150,
        borderRadius:20,
        backgroundColor:'#ffffff'
    },
    TextButton_ForgotPass:{
        fontSize:16,
        color:'#C41E2A'
    },
    Img_ForgotPass:{
        width: width/3,
        height: (width/3)
    },
})