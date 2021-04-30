import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

class News extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
          <Card wrapperStyle={{ margin: 20 }}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d444090b1.02296129191.jpg&w=2048&h=1536",
              }}
              resizeMode="contain"
            />
            <Card.Title>NEWS</Card.Title>
            <Card.Divider />
            <Text style={styles.title}>Upcoming Events:</Text>
            <Text style={{ marginBottom: 10 }}>
              July 4th Ping Pong Tournament!
            </Text>
            <Text style={{ marginBottom: 10 }}>Location: Clubhouse</Text>
            <Text style={{ marginBottom: 10 }}>All are welcome!</Text>
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
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default News;
