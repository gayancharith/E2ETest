import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class App extends React.Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Open up App.js to start working on your app!</Text>
  //       <Text>Changes you make will automatically reload.</Text>
  //       <Text>Shake your phone to open the developer menu.</Text>
  //     </View>
  //   );
  // }

  state = {
    counter: 0,
    text: ""
  };

  onPress = () => this.setState({ counter: this.state.counter + 1 });
  onChange = text => this.setState({ text });

  render() {
    const { counter, text } = this.state;
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <Text accessibilityLabel="counter">{counter}</Text>
        <Button
          onPress={this.onPress}
          title="Press me"
          accessibilityLabel="button"
        />
        <TextInput accessibilityLabel="avengers" value={text} onChangeText={this.onChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
