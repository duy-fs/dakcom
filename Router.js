import React from 'react';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import DKPhone from './screens/DKPhone';
import DKname from './screens/DKname';
import DKDevice from './screens/DKDevice';
import DKNation from './screens/DKNation';
import Experience from './screens/Experience';
import DKPass from './screens/DKPass';
import success from './screens/success';
import ForgotPass from './screens/ForgotPass';
import Home_dakcom from './screens/Home_dakcom';


export const DakcomStack = createStackNavigator({


    Home_dakcomScreen: {
        screen: Home_dakcom
    },
    ForgotPassScreen: {
        screen: ForgotPass
    },
    successScreen: {
        screen: success
    },
    DKPassScreen: {
        screen: DKPass
    },
    ExperienceScreen: {
        screen: Experience
    },
    DKNationScreen: {
        screen: DKNation
    },
    DKDeviceScreen: {
        screen: DKDevice
    },
    DKnameScreen: {
        screen: DKname
    },
    DKPhoneScreen: {
        screen: DKPhone
    },
    LoginScreen: {
        screen: Login
    },
    HomeScreen: {
        screen: Home
    },
}, 
);
export const DakcomGo = createDrawerNavigator({
    Tabbar: {
        screen: DakcomStack,
    }
},{
    // drawerWidth: 300,
    // drawerPosition: 'left',
    // contentComponent: props => <Menu {...props} />
}
);
