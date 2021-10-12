import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  // Pickers
  PickerTime,
  PickerDate,
  PickerDateTime,
  PickerDateRange,
  // Dropdowns
  DropdownList,
  DropdownMeasurements,
  DropdownNumber,
  DropdownState,
  // TypeScript Types
  PickerItem,
} from 'react-native-ultimate-modal-picker';

const LocationPicker = ({selectedLocation, setSelectedLocation}) => {
  return (
    <View>
      <Text style={styles.entryName}>Location</Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLocation(itemValue)
        }>
        <Picker.Item label="Brushy Creek" value="brushycreek" />
        <Picker.Item label="Reveile Peak Ranch" value="reveilepeakranch" />
      </Picker>
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

export default LocationPicker;
