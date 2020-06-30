import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, FlatList, Linking, ToastAndroid } from 'react-native';
import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import list from './data.js'
import { set } from 'react-native-reanimated';

const Watch = ({ route, navigation}) => {
    const {poster}=route.params;
    const { moviename } = route.params;
    const { mduration } = route.params;
    const { ryear } = route.params;
    const { storyline } = route.params;
    const{ratings} = route.params;
    const { streamlink } = route.params;
    return (
        <ScrollView style={{ backgroundColor: '#171717' }}>
               
                    <ImageBackground
                source={{ uri: poster}}
                        style={styles.ImageBg}
                        blurRadius={1}>
                <LinearGradient
                    colors={['#17171710', '#00000010', '#17171710', '#17171750', '#171717']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%'
                    }}
                />
                 </ImageBackground>
            <Image source={{ uri: poster }} style={{ height: 300, resizeMode: 'contain', marginTop: -280, borderRadius: 5}} />
            <Button style={{ alignSelf: 'center', marginTop: 30, borderRadius: 20, padding: 5 }} labelStyle={{ fontWeight: 'bold' }} icon="play" mode='contained' onPress={() => {Linking.openURL(streamlink);
                ToastAndroid.show("Abhi movie nahi daali le ye sun!", ToastAndroid.LONG);}}> Watch Now</Button>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', alignSelf: 'center', margin: 10 }}>{(moviename)}</Text>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>{"★ "}{ratings}{"    •    "}{mduration}{"    •    "}{ryear}</Text>
            <Text style={{ color: '#fff', fontSize: 12, fontStyle: 'italic', alignSelf: 'center', margin: 10 }} numberOfLines={6} >{(storyline)}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8, }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 16 }} >You May Also Like</Text>
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
        height: 350,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start',
        borderRadius:10
    },
   

})

