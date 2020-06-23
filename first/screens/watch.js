import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react'
import Carousel from 'react-native-anchor-carousel'
import { Button } from 'react-native-paper';

import list from './data.js'
let duration= "220m"
let released= "2019"

const Watch = () => {

    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
               
                    <ImageBackground
                        source={{ uri:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg' }}
                        style={styles.ImageBg}
                        blurRadius={2}>
                 </ImageBackground>
                <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg' }} style={{ height: 300, resizeMode: 'contain',marginTop:-220 }} />
                <Button style={{alignSelf:'center',marginTop:30,borderRadius:20,padding:6}} labelStyle={{fontWeight:'bold'}} icon="play" mode='contained'  onPress={() => console.log('Pressed')}> Watch Now</Button>
                <Text style={{color:'#fff',fontSize:25,fontWeight:'bold',alignSelf:'center',margin:10}}>Endgame</Text>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>{duration}{"       .       "}{released}</Text>
            <Text style={{ color: '#fff', fontSize: 12, fontStyle: 'italic', alignSelf: 'center', margin: 10 }}>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8, }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 16 }} >You May Also Like</Text>
            </View>
            <FlatList style={{ marginBottom: 8 }}
                data={list}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Image source={{ uri: item.image }} style={{ height: 150, width: 100 }} />
                            <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.8 }}>
                            </View>
                        </TouchableOpacity>
                    )
                }
                } />
        </ScrollView>
    );
}
export default Watch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 16,
        width: 350,
    },


    ImageBg: {

        flex: 1,
        height: 280,
        width: null,
        opacity: 0.8,
        justifyContent: 'flex-start',
        borderRadius:10
    },
   

})

