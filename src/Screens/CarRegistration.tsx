import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

function CarRegistration({ navigation }: any) {
  let [carRegistration, setCarRegistration] = useState<string>("");
  let [parkingTime, setParkingTime] = useState<string>("");

  function handleSubmit() {
    navigation.navigate("Parking Lot", {
      registrationNum: carRegistration,
      time: parkingTime,
    });
  }

  return (
    <View style={styles.carRegistrationContainer}>
      <TextInput
        label="Enter Car Registration"
        value={carRegistration}
        style={styles.textField}
        onChangeText={(text) => setCarRegistration(text)}
        testID="parking-drawing-registration-input"
      />

      <TextInput
        label="Parking Time (in hours)"
        value={parkingTime}
        style={styles.textField}
        onChangeText={(text) => setParkingTime(text)}
        testID="parking-drawing-registration-input"
      />

      <Button
        mode="contained"
        onPress={() => handleSubmit()}
        testID="parking-drawing-add-car-button"
      >
        Park Your Car
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  carRegistrationContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingTop: 28,
  },
  textField: {
    marginBottom: 20,

  },
});

export default CarRegistration;
