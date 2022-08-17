import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen'
import ParkingInfoScreen from './src/Screens/ParkingInfoScreen';
import CarRegistration from './src/Screens/CarRegistration';
import ParkingChargesScreen from './src/Screens/ParkingChargesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Parking Lot" component={ParkingInfoScreen} />
        <Stack.Screen name="Car Registration" component={CarRegistration} />
        <Stack.Screen name="Payment" component={ParkingChargesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}