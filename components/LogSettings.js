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

const LogSettings = () => {
  const [dateText, onChangeDateText] = useState('');
  return (
    <View>
      <Text style={styles.title}>Log Setting</Text>
      <Text style={styles.entryName}>Date</Text>
      <TextInput style={styles.input} placeholder="Date"></TextInput>
      <Text style={styles.entryName}>Location</Text>
      <TextInput style={styles.input} placeholder="Location"></TextInput>
      <Text style={styles.entryName}>Bike</Text>
      <TextInput style={styles.input} placeholder="Bike"></TextInput>
      <Text style={styles.entryName}>Fork PSI</Text>
      <TextInput style={styles.input} placeholder="Fork PSI"></TextInput>
      <Text style={styles.entryName}>Fork Compression</Text>
      <TextInput
        style={styles.input}
        placeholder="Fork Compression"></TextInput>
      <Text style={styles.entryName}>Fork Rebound</Text>
      <TextInput style={styles.input} placeholder="Fork Rebound"></TextInput>
      <Text style={styles.entryName}>Shock PSI</Text>
      <TextInput style={styles.input} placeholder="Shock PSI"></TextInput>
      <Text style={styles.entryName}>Shock Compression</Text>
      <TextInput
        style={styles.input}
        placeholder="Shock Compression"></TextInput>
      <Text style={styles.entryName}>Shock Rebound</Text>
      <TextInput style={styles.input} placeholder="Shock Rebound"></TextInput>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LogSettings;
