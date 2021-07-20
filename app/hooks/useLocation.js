import { useEffect, useState } from "react";
import * as Location from "expo-location";

function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const newLocation = await Location.getLastKnownPositionAsync();
      setLocation(newLocation);
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