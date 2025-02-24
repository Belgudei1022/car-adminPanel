import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCars } from "../../redux/carSlice";
import { setUsers } from "../../redux/userSlice";
import { setRent } from "../../redux/rentSlice";

const FetchData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCarData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/cars");
      dispatch(setCars(response.data.cars || response.data));
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
      const response = await axios.get("http://localhost:3000/user/allUsers");
      dispatch(setUsers(response.data.users || response.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const getRentData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/rental/allRental"
      );
      // console.log(response);
      dispatch(setRent(response.data));
    } catch (error) {
      console.error("Error fetching rental data:", error);
      setError("Failed to fetch rentals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        await Promise.all([getCarData(), getUserData(), getRentData()]);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // return null;
};

export default FetchData;
