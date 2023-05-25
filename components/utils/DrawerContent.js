import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default  function DrawerContent({ navigation }) {
   
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
}
