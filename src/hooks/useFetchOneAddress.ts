import { useEffect, useState } from "react";
import { getAddress } from "../services/addressService";

export const useFetchOneAddress = (id: string | undefined) => {
  const [oneAddress, setOneAddress] = useState<any>([]);
  const [isOneAddressLoading, setOneAddressLoading] = useState<boolean>(true);
  useEffect(() => {
    getAddress(id)
      .then(setOneAddress)
      .then(() => setOneAddressLoading(false));
  }, [id]);

  return { oneAddress: oneAddress, isOneAddressLoading: isOneAddressLoading };
};
