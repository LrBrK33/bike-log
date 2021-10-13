/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
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

import Header from './components/Header';
import LogSettings from './components/LogSettings';
import LoggedSetting from './components/LoggedSetting';

let loggedSettingsImport = require('./db/sampleData.json');

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [toggleLogSettings, onChangeToggleLogSettings] = useState(false);
  const [loggedSettings, setLoggedSettings] = useState(loggedSettingsImport);

  const goToTop = useRef(null);

  const onPressGoToTop = () => {
    goToTop.current.scrollTo({x: 0, y: 0, animated: true});
  };

  const handleDeletePreviousSetting = id => {
    setLoggedSettings(previousSettings => {
      return previousSettings.filter(setting => setting.id != id);
    });
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" ref={goToTop}>
        <View>
          {toggleLogSettings ? (
            <LogSettings
              onChangeToggleLogSettings={onChangeToggleLogSettings}
              loggedSettings={loggedSettings}
              setLoggedSettings={setLoggedSettings}
              onPressGoToTop={onPressGoToTop}
            />
          ) : (
            <View style={styles.sectionContainer}>
              <Header styles={styles} />
              <Button
                title="Add Setting"
                onPress={() => onChangeToggleLogSettings(true)}
              />
              <Text style={styles.sectionTitle}>Previous Settings:</Text>
              {loggedSettings.map(loggedSetting => {
                return (
                  <LoggedSetting
                    loggedSetting={loggedSetting}
                    handleDeletePreviousSetting={handleDeletePreviousSetting}
                  />
                );
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
