import React, { Component } from "react";
import { Image, SafeAreaView, StatusBar } from "react-native";
import { Container, Content, Text, View, Button } from "native-base";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const map = require("../../../assets/map.png");

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} />
        <ScrollView>
          <SafeAreaView />
          <View style={styles.topTextView}>
            <Text style={styles.topText}>Choose your location</Text>
          </View>
          <Image source={map} style={styles.mapImage} />
          <View style={styles.infoTextView}>
            <Text style={styles.infoText}>
              Looks like we cant locate you right now.
            </Text>
            <Text style={styles.infoText}>
              Please turn on your location services to know your delivery area.
            </Text>
          </View>

          <Button
            block
            style={styles.gpsAutoBtn}
            onPress={() => navigation.navigate("Location")}
          >
            <Text>Use my GPS location</Text>
          </Button>

          <Text style={styles.otherText}>
            Or manually enter your address below
          </Text>

          <Button
            block
            style={styles.gpsManualBtn}
            onPress={() => navigation.navigate("Location")}
          >
            <Text>Enter the location manually</Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
