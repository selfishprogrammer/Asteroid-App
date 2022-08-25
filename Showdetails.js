/* eslint-disable react-native/no-inline-styles */
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Showdetails(props) {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'math',
          fontSize: 30,
          margin: 10,
          color: 'black',
        }}>
        Details
      </Text>
      <View style={{margin: 100}}>
        <Text style={{textAlign: 'left', color: 'black'}}>
          Name:{'    '}
          <Text style={{color: 'red'}}>
            {props.route.params?.asteroidData?.name}
          </Text>
        </Text>
        <Text style={{color: 'black'}}>
          Is Potentially Hazardous Asteroid:{'    '}
          <Text style={{color: 'red'}}>
            {props.route.params?.asteroidData?.is_potentially
              ? 'True'
              : 'False'}
          </Text>
        </Text>

        <Text style={{color: 'black'}}>NASA JPL URL:{'    '}</Text>
        <Text style={{color: 'red'}}>
          <TouchableOpacity
            style={{width: '40%'}}
            onPress={() =>
              Linking.openURL(props.route.params?.asteroidData?.nasa_jpl_url)
            }>
            <Text>{props.route.params?.asteroidData?.nasa_jpl_url}</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
}
