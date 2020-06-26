import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// import * as firebase from 'firebase';
// import firebaseConfig from "./config.js";




//screens
import Home from './screens/home'
import Movies from './screens/movies'
import Recents from './screens/recents'
import Search from './screens/search'
import TvShows from './screens/tvshows';
import Watch from './screens/watch';


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

const Tab = createMaterialBottomTabNavigator();
const App = () => {
  // componentDidMount = () => {
  //   const MovieList = firebase.database().ref('item');
  //   MovieList.on("value", datasnap => {
  //     console.log(datasnap.val());
  //   })
  // }
  return (
    <NavigationContainer>
       <Tab.Navigator
       initialRoute="Home"
        activeColor="#9b42f5"
      inactiveColor="#dedede"
       style={{backgroundColor: '#000'}}
       barStyle={{backgroundColor: '#0f0f0f'}}
      
       >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='home' color={color} size={25} />
        )
      }}
      />
      <Tab.Screen 
      name="Movies" 
      component={Movies} 
      options={{
        tabBarLabel: 'Movies',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='movie' color={color} size={25} />
        )
      }}
      />
      <Tab.Screen
        name="Tv Shows"
        component={TvShows}
        options={{
          tabBarLabel: 'Tv Shows',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='video-vintage' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen 
      name="Recents" 
      component={Watch} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='account' color={color} size={25} />
        )
      }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='magnify' color={color} size={25} />
          )
        }}
      />

    </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;
