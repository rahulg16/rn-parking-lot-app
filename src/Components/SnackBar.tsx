import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

const SnackBar = ({ visible, onDismissSnackBar }: any) => {
  return (
    <View style={styles.container}>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Please enter a valid input
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "space-between",
  },
});

export default SnackBar;
