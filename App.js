import React, {useState, useRef, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';

import Header from './components/Header';
import LogSettings from './components/LogSettings';
import LoggedSetting from './components/LoggedSetting';

let loggedSettingsImport = require('./db/sampleData.json');

const App = () => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState('yes');
  const [toggleLogSettings, onChangeToggleLogSettings] = useState(false);
  const [loggedSettings, setLoggedSettings] = useState(loggedSettingsImport);
  const [bike, setBike] = useState('Intense Spider XC');

  const goToTop = useRef(null);

  const onPressGoToTop = () => {
    goToTop.current.scrollTo({x: 0, y: 0, animated: true});
  };

  const handleDeletePreviousSetting = id => {
    setLoggedSettings(previousSettings => {
      return previousSettings.filter(setting => setting.id != id);
    });
  };
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if (!user) {
  //   return (
  //     <SafeAreaView>
  //       <View>
  //         <Text>Login</Text>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }
  return (
    <NavigationContainer>
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
                <Text style={styles.bike}>{bike}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onChangeToggleLogSettings(true)}>
                  <Icon name="plus" style={styles.buttonText} />
                  <Text style={styles.buttonText}> Log Setting</Text>
                </TouchableOpacity>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    paddingVertical: 10,
    paddingLeft: 10,
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
  button: {
    alignItems: 'center',
    backgroundColor: '#4682B4',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bike: {
    fontSize: 30,
    fontWeight: '600',
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default App;
