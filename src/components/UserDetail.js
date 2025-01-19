import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { useParams, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./UserDetail.css";

const UserDetail = () => {
  const { users, fetchUsers, loading } = useContext(UserContext);
  const { darkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id));

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div className={`loading ${darkMode ? 'dark': 'light'}`}>
      <ThreeDots
          height="50"
          width="50"
          color="blue"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>;

  if (!user) return <div className={`error ${darkMode ? 'dark' : 'light'}`}>
    <img src='https://static.thenounproject.com/png/2247019-200.png' alt='error-img' />
    <p>User not found</p>
      </div>;

  return (
    <div className={`user-detail ${darkMode ? "dark" : "light"}`}>
      <div className={`details-card ${darkMode? 'dark-card' : null}`}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Website: {user.website}</p>
      </div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default UserDetail;
