/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import YaMap from 'react-native-yamap';

YaMap.init('8a472746-e0e9-4dc9-8b6e-7ae3d3b7b923');
// import YaMap from 'react-native-yamap';
// import {
//   YaMap,
//   Animation,
//   CameraPosition,
//   Circle,
//   Marker,
//   Point,
//   Polygon,
//   Geocoder,
// } from 'react-native-yamap';
// YaMap.init('8a472746-e0e9-4dc9-8b6e-7ae3d3b7b923');

// YaMap.init('8a472746-e0e9-4dc9-8b6e-7ae3d3b7b923');

const App = () => {
  return (
    <SafeAreaView>
      <Text>Карты</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
