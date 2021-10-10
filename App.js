import React, { useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
  Platform,
  Image,
  TouchableHighlight,
} from 'react-native';
import picBiscuits from './assets/biscuit.jpg';
import picJungle from './assets/jungle.jpg';

const { height, width } = Dimensions.get('window');
export default function App() {
  const [backgroundColor, setbackgroundColor] = useState('blue');
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setbackgroundColor('yellow')}
        underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: 'yellow' }]} />
          <Text style={styles.buttonText}>yellow</Text>
        </View>
      </TouchableHighlight>
      {/* <Text style={styles.button} onPress={() => setbackgroundColor('green')}>green</Text>
      <Text style={styles.button} onPress={() => setbackgroundColor('red')}>red</Text>
      <Image style={styles.image} source={picBiscuits} />
      <Image style={styles.image} source={picJungle} />
      <Text style={styles.text}>red</Text>
      <Text style={[styles.text, styles.selectedText]} >blue</Text>
      <Text style={styles.text}>green</Text>
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" style={{ marginVertical: 50 }} onPress={onButtonPress} />
      <Text>OS : {Platform.OS}</Text>
      <Text>Height : {height}</Text>
      <Text>Width : {width}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)',
  },

  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  // page: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // text: {
  //   fontSize: 22,
  //   color: "red",
  //   backgroundColor: "yellow",
  //   margin: 10,
  //   padding: 5
  // },
  // selectedText: {
  //   backgroundColor: "red",
  //   color: "yellow"
  // },
  // image: {
  //   flex: 1,
  //   borderRadius: 50,
  //   margin: 10,
  //   width: Dimensions.get("window").width - 10

  // }
});