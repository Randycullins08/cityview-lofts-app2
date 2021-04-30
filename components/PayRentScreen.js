import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";

class PayRent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This will be the pay rent screen</Text>
      </View>
    );
  }
}

export default PayRent;
