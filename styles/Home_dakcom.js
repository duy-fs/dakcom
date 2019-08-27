import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    Home_dakcom:{
        flex:1
    },
    headerHome_dakcom:{
        justifyContent:'center',
        flex:2,
        backgroundColor:'#F42535',
        alignItems:'center'
    },
    Text_headerHome_dakcom:{
        fontSize:18,
        color:'#ffffff',
    },
    Container_Home_dakcom:{
        flex:16,
    },
    a_Container_Home_dakcom:{
        flex:1,
        backgroundColor:'#F42535',
        flexDirection:'row',
    },
    location_Home:{
        alignItems:'center',
        flex:1,
    },
    Text_a_Container_Home_dakcom:{
        color:'#f78086',
        fontSize:14
    },
    Icon_a_Container_Home_dakcom:{
        paddingBottom:5,
        color:'#f78086',
        fontSize:20,
    },
    Phonebook_home:{
        alignItems:'center',
        flex:1,
    },
    // boder_a_Container_Home_dakcom:{
    //     height:10,
    //     width:10,
    // }
    b_Container_Home_dakcom:{
        flex:8
    },
    c_Container_Home_dakcom:{
        justifyContent:'center',
        flex:1,
        alignItems:'center',
    },
    show_list_home:{
        paddingBottom:10,
        backgroundColor:'#ffffff',
    },
    Text_show_list_home:{
        color:'#888888',
        fontSize:18
    },
    border_show_list_home:{
        height:2,
        width:50,
        backgroundColor:'#888888'
    },
    footer:{
        backgroundColor:'#f42535',
        flex:2,
        flexDirection:'row',
    },
    a_footer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#f42535'
    },
    IMG_homedakcome:{
        width: width,
        height:width*1109/720

    },
    Text_footer:{
        paddingTop:3,
        color:'#ffa1a8',
        fontSize:12
    }

})