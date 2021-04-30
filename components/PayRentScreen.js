import React, { Component } from "react";
import { ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Card, Button, Icon, Divider } from "react-native-elements";
import * as Animatable from "react-native-animatable";

class PayRent extends Component {
  makePayment() {
    alert("Making payments comming soon. \nThank you for your patience!");
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="slideInDown" duration={1000} delay={100}>
          <Card wrapperStyle={{ margin: 30 }}>
            <Image
              source={require("./images/CityviewLoftsLogo.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Card.Title style={styles.title}>Pay Rent</Card.Title>
            <Card.Divider />
            <Button
              title="Make Payment"
              buttonStyle={styles.button}
              icon={
                <Icon
                  name="dollar"
                  type="font-awesome"
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.makePayment()}
            />
            <Button
              icon={
                <Icon
                  name="phone"
                  type="font-awesome"
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Call Us"
              buttonStyle={styles.button}
              onPress={() => {
                Linking.openURL("tel:1-555-123-1234");
              }}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#585858",
    marginHorizontal: 40,
    marginTop: 20,
  },
});

export default PayRent;
