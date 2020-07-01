import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import {Video} from 'expo-av';
import * as FileSystem from 'expo-file-system';
//import Orientation from 'react-native-orientation';


const {width, height}= Dimensions.get('window');

const video = () => {

    const[videoUrl, setVideoUrl]= useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')
  const[buttonTitle, setButtonTitle]= useState('Download')
  const[progressValue, setProgressValue]= useState(0)
  const[totalSize, setTotalSize]= useState(0)

  
  function formatBytes(bytes, decimals=2){
    if(bytes==0) return '0 Bytes';

    const k= 1024;
    const dm=decimals<0 ? 0 : decimals;
    const sizes= ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i=Math.floor(Math.log(bytes)/ Math.log(k));
    return parseFloat((bytes / Math.pow(k,i)).toFixed(dm)) + ' ' + sizes[i]; 
  }

  async function downloadVideo() {
    console.log('pressed');
    setButtonTitle('Downloading')
    const callback = downloadProgress => {
      setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite))
      var progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      progress= progress.toFixed(2) * 100
      setProgressValue(progress.toFixed(0))
    };
    const downloadResumable = FileSystem.createDownloadResumable(
      videoUrl,
      FileSystem.documentDirectory + 'small.mp4',
      {},
      callback
    );
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
      setButtonTitle('Downloaded')

    } catch (e) {
      console.error(e);
    }
  }
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: videoUrl}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        playWhenInactive={false}
    playInBackground={false}
        shouldPlay
        onFullScreenEnter={() => Orientation.lockToLandscape()}
        onFullScreenExit={() => Orientation.lockToLandscape()}

        isLooping={false}
        useNativeControls
        orientation= 'landscape'
        style={styles.video}
      />
      <Button title= {buttonTitle} onpress={()=>console.log('pressed')}></Button>
      <Text style={{color: 'white'}}>Size: {totalSize}</Text>
      <Text style={{color: 'white'}}>Progress:{progressValue} %</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height/3    

  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default video;

