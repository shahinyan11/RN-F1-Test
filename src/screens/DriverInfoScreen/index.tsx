import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import flags from '../../constants/flags';
import st from './style';

function DriverInfoScreen({route}: any) {
  const {givenName, familyName, nationality, url, dateOfBirth} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={st.container}>
        <Image source={{uri: flags[nationality]}} style={st.image} />
        <View style={st.textContainer}>
          <Text style={st.label}>Name:</Text>
          <Text style={st.text}>{givenName}</Text>
        </View>
        <View style={st.textContainer}>
          <Text style={st.label}>Surname:</Text>
          <Text style={st.text}>{familyName}</Text>
        </View>
        <View style={st.textContainer}>
          <Text style={st.label}>Nationality:</Text>
          <Text style={st.text}>{nationality}</Text>
        </View>
        <View style={st.textContainer}>
          <Text style={st.label}>Date of Birth:</Text>
          <Text style={st.text}>{dateOfBirth}</Text>
        </View>
        <View style={st.moreInfo}>
          <Text style={st.label}>Biography:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(url)}>
            <Text style={st.blueText}>Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DriverInfoScreen;
