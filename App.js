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
import ColorButton from './components/ColorButton';



const { height, width } = Dimensions.get('window');
export default function App() {
  const [backgroundColor, setbackgroundColor] = useState('blue');
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setbackgroundColor} />
      <ColorButton backgroundColor="green" onPress={setbackgroundColor} />
      <ColorButton backgroundColor="blue" onPress={setbackgroundColor} />
      <ColorButton backgroundColor="yellow" onPress={setbackgroundColor} />
      <ColorButton backgroundColor="purple" onPress={setbackgroundColor} />
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