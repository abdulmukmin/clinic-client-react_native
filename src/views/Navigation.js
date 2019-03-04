import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SearchPage from './Search';
import RegistrationForm from './NewPatient';
import ProfileScreen from './Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigation = createBottomTabNavigator({
  'Reservation': SearchPage,
  'New Patient': RegistrationForm,
  'My Profile': ProfileScreen,
},{
  defaultNavigationOptions: ({navigation})=> ({
    tabBarIcon: ()=> {
      const { routeName } = navigation.state;
      let IconMaterialCommunityIcons = MaterialCommunityIcons;
      let iconSize;
      let iconName;
      if (routeName === 'Reservation') {
        iconName='account-search';
        iconSize=50;
      } else if (routeName === 'New Patient') {
        iconName='account-plus';
        iconSize=50;
      } else if (routeName === 'My Profile') {
        iconName='account-card-details';
        iconSize=50;
      }
      return <IconMaterialCommunityIcons name={iconName} size={iconSize} style={{marginBottom: 10}} />
    }
  }),
  tabBarOptions: {
    showLabel: true
  }
})

export default createAppContainer(TabNavigation);