import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

class Maintenance extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Maintenance Request Form</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Maintenance;
