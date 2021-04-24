import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";
import { Button } from "react-native-elements";

const DEVICE_WIDTH = Dimensions.get("window").width;

class Home extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      images: [
        "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d44e087a2.50487834583.jpg&w=2048&h=1536",
        "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d444090b1.02296129191.jpg&w=2048&h=1536",
        "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d165ad882.78160614438.jpg&w=2048&h=1536",
        "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304176294345.83205057554.jpg&w=2048&h=1536",
        "https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce3b9ba04.54911116474.jpg&w=2048&h=1536",
      ],
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.state.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        }
      );
    }, 5000);
  };

  setSelectedIndex = (event) => {
    // width of the viewsize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // get current position of the scrollview
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex });
  };

  render() {
    const images = this.state.images;
    const { selectedIndex } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.logo}>
          <Image source={require("./images/CityviewLoftsLogo.png")} />
        </View>
        <View style={{ height: "50%", width: "100%" }}>
          <ScrollView
            horizontal
            pagingEnabled
            onMomentumScrollEnd={this.setSelectedIndex}
            ref={this.scrollRef}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image) => (
              <Image
                key={image}
                source={{ uri: image }}
                style={styles.carouselImage}
              />
            ))}
          </ScrollView>
          <View style={styles.circleDiv}>
            {images.map((image, index) => (
              <View
                key={image}
                style={[
                  styles.whiteCircle,
                  { opacity: index === selectedIndex ? 1 : 0.5 },
                ]}
              />
            ))}
          </View>
        </View>
        <Button
          title="Log In"
          buttonStyle={{ backgroundColor: "#f9f9f9" }}
          titleStyle={{ color: "#d7695c" }}
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    height: "100%",
    width: DEVICE_WIDTH,
    marginTop: 10,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteCircle: {
    width: 8,
    height: 8,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default Home;
