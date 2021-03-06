import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    DKPass:{
        flex:1,
        backgroundColor:'#F0F0F0'
    },
    Header_DKPass:{
        alignItems:'center',
    },
    aHeader_DKPass:{
        flex:2,
        paddingTop:20,
        position:'absolute',
        zIndex:1,
        flexDirection:'row',
    },
    Textheader_DKPass:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
    },
    IconLeft_DKPass:{
        flex:1,
        paddingLeft:10,
        fontSize:22,
        color:'#ffffff'
    },
    Container_DKPass:{
        alignItems:'center',
        backgroundColor:'#F0F0F0'
    },
    Text_DKPass:{
        alignItems:'center',
        flex:2,
        justifyContent:'center'
    },
    aText_DKPass:{
        paddingBottom:10,
        fontWeight:'bold',
        color:'#111111',
        fontSize:16,
    },
    bText_DKPass:{
        color:'#111111',
        fontSize:14,
    },
    Import_DKPass:{
        paddingTop:10,
        flex:2
    },
    aImport_DKPass:{
        marginBottom:20,
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        height:45,
        width:280,
        borderRadius:25,
    },
    bImport_DKPass:{
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        height:45,
        width:280,
        borderRadius:25,
    },
    TextImport_DKPass:{
        paddingLeft:60,
        paddingRight:45,
        fontSize:16,
        color:'#111111'
    },
    IconButton_DKPass:{
        color:'#111111',
        fontSize:16
    },
    Button_DKPass:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:150,
        borderRadius:20,
        backgroundColor:'#F42535'
    },
    TextButton_DKPass:{
        fontSize:16,
        color:'#ffffff'
    },
    Img_DKPass:{
        width: width,
        height: width*429/720
    },
})