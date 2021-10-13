import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {Picker} from '@react-native-picker/picker';
// import LocationPicker from './LocationPicker';

const LoggedSetting = ({loggedSetting}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles}>{loggedSetting.date}</Text>
        <Text style={styles}>{loggedSetting.location}</Text>
        <Icon name="remove" size={20} color="firebrick" />
      </View>
      <View style={styles.settings} key={loggedSetting.id}>
        <Text>{loggedSetting.bike}</Text>
        <Text style={styles.component}>Fork</Text>
        <Text style={styles.third}>PSI: {loggedSetting.forkPSI}</Text>
        <Text style={styles.third}>Comp: {loggedSetting.forkCompression}</Text>
        <Text style={styles.third}>Rebound: {loggedSetting.forkRebound}</Text>
        <Text style={styles.component}>Shock</Text>
        <Text style={styles.third}>PSI: {loggedSetting.shockPSI}</Text>
        <Text style={styles.third}>Comp: {loggedSetting.shockCompression}</Text>
        <Text style={styles.third}>Rebound: {loggedSetting.shockRebound}</Text>
        <Text style={styles.component}>Tire PSI</Text>
        <Text style={styles.half}>Front: {loggedSetting.frontTirePSI}</Text>
        <Text style={styles.half}>Rear: {loggedSetting.rearTirePSI}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    width: '100%',
  },
  entryName: {
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 15,
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  third: {
    width: '33%',
  },
  location: {
    width: '62%',
  },
  x: {
    width: '5%',
  },
  half: {
    width: '50%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoggedSetting;
