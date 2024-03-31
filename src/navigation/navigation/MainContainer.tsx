import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import BasketContainer from "./BasketContainer";
import UserProfileContainer from "./UserProfileContainer";
import GoodsContainer from "./GoodsContainer";
import { gray, orange, purple } from "@tamagui/themes";

const mainWindow = 'Главная';
const userProfileWindow = 'Профиль';
const basketWindow = 'Корзина'

const Tab = createBottomTabNavigator();

  export default function MainContainer() {
  
  
    return (
        
            <Tab.Navigator
            initialRouteName={mainWindow}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === mainWindow){
                        iconName = 'home'
                        color = focused ? orange.orange7 : gray.gray5
                        
                    } else if (rn === basketWindow) {
                        iconName = 'basket'
                        color = focused ? orange.orange7 : gray.gray5
                        
                    } else if (rn === userProfileWindow) {
                        iconName = 'person' 
                        color = focused ? orange.orange7 : gray.gray5
                        
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    backgroundColor: '#3f4854',
                    
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: '#ffffff',
                }, 
            })}>

                <Tab.Screen name={mainWindow} component={GoodsContainer}/>
                <Tab.Screen name={basketWindow} component={BasketContainer}/>
                <Tab.Screen name={userProfileWindow} component={UserProfileContainer}/>

            </Tab.Navigator>
        
    )
  }