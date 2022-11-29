import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import st from './style'
import flags from "../../constants/flags";

import useContainer from "./hook";

interface FLAGS{
  country:string,
  name: string
}


function DriversAll({country, name}:FLAGS) {
  const { handleNavigation } = useContainer();



  return (
    <View style={st.container}>
      <TouchableOpacity style={st.leftView}>
        <Image source={{uri: flags[country]}} style={st.flagStyle}/>
        <Text style={st.text}>{name}</Text>
      </TouchableOpacity>

<Pressable style={st.raceButton} onPress={handleNavigation}>
  <Image source={require('../../assets/images/race2.jpeg')} style={st.icon }/>
</Pressable>


    </View>
  );
}

export default DriversAll;
