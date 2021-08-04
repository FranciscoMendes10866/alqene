import { useState, useEffect } from "react";

import wikipedia from "../api/wikipedia";

const useFetch = () => {
  const [data, setData] = useState({
    term: "",
    results: [],
  });

  useEffect(() => {
    if (data.term !== "") {
      const timeoutId = setTimeout(() => {
        (async () => {
          try {
            const res = await wikipedia.get("", {
              params: { srsearch: data.term },
            });
            setData({ ...data, results: res.data.query.search });
          } catch (err) {
            console.error(err);
          }
        })();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.term]);

  return { data, setData };
};

export default useFetch;
