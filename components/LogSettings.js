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
// import {Picker} from '@react-native-picker/picker';
// import LocationPicker from './LocationPicker';

const LogSettings = () => {
  const [date, onChangeDate] = useState('');
  const [location, onChangeLocation] = useState('');
  const [bike, onChangeBike] = useState('');
  const [forkPSI, onChangeForkPSI] = useState(null);
  const [forkCompression, onChangeForkCompression] = useState(null);
  const [forkRebound, onChangeForkRebound] = useState(null);
  const [shockPSI, onChangeShockPSI] = useState(null);
  const [shockCompression, onChangeShockCompression] = useState(null);
  const [shockRebound, onChangeShockRebound] = useState(null);
  const [frontTirePSI, onChangeFrontTirePSI] = useState(null);
  const [rearTirePSI, onChangeRearTirePSI] = useState(null);

  // const [selectedLocation, setSelectedLocation] = useState();

  const handleClick = () => {
    console.log({
      date: date,
      location: location,
      bike: bike,
      forkPSI: forkPSI,
      forkCompression: forkCompression,
      forkRebound: forkRebound,
      shockPSI: shockPSI,
      shockCompression: shockCompression,
      shockRebound: shockRebound,
      frontTirePSI: frontTirePSI,
      rearTirePSI: rearTirePSI,
    });
  };

  return (
    <View>
      <Text style={styles.title}>Log Settings</Text>
      <Text style={styles.entryName}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        onChangeText={onChangeDate}></TextInput>

      {/* <LocationPicker
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      /> */}
      <Text style={styles.entryName}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        // value={values.location}
        onChangeText={onChangeLocation}></TextInput>
      <Text style={styles.entryName}>Bike</Text>
      <TextInput
        style={styles.input}
        placeholder="Bike"
        onChangeText={onChangeBike}></TextInput>
      <Text style={styles.title}>Fork</Text>
      <View style={styles.container}>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>PSI</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeForkPSI}
            placeholder="PSI"
            value={forkPSI}
            keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Compression</Text>
          <TextInput
            style={styles.input}
            placeholder="Compression"
            onChangeText={onChangeForkCompression}
            value={forkCompression}
            keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Rebound</Text>
          <TextInput
            style={styles.input}
            placeholder="Rebound"
            onChangeText={onChangeForkRebound}
            value={forkRebound}
            keyboardType="numeric"></TextInput>
        </View>
      </View>
      <Text style={styles.title}>Shock</Text>
      <View style={styles.container}>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>PSI</Text>
          <TextInput
            style={styles.input}
            placeholder="PSI"
            onChangeText={onChangeShockPSI}></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Compression</Text>
          <TextInput
            style={styles.input}
            placeholder="Compression"
            onChangeText={onChangeShockCompression}></TextInput>
        </View>
        <View style={styles.thirdInput}>
          <Text style={styles.entryName}>Rebound</Text>
          <TextInput
            style={styles.input}
            placeholder="Rebound"
            onChangeText={onChangeShockRebound}></TextInput>
        </View>
      </View>
      <Text style={styles.title}>Tires</Text>
      <View style={styles.container}>
        <View style={styles.halfInput}>
          <Text style={styles.entryName}>Front PSI</Text>
          <TextInput
            style={styles.input}
            placeholder="Front PSI"
            onChangeText={onChangeFrontTirePSI}></TextInput>
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.entryName}>Rear PSI</Text>
          <TextInput
            style={styles.input}
            placeholder="Rear PSI"
            onChangeText={onChangeRearTirePSI}></TextInput>
        </View>
      </View>
      <Button title="Submit" onPress={handleClick} />
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
