import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <ListingEditScreen />
  )
}

  // <Screen>
  //   <AppPicker
  //     selectedItem={category}
  //     onSelectItem={(item) => setCategory(item)}
  //     items={categories}
  //     icon="apps"
  //     placeholder="Category"
  //   />
  //   <AppTextInput icon="email" placeholder="Email" />
  // </Screen>