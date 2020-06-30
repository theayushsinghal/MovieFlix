import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react'
import tvshowlist from './data.js'



const TvShows = ({navigation}) => {

  return (
    <View style={{ backgroundColor: '#1f1f1f', flex: 1}}>
    <Text style={{color:'#fff',fontSize:20,alignSelf:'center',paddingTop:40,marginBottom:8,height:80,fontWeight:'bold'}}>Tv-Shows</Text>
    <View style={{backgroundColor:'#000',flex:1}}>
    <FlatList style={{flex:1}}
      data={tvshowlist}
      renderItem={({ item }) => {
        return (
          <View style={{flexDirection:'column',flex:1,margin:12}}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('WatchTv', {
              poster: item.image,
              moviename: item.title,
              ryear: item.year,
              mduration: item.duration,
              storyline: item.desc,
              ratings: item.imdbRating,
              streamlink: 'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
            })}>
            <Image source={{ uri: item.image }} style={{ height: 180 ,justifyContent:'center',alignItems:'center'}} />
              <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.8 }}>
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
export default TvShows;

