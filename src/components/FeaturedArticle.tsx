import React from "react";

const FeaturedArticle: React.FC<any> = ({ article }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer className="card-footer">
        <div className="media">
          <div className="media-content p-4">
            <p className="title is-4">{article.title}</p>
            <p
              className="subtitle is-6 pr-5"
              dangerouslySetInnerHTML={{
                __html: article.snippet.substring(0, 300) + "...",
              }}
            ></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturedArticle;
