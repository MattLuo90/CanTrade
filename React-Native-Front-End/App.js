import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const demo = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify({ id: 1 }))
      const value = await AsyncStorage.getItem('@storage_Key')
      const person = JSON.parse(value)
      console.log(person)
    } catch (e) {
      console.log(e)
    }
  }
  demo();
  return null
  // (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}

