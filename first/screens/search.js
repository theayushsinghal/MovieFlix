import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, { useRef, useState, useEffect, Component } from 'react'
import movielist from './data.js'
import Watch from './watch.js';
let fulllist = movielist
let headertext = "Most Searched"
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            fulllist : fulllist,
            usersearch : fulllist,
        };
    }
    searchquery(userquery){
        if (userquery != "") { headertext = "Search result"}
        else{ headertext ="Most Searched"}
            
        this.setState({
            usersearch: this.state.fulllist.filter(i =>
                i.title.toLowerCase().includes(userquery.toLowerCase()),
            ),
        });

    }
    render(){
    return (

        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <View style={styles.searchBoxContainer}>
                <TextInput 
                onChangeText={text=>{this.searchquery(text)}}
                    placeholder='Search movies'
                    placeholderTextColor='#666'
                    style={{ ...styles.SearchBox, width: 200 }}
                    
                />
            </View>
            <Text style={{color:'#fff',fontSize:26,fontWeight:'bold',margin:10,marginTop:-20}}>{headertext}</Text>
            <FlatList style={{ }}
                data={this.state.usersearch}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'column', flex: 1, margin: 12 }}>
                            <TouchableOpacity>
                                <Image source={{ uri: item.image }} style={{ height: 280, justifyContent: 'center', alignItems: 'center', borderRadius:4,resizeMode:'stretch' }} />
                                <Text style={{color:'#fff',alignSelf:'center'}}>{item.title}</Text>
                                <View style={{ position: 'absolute', height: 2, width: '100%', backgroundColor: '#9b42f5', opacity: 0.6 }}>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                } numColumns={2} />
        </View>
    );}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBoxContainer: {
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 4,
        marginVertical: 40,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    SearchBox: {
        padding: 12,
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 16
    },
})

export default Search;