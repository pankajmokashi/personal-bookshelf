import React, { useState } from "react";
import axios from "axios";
import BookShelf from "../components/BookShelf";
import Input from "../components/Input";

const Home = () => {
  const [data, setData] = useState([]);

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  const fetchBooks = async (value) => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${value}&limit=10&page=1`
      );
      setData(res.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <Input
        onChange={debounce((e) => {
          fetchBooks(e);
        })}
      />
      {data.length > 0 && <BookShelf books={data} showButton={true} />}
    </div>
  );
};

export default Home;
