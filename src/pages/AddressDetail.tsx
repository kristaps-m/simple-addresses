import { useParams } from "react-router-dom";
import { useFetchOneAddress } from "../hooks/useFetchOneAddress";

export default function AddressDetail() {
  const { addressId } = useParams();
  const { oneAddress, isOneAddressLoading } = useFetchOneAddress(addressId);

  return (
    <div style={{ marginLeft: "8rem" }}>
      <h2>Address Details</h2>
      <p>
        <b>Address ID:</b> {addressId}
      </p>
      {isOneAddressLoading ? (
        <h1>
          <b>Loading......</b>
        </h1>
      ) : (
        <>
          <p>
            <b>Address:</b> {oneAddress?.address}
          </p>
          <p>
            <b>Country:</b> {oneAddress?.country}
          </p>
          <p>
            <b>Zip:</b> {oneAddress?.zip}
          </p>
        </>
      )}
    </div>
  );
}
