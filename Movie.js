import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
const styling = StyleSheet.create({
  Container: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
  },

  BorderClass: {
    // Setting up image width.
    width: 300,

    // Setting up image height.
    height: 220,

    // Set border width.
    borderWidth: 5,

    // Set border color.
    borderColor: '#f5de20',
  },
  changeFont: {
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 15,
    backgroundColor: '#2b2b2b',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text style={styling.changeFonts}>
          {this.props.title} {'\n'} {this.props.year}
        </Text>
        <Image source={this.props.poster} style={styling.BorderClass} />
      </View>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <View>
        <Text>
          {' '}
          {movie.title} {'\n'} {movie.year}
        </Text>
        <Image source={movie.poster} />
      </View>
    );
  });
};

export default MovieList;
