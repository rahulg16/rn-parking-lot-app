import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function ParkingLotBlocks({ count, occupied, obj, navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Payment", {
          carRegistration: obj.registrationNum,
          time: obj.parkingTime,
          count: count
        })
      }
    >
      <View style={[styles.block, occupied && styles.occupied]}>
        <Text>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: 55,
    height: 55,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  occupied: {
    backgroundColor: "red",
  },
});

export default ParkingLotBlocks;
