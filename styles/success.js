import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    success:{
        flex:1,
        backgroundColor:'#F0F0F0'
    },
    Header_success:{
        alignItems:'center',
    },
    aHeader_success:{
        flex:2,
        paddingTop:20,
        position:'absolute',
        zIndex:1,
        flexDirection:'row',
    },
    Textheader_success:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
    },
    IconLeft_success:{
        flex:1,
        paddingLeft:10,
        fontSize:22,
        color:'#ffffff'
    },
    Container_success:{
        alignItems:'center',
        backgroundColor:'#F0F0F0'
    },
    Text_success:{
        alignItems:'center',
        flex:3,
        justifyContent:'center'
    },
    aText_success:{
        marginBottom:10,
        fontWeight:'bold',
        color:'#111111',
        fontSize:16,
    },
    bText_success:{
        color:'#111111',
        fontSize:14,
    },
    
    IconButton_success:{
        color:'#111111',
        fontSize:16
    },
    Button_success:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:150,
        borderRadius:20,
        backgroundColor:'#F42535'
    },
    TextButton_success:{
        fontSize:16,
        color:'#ffffff'
    },
    Img_success:{
        width: width,
        height: width*429/720
    },
})