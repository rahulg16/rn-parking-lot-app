import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import SnackBar from "../Components/SnackBar";

function HomeScreen({ navigation }: any) {
  let [numberOfSpace, setNumberOfSpace] = useState<string>();

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  function handleSubmit() {
    if (!Number(numberOfSpace)) {
      onToggleSnackBar();

      setTimeout(() => {
        onDismissSnackBar();
      }, 10000)
      return;
    } else {
      navigation.navigate("Parking Lot", {
        number: numberOfSpace,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter the number of space"
          value={numberOfSpace}
          onChangeText={(number) => setNumberOfSpace(number)}
          testID="Parking-create-text-input"
        />

        <Button
          mode="contained"
          onPress={() => handleSubmit()}
          testID="Parking-create-submit-button"
        >
          Submit
        </Button>
      </View>
      <SnackBar visible={visible} onDismissSnackBar={onDismissSnackBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    marginTop: "50%",
    height: 140,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
