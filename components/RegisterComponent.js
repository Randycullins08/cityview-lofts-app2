import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      apartmentnumber: "",
      email: "",
      remember: false,
    };
  }

  handleRegister() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./images/CityviewLoftsLogo.png")}
              style={styles.image}
            />
          </View>
          <Input
            placeholder="Username"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            leftIconContainerStyle={styles.formIcon}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "key" }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            leftIconContainerStyle={styles.formIcon}
          />
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
            placeholder="Email"
            leftIcon={{ type: "font-awesome", name: "envelope-o" }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            leftIconContainerStyle={styles.formIcon}
          />
          <CheckBox
            title="Remember Me"
            center
            checked={this.state.remember}
            onPress={() => this.setState({ remember: !this.state.remember })}
            containerStyle={styles.formCheckbox}
          />
          <View style={styles.formButton}>
            <Button
              onPress={() => this.handleRegister()}
              title="Register"
              buttonStyle={{ backgroundColor: "#585858" }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
  },
  formIcon: {
    marginRight: 10,
  },
  formCheckbox: {
    backgroundColor: null,
  },
  formButton: {
    margin: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Register;
