import React from "react";

const Popular: React.FC<any> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="is-size-2 mb-5 has-text-weight-semibold has-text-black">
          In the news
        </h1>
        <div className="columns is-flex-wrap-wrap mt-5 py-5">
          {list.map((el: any) => (
            <div className="column is-3" key={el.pageid}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content p-4">
                      <p className="title is-4">{el.title}</p>
                      <p
                        className="subtitle is-6 pr-5"
                        dangerouslySetInnerHTML={{
                          __html: el.snippet,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
