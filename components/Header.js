import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="bicycle"
        size={35}
        style={{transform: [{rotateY: '180deg'}]}}
      />
      <Text style={styles.title}> Bike Tuner </Text>
      <Icon name="bicycle" size={35} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Header;
