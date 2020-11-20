import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
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
const PRODUCTS_DATA = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];
const BoatList = () => {
  return PRODUCTS_DATA.map((boat) => {
    return (
      <View style={styling.Container}>
        <Text style={styling.changeFont}>
          {' '}
          Boat Name: {'\n'}
          {boat.name} {'\n'} Description: {'\n'} {boat.description} {'\n'}
        </Text>
        <Image source={boat.picture} style={styling.BorderClass} />
      </View>
    );
  });
};
export {BoatList};
