import React from 'react';
import {FlatList, Image, SafeAreaView, View} from 'react-native';

// @ts-ignore
import topImage from '../../assets/images/f1-22.webp';
import Pagination from '../../components/Pagination';
import useContainer from './hook';
import st from './style';

function HomeScreen() {
  const {drivers, renderItem} = useContainer();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Image source={topImage} style={st.imageStyle} />
      </View>
      <Pagination />
      <FlatList
        data={drivers}
        renderItem={renderItem}
        keyExtractor={item => item.driverId}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
