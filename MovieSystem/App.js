import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';


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
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  // componentDidMount = () => {
  //   const MovieList = firebase.database().ref('item');
  //   MovieList.on("value", datasnap => {
  //     console.log(datasnap.val());
  //   })
  // }
const createWatchstack=()=>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen  name='Watch' component={Watch}/>
  </Stack.Navigator>
const createWatchMoviestack = () =>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Movies' component={Movies} />
    <Stack.Screen name='WatchMovie' component={Watch} />
  </Stack.Navigator>
  const createWatchTvstack = () =>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tv' component={TvShows} />
      <Stack.Screen name='WatchTv' component={Watch} />
  </Stack.Navigator>
  const createSearchWatchstack = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='WatchSearch' component={Watch} />
    </Stack.Navigator>

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
      children={createWatchstack} 
      options={{
        tabBarLabel: '▲',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='home' color={color}  size={25} />
        )
      }}
      />
      <Tab.Screen 
      name="Movies" 
      children={createWatchMoviestack} 
      options={{
        tabBarLabel: '▲',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='movie' color={color} size={25} />
        )
      }}
      />
      <Tab.Screen
        name="Tv Shows"
        children={createWatchTvstack}
        options={{
          tabBarLabel: '▲',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='video-vintage' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        children={createSearchWatchstack}
        options={{
          tabBarLabel: '▲',
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
