import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAddress } from "../interfaces/IAddress";
import { baseAddressesAPI } from "../Urls/addressesApiUrl";

export default function AddressDetail() {
  const { addressId } = useParams();
  const [address, setAddress] = useState<IAddress>();
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`${baseAddressesAPI}/address/${addressId}`)
      .then(function (response) {
        // handle success
        const theA = response.data.address;
        setAddress(theA);
        console.log(theA);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [addressId]);

  return (
    <div style={{ marginLeft: "8rem" }}>
      <h2>Address Details</h2>
      <p>Address ID: {addressId}</p>
      <p>Address: {address?.address}</p>
      <p>Country: {address?.country}</p>
      <p>Zip: {address?.zip}</p>
    </div>
  );
}
