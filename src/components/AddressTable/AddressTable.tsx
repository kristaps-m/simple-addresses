import { IAddress } from "../../interfaces/IAddress";
import { AddressTableRow } from "./AddressTableRow";
import { IAddressTableProps } from "../../interfaces/IAddressTableProps";

interface IProps extends IAddressTableProps {
  addresses: IAddress[];
}

export function AddressTable({ addresses, onDelete }: IProps) {
  return (
    <table className="addressesTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Address</th>
          <th>Country</th>
          <th>Zip</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addresses?.map((address) => (
          <AddressTableRow
            key={address.id}
            address={address}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
