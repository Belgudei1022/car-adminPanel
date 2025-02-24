import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCars } from "../../redux/carSlice";
import { getUsers } from "../../redux/userSlice";

const FetchData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const getCarData = async () => {
  try {
    setLoading(true);
    const response = await axios.get("http://localhost:3000/cars");
    console.log("Car API Response:", response.data);
    dispatch(setCars(response.data.cars || response.data)); // Ensure this matches your API response
  } catch (error) {
    console.error("Error fetching car data:", error);
    setError("Failed to fetch cars");
  } finally {
    setLoading(false);
  }
};
  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/user");
      console.log("User API Response:", response.data);
      dispatch(getUsers(response.data.users || response.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarData();
    getUserData();
  }, [dispatch]); 

  // if (loading) return <div>Loading...</div>;
  // return null;
};

export default FetchData;
