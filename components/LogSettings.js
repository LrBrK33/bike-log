import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LocationPicker from './LocationPicker';

const LogSettings = () => {
  const [dateText, onChangeDateText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState();

  return (
    <View>
      <Text style={styles.title}>Log Setting</Text>
      <Text style={styles.entryName}>Date</Text>
      <TextInput style={styles.input} placeholder="Date"></TextInput>

      {/* <LocationPicker
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      /> */}
      <Text style={styles.entryName}>Location</Text>
      <TextInput style={styles.input} placeholder="Location"></TextInput>
      <Text style={styles.entryName}>Bike</Text>
      <TextInput style={styles.input} placeholder="Bike"></TextInput>
      <Text style={styles.title}>Fork</Text>
      <View style={styles.container}>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>PSI</Text>
          <TextInput style={styles.input} placeholder="PSI"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Compression</Text>
          <TextInput style={styles.input} placeholder="Compression"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Rebound</Text>
          <TextInput style={styles.input} placeholder="Rebound"></TextInput>
        </View>
      </View>
      <Text style={styles.title}>Shock</Text>
      <View style={styles.container}>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>PSI</Text>
          <TextInput style={styles.input} placeholder="PSI"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Compression</Text>
          <TextInput style={styles.input} placeholder="Compression"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Rebound</Text>
          <TextInput style={styles.input} placeholder="Rebound"></TextInput>
        </View>
      </View>
      <Text style={styles.title}>Tires</Text>
      <View style={styles.container}>
        <View style={styles.halfInput}>
          <Text style={styles.entryName}>Front PSI</Text>
          <TextInput style={styles.input} placeholder="Front PSI"></TextInput>
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.entryName}>Rear PSI</Text>
          <TextInput style={styles.input} placeholder="Rear PSI"></TextInput>
        </View>
      </View>
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
  },
  entryName: {
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  thirdInput: {
    width: '33%',
  },
  halfInput: {
    width: '50%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LogSettings;
