import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/AppButton"
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListingsApi from "../api/listings"
import colors from "../config/colors";
import routes from "../navigation/routes"
import AppText from '../components/AppText'

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, [])

  const loadListings = async () => {
    setLoading(true);
    const response = await ListingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Could't retrieve the listings</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
