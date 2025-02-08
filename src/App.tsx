import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import AddressDetail from "./pages/AddressDetail";
import { IAddress } from "./Interfaces/IAddress";
import { baseAddressesAPI } from "./Urls/addressesApiUrl";

function App() {
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(baseAddressesAPI)
      .then(function (response) {
        // handle success
        const theA = response.data.addresses;
        setAddresses(theA);
        console.log(theA);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    // <div className="App">
    //   <div>--- Addresses ultimate Table! ---</div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddressTable addresses={addresses} />} />
        <Route path="/address/:addressId" element={<AddressDetail />} />
        {/* {addressTable(addresses)} */}
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;

function AddressTable({ addresses }: { addresses: IAddress[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Address</th>
          <th>Country</th>
          <th>Zip</th>
        </tr>
      </thead>
      <tbody>
        {addresses.map((address) => (
          <AddressTableRow key={address.id} address={address} />
        ))}
      </tbody>
    </table>
  );
}

function AddressTableRow({ address }: { address: IAddress }) {
  return (
    <tr>
      <td>
        <Link to={`/address/${address.id}`}>{address?.id}</Link>
      </td>
      <td>{address?.address}</td>
      <td>{address?.country}</td>
      <td>{address?.zip}</td>
    </tr>
  );
}
