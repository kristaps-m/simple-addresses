import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import axios from "axios";
import AddressDetail from "./pages/AddressDetail";
import { IAddress } from "./interfaces/IAddress";
import { baseAddressesAPI } from "./Urls/addressesApiUrl";
import { AddressTable } from "./components/AddressTable/AddressTable";

function App() {
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  useEffect(() => {
    axios
      .get(baseAddressesAPI)
      .then(function (response) {
        const theA = response.data.addresses;
        setAddresses(theA);
        console.log(theA);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deleteAddress = (id: number) => {
    const isAddressConfirmedForDeletion = window.confirm(
      `Do you want to Delete Address: id - ${id}?`
    );
    if (isAddressConfirmedForDeletion) {
      axios
        .delete(`${baseAddressesAPI}/address/${id}`)
        .then(() => {
          setAddresses((prev) => prev.filter((address) => address.id !== id));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AddressTable addresses={addresses} onDelete={deleteAddress} />
          }
        />
        <Route path="/address/:addressId" element={<AddressDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
