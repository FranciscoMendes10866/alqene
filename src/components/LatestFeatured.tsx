import React from "react";

const LatestFeatured: React.FC<any> = ({ title, content }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <span className="has-text-grey">{title}</span>
              <br />
              <span
                dangerouslySetInnerHTML={{
                  __html: content.substring(0, 100) + "...",
                }}
              ></span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LatestFeatured;
