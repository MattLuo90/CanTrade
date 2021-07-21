import { useEffect, useState } from "react";
import * as Location from "expo-location";

function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (!status) return;
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;