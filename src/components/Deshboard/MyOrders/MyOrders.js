import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Trash = <FontAwesomeIcon icon={faTrash} />;

const MyOrders = () => {
  const { user, isLoading } = useAuth();
  // console.log(user.email);
  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    fetch(
      `https://travel-agency-0dnf.onrender.com/allOrders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
      <h2 className="text-center my-5">My Order</h2>

      <div className="container my-5">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <td className="text-center">
                  {order.firstName} {order.lastName}
                </td>
                <td className="text-center">{order?.email}</td>
                <td className="text-center">{order?.title}</td>
                <td className="text-center">{order?.cost}</td>

                <td className="text-center">
                  {order.payment ? (
                    <button className="fw-bold btn btn-success">Paid</button>
                  ) : (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="fw-bold btn btn-primary">Pay</button>
                    </Link>
                  )}
                </td>
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

export default MyOrders;
