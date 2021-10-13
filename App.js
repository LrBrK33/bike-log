/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LogSettings from './components/LogSettings';
import LoggedSetting from './components/LoggedSetting';

let loggedSettingsImport = require('./db/sampleData.json');

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [toggleLogSettings, onChangeToggleLogSettings] = useState(false);
  const [loggedSettings, setLoggedSettings] = useState(loggedSettingsImport);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {toggleLogSettings ? (
            <LogSettings
              onChangeToggleLogSettings={onChangeToggleLogSettings}
              loggedSettings={loggedSettings}
              setLoggedSettings={setLoggedSettings}
            />
          ) : (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome to Bike Tuner! </Text>
              <Button
                title="Add Setting"
                onPress={() => onChangeToggleLogSettings(true)}
              />
              <Text style={styles.sectionTitle}>Previous Settings:</Text>
              {loggedSettings.map(loggedSetting => {
                return <LoggedSetting loggedSetting={loggedSetting} />;
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
