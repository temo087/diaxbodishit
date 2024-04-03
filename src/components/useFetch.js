import axios from 'axios';
import  {  useState,useEffect } from 'react';

export default function useFetch(url) {
  const [date, setDate] = useState();
  const [errori, setErrori] = useState(null);
  useEffect(() => {
    axios.get(url)
      .then((res) => setDate(res.data))
      .catch((error) => setErrori(error));
  }, []);
  return { date, errori };
}