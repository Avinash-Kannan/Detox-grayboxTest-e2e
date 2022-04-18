/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import React from 'react';

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  StatusBar,
  StyleSheet,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';

const App = () => {
  const [input, setInput] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [agree, setAgree] = useState(false);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <SafeAreaView style={stylesBar.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="silver"
      />
      <Text
        testID="app-title"
        style={{fontSize: 26, textAlign: 'center', color: 'blue'}}>
        VodQA 2022
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.container}>
          <Text
            testID="radiobtn-message"
            style={{fontSize: 22, textAlign: 'left'}}>
            Did you enjoyed this VodQA sessions so far?
          </Text>
          <View style={styles.wrapper}>
            <RadioGroup
              testID="radiobtn"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text
            testID="txtinput-message"
            style={{fontSize: 22, textAlign: 'left'}}>
            Key take aways and feedbacks for the sessions :
          </Text>
        </View>
        <View style={styles.wrapper}>
          <TextInput
            testID="input"
            style={stylesTextInput.input}
            placeholder="Provide your valuable inputs here..."
            value={input}
            onChangeText={setInput}
          />
        </View>
        <View style={styles.wrapper}>
          <CheckBox
            testID="checkbox"
            boxType="square"
            value={agree}
            style={{lineWidth: 6}}
            onChange={() => setAgree(!agree)}
          />
          <Text
            testID="checkbox-message"
            style={{fontSize: 17, textAlign: 'left', padding: 5}}>
            Would you recommend vodQA to fellow QA communities
          </Text>
        </View>
        <View style={styles.container}>
          <Button
            testID="button"
            title="Submit"
            onPress={() => Alert.alert('Response Submitted Successfully')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesBar = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const stylesTextInput = StyleSheet.create({
  input: {
    flex: 1,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: 'yes',
  },
  {
    id: '2',
    label: 'No',
    value: 'no',
  },
];
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingTop: 2,
    alignContent: 'flex-start',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 15,
  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },
});
export default App;
