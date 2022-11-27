import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Error from "../../components/Error";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import "./styles.css"

export interface IClient {
  id: string;
  name: string;
  email: string;
  cellphone: string;
}

const User = () => {
  const [ data, setData ] = useState<IClient>();
  const [ error, setError ] = useState<any>()
  const [ loading, setLoading ] = useState(false)
  const { token } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get("https://byecarbackend-production.up.railway.app/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Header />
    <section className="container">
      {data ? (<Card data={data} />) : (null)}
      {loading ? (<Loader />) : (null)}
      {error ? (<Error error={error}></Error>) : (null)}
    </section>
    </>
  );
};

export default User;
