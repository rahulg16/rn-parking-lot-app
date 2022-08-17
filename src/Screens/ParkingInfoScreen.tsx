import React, { useState, useEffect } from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import ParkingLotBlocks from "../Components/ParkingLotBlocks";

function ParkingInfoScreen({ route, navigation }: any) {
  let { number } = route.params;
  let { registrationNum, time } = route.params;
  let [numArr, setNumArr] = useState<any>([]);
  let [numberOfParking, setNumberOfParking] = useState<number>(number);


  useEffect(() => {
    if (number !== undefined) {
      setNumberOfParking(number);

      for (let i = 1; i <= numberOfParking; i++) {
        setNumArr((prevArr: any) => [...prevArr, { count: i }]);
      }
    }
  }, [number]);

  function getRandomNum() {
    let randomNum = Math.floor(Math.random() * numberOfParking) + 1;
    if (randomNum == 0) {
      return randomNum + 1;
    } else {
      return randomNum;
    }
  }

  useEffect(() => {
    if (registrationNum?.length > 0) {
      let randomNum = getRandomNum();

      let modifiedArr = numArr.map((obj: any) => {
        if (obj.count == randomNum && obj.occupied == undefined) {
          return {
            count: obj.count,
            registrationNum: registrationNum,
            parkingTime: time,
            occupied: true,
          };
        } else if (obj.count != randomNum && obj.occupied == undefined) {
          return { count: obj.count };
        } else if (obj.count == randomNum && obj.occupied !== undefined) {
          return {
            ...obj,
          };
        } else if (obj.count !== randomNum && obj.occupied !== undefined) {
          return {
            ...obj,
          };
        }
      });

      setNumArr(modifiedArr);
    }

    console.log(numArr);
  }, [registrationNum, time]);

  function handleBtnClick() {
    navigation.navigate("Car Registration");
  }

  return (
    <View style={styles.mainContainer}>
      <Button
        mode="contained"
        style={styles.btn}
        onPress={() => handleBtnClick()}
      >
        Enter car details
      </Button>
      <ScrollView contentContainerStyle={styles.parkingLotContainer}>
        {numArr.map((obj: any, i: number) => (
          <ParkingLotBlocks
            count={obj.count}
            occupied={obj.occupied}
            obj={obj}
            key={obj.count}
            navigation={navigation}
            testID={`parking-drawing-space-${i}`}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parkingLotContainer: {
    borderColor: "grey",
    borderWidth: 4,
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "93%",
    justifyContent: "space-around",
  },
  btn: {
    width: 250,
    marginVertical: 28,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default ParkingInfoScreen;
