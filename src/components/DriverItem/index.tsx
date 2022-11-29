import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Driver} from '../../store/reducers/app/dataTypes';
import flags from '../../constants/flags';
import useContainer from './hook';
import st from './style';

function DriverItem(driver: Driver) {
  const {handleDriverClick, handleRaceClick} = useContainer(driver);

  return (
    <View style={st.container}>
      <TouchableOpacity style={st.leftView} onPress={handleDriverClick}>
        <Image source={{uri: flags[driver.nationality]}} style={st.flagStyle} />
        <Text
          style={st.text}>{`${driver.givenName} ${driver.familyName}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={st.raceButton} onPress={handleRaceClick}>
        <Text style={st.raceText}>Race</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DriverItem;
