import React from "react";

import Hero from "./components/Hero";
import Level from "./components/Level";
import ArticleList from "./components/ArticleList";
import Popular from "./components/Popular";
import useFetch from "./hooks/useFetch";

const App: React.FC = () => {
  const { data, setData } = useFetch();
  return (
    <>
      <Hero data={data} setData={setData} />
      <Level />
      {data.results.length >= 1 ? (
        <ArticleList data={data} setData={setData} />
      ) : null}
      {data.results.length >= 1 ? (
        <Popular list={data.results} />
      ) : null}
    </>
  );
};

export default App;
