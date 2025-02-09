import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import AddressDetail from "./pages/AddressDetail";
import { AddressTable } from "./components/AddressTable/AddressTable";
import { useFetchAddresses } from "./hooks/useFetchAddresses";
import { deleteAddress } from "./services/addressService";

function App() {
  const addresses = useFetchAddresses();

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
