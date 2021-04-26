import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

class Home extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.logo}>
          <Image source={require("./images/CityviewLoftsLogo.png")} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});

export default Home;
