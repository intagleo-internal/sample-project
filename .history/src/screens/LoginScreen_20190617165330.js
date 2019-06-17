import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { createStackNavigator } from "react-navigation";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    console.log("constructor");
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    // Alert.alert("Alert", "Button pressed "+viewId);

    //                <Button title="Go To Home Screen"
    // onPress={() => this.props.navigation.navigate('Home')} />
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../images/masterTechLogo.png")}
        />

        <Text style={styles.titleLabel}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>SID</Text>
          <TextInput
            style={styles.inputs}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>DEALER{"\n"}CODE</Text>
          <TextInput
            style={styles.inputs}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>PASSWORD</Text>
          <TextInput
            style={styles.inputs}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <Text style={styles.detailLabel}>
          This session will last for 12 hours
        </Text>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener("login")}
        >
          <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003BA3"
  },
  logoImage: {
    marginBottom: 30,
    width: 100,
    height: 100
  },
  titleLabel: {
    color: "white",
    marginBottom: 20,
    fontSize: 35,
    fontWeight: "bold"
  },
  inputContainer: {
    borderBottomColor: "#003BA3",
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  fieldLabel: {
    width: 100,
    textAlign: "right",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 12,
    padding: 10,
    borderBottomColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    alignItems: "stretch",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  detailLabel: {
    color: "white",
    fontSize: 18,
    marginTop: 30
  },
  buttonContainer: {
    height: 60,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 130
  },
  loginButton: {
    backgroundColor: "#FFFFFF"
  },
  loginText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }
});
