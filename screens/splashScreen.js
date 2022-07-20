
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
 
import AsyncStorage from '@react-native-async-storage/async-storage';

 
const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
     
      AsyncStorage.getItem('user').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'homeScreenStack'
        ),
      );
    }, 1000);
  }, []);
 
  return (
    <View style={styles.container}>
    
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
