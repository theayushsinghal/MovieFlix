import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, {useRef, useState, useEffect} from 'react'
import Carousel from 'react-native-anchor-carousel'
import {FontAwesome5, Faether, MaterialIcons} from '@expo/vector-icons'
import list from './data.js'
import gallery from './data.js'

import Watch from './watch.js';


const Home = ({navigation}) => {

   const [background, setBackground] = useState(
        { 
       uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg',
       name: ' Black Panther',
       released: '2018',
       desc: "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.                Written by\nEditor",
       duration: '134M',
       imdbRating: 7.0,
      })

    const CarouselRef= useRef(null);
    const{width, height}= Dimensions.get('window');
    const renderItem = ({item,index}) => {
      return(
        <View>
        <TouchableOpacity
        onPress={() => {
          CarouselRef.current.scrollToIndex(index);
          setBackground({
            uri: item.image,
            name: item.title,
            released: item.year,
            desc: item.desc,
            duration: item.duration,
            imdbRating:item.imdbRating
          })
        }
        }
        >
          <Image source={{uri: item.image}} style={styles.CarouselImage}/>
          <Text style={styles.CarouselText}>{item.title}</Text>
        </TouchableOpacity>
        </View>
          )    }

  return (



    <ScrollView style={{backgroundColor: '#000'}}>
    <View style={styles.carouselContentContainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
        <ImageBackground
               source={{uri: background.uri}}
                style={styles.ImageBg}
                blurRadius={10}
                >
                  <View style={styles.searchBoxContainer}>
                    <TextInput
                onFocus={() => navigation.navigate('Search')}
                    placeholder='Search movies'
                    placeholderTextColor='#666'
                    style={{...styles.SearchBox,width:700}}
                    />
                  </View>
                  <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', 
                marginLeft: 10,marginTop: -10,
                marginVertical: 10 }}>Top Picks this Week</Text>
                 <View style={styles.CarouselContainerView}>
                  
                <Carousel 
                data={gallery}
                  renderItem={renderItem}
                  itemWidth= {200}
                  containerWidth={ width-20}
                  separatorWidth={0}
                  ref={CarouselRef}
                  inActiveOpacity={0.4}
                  />
                  </View>
               <View style={styles.movieInfoContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer} onPress={() => navigation.navigate('Watch', {
                poster: background.uri,
                moviename: background.name,
                ryear: background.released,
                mduration: background.duration,
                storyline: background.desc,
                ratings: background.imdbRating,
                streamlink: 'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
              })}>
                <FontAwesome5 name='play' size={22} color='#9b42f5' style={{marginLeft: 4}}/>
              </TouchableOpacity>
               </View>
                  
                  <ScrollView style={{paddingHorizontal: 14, marginTop: 14,marginBottom:14,height:200}}>
                    <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>{background.desc}</Text>
                  </ScrollView>
                
                </ImageBackground>

        </View>
    </View>


<View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8,}}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold',marginLeft:16}} >Trending Now</Text>
        <Text style={{ color: '#9b42f5', fontSize: 14, fontWeight: 'normal',marginRight:16}} >Explore{">>"}</Text>
</View>
<FlatList style={{marginBottom: 8}}
data={list}
horizontal={true}
renderItem={({item}) =>{
  return(
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Watch', {
      poster: item.image,
      moviename: item.title,
      ryear: item.year,
      mduration: item.duration,
      storyline: item.desc,
      ratings: item.imdbRating,
      streamlink: 'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
    })}>
      <Image source={{uri: item.image}} style={{height: 150, width: 100}}/>
    <View style={ {position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.8}}>       
    </View>
      
    </TouchableOpacity>
  )
}
}/>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8, }}>
  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 16 }} >Movies</Text>
  <Text style={{ color: '#9b42f5', fontSize: 14, fontWeight: 'normal', marginRight: 16 }} onPress={()=>navigation.navigate('Movies')}>Explore{">>"}</Text>
</View>
<FlatList style={{ marginBottom: 8 }}
  data={list}
  horizontal={true}
  renderItem={({ item }) => {
    return (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Watch', {
        poster: item.image,
        moviename: item.title,
        ryear: item.year,
        mduration: item.duration,
        storyline: item.desc,
        ratings: item.imdbRating,
        streamlink: 'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
      })}>
        <Image source={{ uri: item.image }} style={{ height: 150, width: 100 }} />
        <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.8 }}>
        </View>
        
      </TouchableOpacity>
    )
  }
  } />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8, }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 16 }} >Editors Choice</Text>
        <Text style={{ color: '#9b42f5', fontSize: 14, fontWeight: 'normal', marginRight: 16 }} >Explore{">>"}</Text>
      </View>
      <FlatList style={{ marginBottom: 8 }}
        data={list}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Watch', {
              poster: item.image,
              moviename: item.title,
              ryear: item.year,
              mduration: item.duration,
              storyline: item.desc,
              ratings: item.imdbRating,
              streamlink: 'https://youtu.be/vA_sCFYq_CM?list=RDvA_sCFYq_CM',
            })}>
              <Image source={{ uri: item.image }} style={{ height: 225, width: 150 }} />
              <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.8 }}>
              </View>
              
            </TouchableOpacity>
          )
        }
        } />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentContainer:{
      flex: 1,
      backgroundColor: '#000',
      height:720,
      paddingHorizontal: 14
  },
  
ImageBg:{
  flex: 1,
  height: null,
  width: null,
  opacity: 1,
  justifyContent: 'flex-start'
},
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 40,
    width:'95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 16
  },
  SearchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  CarouselContainerView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Carousel:{
    flex: 1,
    overflow: 'visible'
  },
  CarouselImage:{
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  CarouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  CarouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(155 ,66,245,0.2)',
    marginBottom: 14
  }


})
export default Home;

