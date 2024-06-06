import React, { forwardRef, useEffect, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import BookShelf from "../components/BookShelf";

const Home = forwardRef((props, ref) => {
  const [value, setvalue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value.trim() !== "") {
        fetchBooks(value);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  const fetchBooks = async (val) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${val}&limit=10&page=1`
      );
      setData(res.data.docs);
    } catch (e) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div className="container">
      <Input ref={ref} value={value} onChange={handleInputChange} />
      {isLoading && <p>Loading...</p>}
      {data.length > 0 && <BookShelf books={data} showButton={true}/>}
    </div>
  );
});

export default Home;
