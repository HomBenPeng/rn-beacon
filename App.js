/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  DeviceEventEmitter,
  Platform
} from 'react-native';
import Beacons from 'react-native-beacons-manager'

class App extends Component {

  componentdidmount () {
    const region = {
        identifier: '',
        uuid: 'b5b182c7-eab1-4988-aa99-b5c1517008d9' //四月兄弟裝置UUID
    }

    if (Platform.OS === 'ios') {
        Beacons.requestWhenInUseAuthorization()
        Beacons.startMonitoringForRegion(region)
        Beacons.startRangingBeaconsInRegion(region)
        Beacons.startUpdatingLocation()
    } else {
        Beacons.detectIBeacons()
        Beacons
            .startRangingBeaconsInRegion(region)
            .then(() => console.log('Beacons ranging started succesfully'))
            .catch(error => console.log(`Beacons ranging not started, error: ${error}`))
    }

    // 加入監聽事件接收Becons 訊號
    DeviceEventEmitter.addListener(
        'beaconsDidRange',
        (data) => {
            console.log(JSON.stringify(data))
        }
    )
  }

  render () {
    return(
      <View>
        <Text>asd</Text>
      </View>
    )
  };
};
export default App;
