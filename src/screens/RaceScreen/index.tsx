import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {uniqueId} from 'lodash';

import useContainer from './hook';
import st from './style';

function RaceScreen() {
  const {renderItem, races} = useContainer();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={st.container}>
        <View style={st.titlesView}>
          <View style={st.box}>
            <Text style={st.text}>Season</Text>
          </View>
          <View style={st.box}>
            <Text style={st.text}>Round</Text>
          </View>
          <View style={st.box}>
            <Text style={st.text}>Race Name</Text>
          </View>
          <View style={st.box}>
            <Text style={st.text}> Date</Text>
          </View>
          <View style={st.box}>
            <Text style={st.text}>Circuit</Text>
          </View>
          <View style={st.box}>
            <Text style={st.text}>Information</Text>
          </View>
        </View>
        <FlatList
          data={races}
          renderItem={renderItem}
          keyExtractor={() => uniqueId()}
        />
      </View>
    </SafeAreaView>
  );
}

export default RaceScreen;
