import React from 'react';
import {Linking, Pressable, Text, View} from 'react-native';
import st from './style';

import {Race} from '../../store/reducers/app/dataTypes';

function RaceItem({season, round, url, raceName, date, Circuit}: Race) {
  return (
    <View style={st.container}>
      <View style={st.box}>
        <Text style={st.text}>{season}</Text>
      </View>
      <View style={st.box}>
        <Text style={st.text}>{round}</Text>
      </View>
      <View style={st.box}>
        <Text style={st.text}>{raceName}</Text>
      </View>
      <View style={st.box}>
        <Text style={st.text}>{date}</Text>
      </View>
      <View style={st.box}>
        <Text style={st.text}>{Circuit.circuitName}</Text>
      </View>
      <Pressable style={st.box} onPress={() => Linking.openURL(url)}>
        <Text style={st.bluText}>Report</Text>
      </Pressable>
    </View>
  );
}

export default RaceItem;
