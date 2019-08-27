import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    ground_home:{
        flex:1,
    },
    LogoHome:{
        flex:9,
        alignItems:'center',
        justifyContent:'center'
    },
    Logo_dakcom:{
        width:width/3,
        height: (width/3)*170/120,
    },
    TextHome:{
        flexDirection:'row',
        justifyContent:'center',
        flex:1,
        alignItems:'center',
    },
    Text2018:{
        color:'#FFFFFF'
    },
    Icon_texthome:{
        color:'#ffffff',
        marginRight:5,
        fontSize:25,
    }
})