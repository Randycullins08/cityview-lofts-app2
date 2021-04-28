import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  sendMail() {
    MailComposer.composeAsync({
      recipients: ["management@cityviewlofts.com"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
          <Card wrapperStyle={{ margin: 20 }}>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text style={styles.title}>Address</Text>
            <Text>123 Cityview Lofts Lane</Text>
            <Text>Ogden, UT 84401</Text>
            <Text style={{ marginBottom: 20 }}>U.S.A.</Text>
            <Text style={styles.title}>Contact</Text>
            <Text>Phone: 1-555-123-1234</Text>
            <Text>Email: management@cityviewlofts.com</Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "#585858", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
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
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Contact;
