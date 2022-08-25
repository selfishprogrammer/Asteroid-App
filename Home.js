/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Home({navigation}) {
  const [asteroidId, setasteroidId] = useState('');
  const API_KEY = 'WB4KQ03NjfNtAUQqPIgfxMxJWGuht5SZKbIdNPPj';
  const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`;
  const getAsteroids = () => {
    return fetch(url)
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data?.name);
        console.log(data?.nasa_jpl_url);
        console.log(data?.is_potentially_hazardous_asteroid);
        const asteroidData = {
          name: data?.name,
          nasa_jpl_url: data?.nasa_jpl_url,
          is_potentially: data?.is_potentially_hazardous_asteroid,
        };
        navigation.navigate('ShowDetails', {
          asteroidData: asteroidData,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  const getRandomAsteroids = () => {
    return fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=DEMO_KEY`,
    )
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data?.name);
        console.log(data?.nasa_jpl_url);
        console.log(data?.is_potentially_hazardous_asteroid);
        const asteroidData = {
          name: data?.name,
          nasa_jpl_url: data?.nasa_jpl_url,
          is_potentially: data?.is_potentially_hazardous_asteroid,
        };
        navigation.navigate('ShowDetails', {
          asteroidData: asteroidData,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
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
        Asteroid App
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <TextInput
            placeholder="Enter Asteroid ID"
            value={asteroidId}
            onChangeText={setasteroidId}
            style={{
              // width: '100%',
              margin: 20,
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
            }}
          />
          <TouchableOpacity
            onPress={() => getRandomAsteroids()}
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              padding: 10,
              borderRadius: 10,

              backgroundColor: 'yellowgreen',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'math',

                fontSize: 15,
                color: 'black',
              }}>
              Random Asteroid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getAsteroids()}
            style={{
              marginHorizontal: 20,
              borderRadius: 10,
              marginVertical: 10,
              padding: 10,
              backgroundColor: 'yellow',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'math',
                fontSize: 15,
                color: 'black',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

// function getRandomAsteroids(): Promise<User[]> {
//   return fetch(
//     'https://api.nasa.gov/neo/rest/v1/neo/{ASTEROID_ID}?api_key=DEMO_KEY',
//   )
//     .then(res => {
//       console.log(res?.name);
//       console.log(res?.nasa_jpl_url);
//       console.log(res?.is_potentially_hazardous_asteroid);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// }
// function getAsteroids(): Promise<User[]> {
//   return fetch(
//     'https://api.nasa.gov/neo/rest/v1/neo/{ASTEROID_ID}?api_key={YOUR_API_KEY}',
//   )
//     .then(res => {
//       console.log(res?.name);
//       console.log(res?.nasa_jpl_url);
//       console.log(res?.is_potentially_hazardous_asteroid);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// }
