import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Notifications from "expo-notifications";

class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      apartmentnumber: "",
      text: "",
    };
  }

  handleSubmit() {
    console.log(JSON.stringify(this.state));
    const message = `${this.state.firstname} are you sure about submitting this request?`;
    Alert.alert("Submit Request?", message, [
      {
        text: "Cancel",
        onPress: () => this.resetForm(),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          this.presentLocalNotification();
          this.resetForm();
        },
      },
    ]);
    this.resetForm();
  }

  async presentLocalNotification() {
    function sendNotification() {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
        }),
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Maintenance Request",
          body: "Your request has been submitted, we'll be in touch shortly",
        },
        trigger: null,
      });
    }
    let permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) {
      permissions = await Notifications.requestPermissionsAsync();
    }
    if (permissions.granted) {
      sendNotification();
    }
  }

  resetForm() {
    this.setState({
      firstname: "",
      lastname: "",
      apartmentnumber: "",
      text: "",
    });
  }

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["management@cityviewlofts.com"],
      subject: "Maintenance Request",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./images/CityviewLoftsLogo.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Input
            placeholder="First Name"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            onChangeText={(firstname) => this.setState({ firstname })}
            value={this.state.firstname}
            leftIconContainerStyle={styles.formIcon}
          />
          <Input
            placeholder="Last Name"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            onChangeText={(lastname) => this.setState({ lastname })}
            value={this.state.lastname}
            leftIconContainerStyle={styles.formIcon}
          />
          <Input
            placeholder="Apartment Number"
            leftIcon={{ type: "feather", name: "hash" }}
            onChangeText={(apartmentnumber) =>
              this.setState({ apartmentnumber })
            }
            value={this.state.apartmentnumber}
            leftIconContainerStyle={styles.formIcon}
          />
          <Input
            placeholder="Let us know what's going on"
            leftIcon={{
              type: "material-community",
              name: "hammer-screwdriver",
            }}
            multiline
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            onPress={() => this.handleSubmit()}
            title="Submit Request"
            buttonStyle={{ backgroundColor: "#585858" }}
          />
        </View>
        <View style={styles.phoneContainer}>
          <View style={styles.buttonContainer}>
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
              buttonStyle={{ backgroundColor: "#585858", marginLeft: 20 }}
              onPress={() => {
                Linking.openURL("tel:1-555-123-1234");
              }}
            />
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "#585858", marginLeft: 40 }}
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  formIcon: {
    marginRight: 10,
  },
  formButton: {
    margin: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  phoneContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  phoneText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Maintenance;
