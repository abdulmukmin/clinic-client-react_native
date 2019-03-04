import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})

const Loader = ({ size }) => {
  return (
    <View style={style.loader}>
      <ActivityIndicator size={size || 'small'} />
    </View>
  )
}

export default Loader;