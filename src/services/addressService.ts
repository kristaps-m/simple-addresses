import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAddresses = async () => {
  try {
    // const response = await fetch(`${API_BASE_URL}`);
    // if (!response) throw new Error("Failed to fetch addresses");
    // return response.json().addresses;
    console.log("API_BASE_URL", API_BASE_URL);
    let addressData;
    await axios
      .get(`${API_BASE_URL}`)
      .then(function (response) {
        // const theA = response.data.addresses;
        addressData = response.data.addresses;
        // setAddresses(theA);
        // console.log(addressData);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(addressData);
    return addressData;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return [];
  }
};

export const getAddress = async (id: number) => {
  return await fetch(`${API_BASE_URL}/address/${id}`, { method: "GET" });
};

export const deleteAddress = async (id: number) => {
  return await fetch(`${API_BASE_URL}/address/${id}`, { method: "DELETE" });
};
