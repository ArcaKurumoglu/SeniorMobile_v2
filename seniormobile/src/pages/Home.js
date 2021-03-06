import * as React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Left, Body, Right, Button,Title} from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomePage from '../pages/HomePage';
import Courses from '../pages/Courses';
import Announcements from '../pages/Announcements';
import Reservations from '../pages/Reservations';
import More from '../pages/More';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack=createStackNavigator();
const Drawer =createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerRoutes (){
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage}/>
            <Drawer.Screen name="Courses" component={Courses} />
            <Drawer.Screen name="Reservations" component={Reservations} />
            <Drawer.Screen name="Announcements" component={Announcements} />
            <Drawer.Screen name="More" component={More} />
        </Drawer.Navigator>
    );
}


function TabRoutes() {
    return (
       
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                  } else if (route.name === 'Course') {
                    iconName = focused ? 'book' : 'book';
                  }
                  else if (route.name === 'Reservation') {
                    iconName = focused ? 'calendar-check' : 'calendar-check';
                  }
                  else if (route.name === 'Announcement') {
                    iconName = focused ? 'bullhorn' : 'bullhorn';
                  }
                  else if (route.name === 'More') {
                    iconName = focused ? 'comment-dots' : 'comment-dots';
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#D3252A',
                inactiveTintColor: '#0F559D',
              }}
            >
                <Tab.Screen name="Home" component={HomePage}/>
                <Tab.Screen name="Course" component={Courses} />
                <Tab.Screen name="Reservation" component={Reservations} />
                <Tab.Screen name="Announcement" component={Announcements} />
                <Tab.Screen name="More" component={More} />
            </Tab.Navigator>
       
    );
}

function App() {
    return (
        <NavigationContainer>
         <TabRoutes/>
        </NavigationContainer>
    );
}

const styles= StyleSheet.create ({});

export default App;