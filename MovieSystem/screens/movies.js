import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, { useRef, useState, useEffect, Component } from 'react'
import movielist from './data.js'
// import * as firebase from 'firebase';
// import firebaseConfig from "../config.js";

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

const Movies = ({navigation}) => {
//   componentDidMount=()=>{
//    const MovieList = firebase.database().ref('abc');
//    MovieList.on("value",datasnap=>{
//      console.log(datasnap.val())
//    })
//   }


 
  return (
    <View style={{ backgroundColor: '#171717', flex: 1}}>
    <Text style={{color:'#fff',fontSize:20,alignSelf:'center',paddingTop:40,marginBottom:8,height:80,fontWeight:'bold'}}>Movies</Text>
    <View style={{backgroundColor:'#000',flex:1}}>
    <FlatList style={{flex:1}}
      data={movielist}
      renderItem={({ item }) => {
        return (
          <View style={{flexDirection:'column',flex:1,margin:12}}>
            <TouchableOpacity onPress={()=>navigation.navigate('WatchMovie',{
              poster:item.image,
              moviename: item.title,
              ryear:item.year,
              mduration:item.duration,
              storyline:item.desc,
              ratings: item.imdbRating,
              streamlink:'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
            })} style={{ }}>
            <Image source={{ uri: item.image }} style={{ height: 180 ,justifyContent:'center',alignItems:'center'}} />
              <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.6 }}>
            </View>
          </TouchableOpacity>
          </View>
        )
      }
      } numColumns={3}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

})
export default Movies;

