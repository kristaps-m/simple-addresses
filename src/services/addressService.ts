import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAddresses = async () => {
  try {
    let addressData;
    await axios
      .get(`${API_BASE_URL}`)
      .then(function (response) {
        addressData = response.data.addresses;
      })
      .catch(function (error) {
        console.log(error);
      });
    return addressData;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return [];
  }
};

export const getAddress = async (id: string | undefined) => {
  let addressData;
  try {
    await axios
      .get(`${API_BASE_URL}/address/${id}`)
      .then(function (response) {
        addressData = response.data.address;
      })
      .catch(function (error) {
        console.log(error);
      });
    return addressData;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return {};
  }
};

export const deleteAddress = async (id: number) => {
  const isAddressConfirmedForDeletion = window.confirm(
    `Do you want to Delete Address: id - ${id}?`
  );
  if (isAddressConfirmedForDeletion) {
    return await fetch(`${API_BASE_URL}/address/${id}`, { method: "DELETE" });
  }
};
