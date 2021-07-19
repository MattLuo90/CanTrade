import React, { useState } from "react";
import { TextInput, View } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";



export default function App() {
  const [firstName, setFirstName] = useState('')
  return <Screen>
    <TextInput
      onChangeText={text => setFirstName(text)}
      placeholder="First name"
      style={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      }}
    />
  </Screen>
}