import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Trash = <FontAwesomeIcon icon={faTrash} />;

const ManageAllOrders = () => {
  const { isLoading } = useAuth();
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch(`https://travel-agency-0dnf.onrender.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  if (isLoading) {
    return (
      <div>
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
        </div>
      </div>
    );
  }

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete");
    if (proceed) {
      const url = `https://travel-agency-0dnf.onrender.com/allOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted sucessfully");
            const remainingUsers = orders.filter((user) => user._id !== id);
            setOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center my-5">Manage All Orders</h2>

      <div className="container my-5">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Customer</th>
              <th className="text-center">E-mail</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Address</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <td>
                  {order?.firstName} {order?.lastName}
                </td>
                <td>{order?.email}</td>
                <td>{order?.mobileNumber}</td>
                <td>
                  {order?.streetAddress}, {order?.City}, {order?.district}-
                  {order?.Postcode}
                </td>
                <td>{order?.cost}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteUser(order?._id)}
                    className="btn btn-link text-danger"
                  >
                    {Trash}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
