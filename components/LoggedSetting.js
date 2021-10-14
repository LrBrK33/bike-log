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

const LoggedSetting = ({loggedSetting, handleDeletePreviousSetting}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>{loggedSetting.date}</Text>
        <Text style={styles.header}>{loggedSetting.location}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => handleDeletePreviousSetting(loggedSetting.id)}
        />
      </View>
      <View style={styles.settings} key={loggedSetting.id}>
        <Text style={styles.component}>Fork</Text>
        <Text style={styles.psi}>PSI: {loggedSetting.forkPSI}</Text>
        <Text style={styles.compression}>
          Compression: {loggedSetting.forkCompression}
        </Text>
        <Text style={styles.rebound}>Rebound: {loggedSetting.forkRebound}</Text>
        <Text style={styles.component}>Shock</Text>
        <Text style={styles.psi}>PSI: {loggedSetting.shockPSI}</Text>
        <Text style={styles.compression}>
          Compression: {loggedSetting.shockCompression}
        </Text>
        <Text style={styles.rebound}>
          Rebound: {loggedSetting.shockRebound}
        </Text>
        <Text style={styles.component}>Tire PSI</Text>
        <Text style={styles.psi}>Front: {loggedSetting.frontTirePSI}</Text>
        <Text style={styles.psi}>Rear: {loggedSetting.rearTirePSI}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    fontSize: 18,
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
    borderRightWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 16,
  },
  settings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  psi: {
    width: '30%',
    fontSize: 16,
  },
  compression: {
    width: '42%',
    fontSize: 16,
  },
  rebound: {
    width: '28%',
    fontSize: 16,
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
});

export default LoggedSetting;
