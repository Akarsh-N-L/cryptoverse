import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Inews } from "../utils/interfaces";

export default function News(props: Inews) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_35586c6f9af2e44f0010a3851526def917935&q=crypto&language=en&size=${props.size}`
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-evenly items-center flex-wrap">
        {data.map((news: any) => (
          <NewsCard
            image={news.image_url}
            heading={news.title}
            desc={news.description}
          />
        ))}
      </div>
    </>
  );
}
