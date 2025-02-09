import { useEffect, useState } from "react";
import { getAddresses } from "../services/addressService";

export const useFetchAddresses = () => {
  const [addresses, setAddresses] = useState<any>([]);
  useEffect(() => {
    getAddresses().then(setAddresses);
  }, []);

  return addresses;
};
