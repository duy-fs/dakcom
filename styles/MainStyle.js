import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import Home from './Home';
import Login from './Login';
import DKPhone from './DKPhone';
import DKname from './DKname';
import DKDevice from './DKDevice';
import DKNation from './DKNation';
import Experience from './Experience';
import DKPass from './DKPass';
import success from './success';
import ForgotPass from './ForgotPass';
import Home_dakcom from './Home_dakcom';
export default{
    ...Home,
    ...Login,
    ...DKPhone,
    ...DKname,
    ...DKDevice,
    ...DKNation,
    ...Experience,
    ...DKPass,
    ...success,
    ...ForgotPass,
    ...Home_dakcom,

}