import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    DKPhone:{
        flex:1,
        backgroundColor:'#F0F0F0'
    },
    Header_DKPhone:{
        alignItems:'center',
    },
    aHeader_DKPhone:{
        flex:2,
        paddingTop:20,
        position:'absolute',
        zIndex:1,
        flexDirection:'row',
    },
    Textheader_DKPhone:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
    },
    IconLeft_DKPhone:{
        flex:1,
        paddingLeft:10,
        fontSize:22,
        color:'#ffffff'
    },
    Container_DKPhone:{
        alignItems:'center',
        backgroundColor:'#F0F0F0'
    },
    Text_DKPhone:{
        justifyContent:'center',
        flex:1
    },
    aText_DKPhone:{
        fontWeight:'bold',
        color:'#111111',
        fontSize:16,
    },
    Import_DKPhone:{
        paddingTop:10,
        flex:2
    },
    aImport_DKPhone:{
        flexDirection:'row',
        marginBottom:20,
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        height:45,
        width:280,
        borderRadius:25,
    },
    bImport_DKPhone:{
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        height:45,
        width:280,
        borderRadius:25,
    },
    TextImport_DKPhone:{
        paddingLeft:60,
        paddingRight:45,
        fontSize:16,
        color:'#111111'
    },
    IconButton_DKPhone:{
        color:'#111111',
        fontSize:16
    },
    Button_DKPhone:{
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:150,
        borderRadius:20,
        backgroundColor:'#F42535'
    },
    TextButton_DKPhone:{
        fontSize:16,
        color:'#ffffff'
    },
    Img_DKPhone:{
        width: width,
        height: width*429/720
    },
})