import React from "react";

import FeaturedArticle from "./FeaturedArticle";
import LatestFeatured from "./LatestFeatured";

const ArticleList: React.FC<any> = ({ data }) => {
  const searchTerm = data.term.charAt(0).toUpperCase() + data.term.slice(1);
  const latestArticles = [...data.results].splice(0, 5);
  return (
    <section className="section">
      <div className="container">
        <h1 className="is-size-2 mb-5 has-text-weight-semibold has-text-black">
          Featured Article on {searchTerm}
        </h1>
        <div className="columns">
          <div className="column is-7">
            <FeaturedArticle article={data.results[0]} />
          </div>
          <div className="column is-5">
            <h2 className="is-size-4 m4-5 has-text-weight-semibold has-text-black">
              Latest Featured
            </h2>
            {latestArticles.map((el: any) => (
              <LatestFeatured
                key={el.pageid}
                title={el.title}
                content={el.snippet}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
