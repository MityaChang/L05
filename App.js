import React from 'react';
// import Movie from './Movie.js';
import Boats, {BoatList} from './Boats.js';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import MovieList from './Movie';
const styling = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
const App: () => React$Node = () => {
  return (
    <ScrollView>
      {/*<Text>Lesson 5 Excercises</Text>*/}
      <Text style={styling.Container}>Welcome to Yacht 66 {'\n'}</Text>
      {/*<MovieList />*/}
      <BoatList />
    </ScrollView>
  );
};
export default App;
