import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

function ParkingChargesScreen({ route, navigation }: any) {
  let { carRegistration, time, count } = route.params;
  let [price, setPrice] = useState<number>(0);
  let [paymentStatus, setPaymentStatus] = useState(0);

  useEffect(() => {
    function calculateCharges(hours: number) {
      let hoursNum = Number(hours);
      let amount = 0;

      for (let i = 1; i <= hoursNum; i++) {
        if (i <= 2) {
          amount += 5;
        } else if (i >= 3) {
          amount += 10;
        }
      }

      setPrice(amount);
    }

    if (time !== undefined) {
      calculateCharges(time);
    }
  }, [time]);

  function makePayment() {
    fetch("https://httpstat.us/200", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        "car-registration": carRegistration,
        charge: price,
      }),
    }).then((response) => {
      console.log(response.status);
      setPaymentStatus(response.status);
    });
  }

  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentInfoContainer}>
        <Text style={styles.label}>
          Car Registration:{" "}
          <Text style={styles.content}>{carRegistration}</Text>
        </Text>
        <Text style={styles.label}>
          Parking Charge To Be Paid:{" "}
          <Text style={styles.content} testID="deregister-charge">
            ${price}
          </Text>
        </Text>
      </View>
      {paymentStatus == 200 && (
        <Text style={styles.label}>Payment Successful</Text>
      )}
      {paymentStatus == 200 ? (
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
          testID="deregister-back-button"
        >
          Home
        </Button>
      ) : (
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => makePayment()}
          testID="deregister-payment-button"
        >
          Make Payment
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 21,
    marginVertical: 8,
  },
  paymentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  paymentInfoContainer: {
    width: "95%",
    marginTop: "40%",
    borderColor: "purple",
    borderWidth: 5,
    marginVertical: 20,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  content: {
    fontSize: 25,
    fontWeight: "normal",
  },
  btn: {
    width: 150,
    marginTop: 20,
  },
});

export default ParkingChargesScreen;
