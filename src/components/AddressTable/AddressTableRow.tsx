import { Link } from "react-router-dom";
import { IAddressTableProps } from "../../interfaces/IAddressTableProps";
import { IAddress } from "../../interfaces/IAddress";

interface IAddressTableRowProps extends IAddressTableProps {
  address: IAddress;
}
export function AddressTableRow({ address, onDelete }: IAddressTableRowProps) {
  return (
    <tr>
      <td>
        <Link to={`/address/${address.id}`}>{address?.id}</Link>
      </td>
      <td>{address?.address}</td>
      <td>{address?.country}</td>
      <td>{address?.zip}</td>
      <td>
        <button
          onClick={() => onDelete(address.id)}
          style={{ background: "red", color: "white", borderRadius: "2rem" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
