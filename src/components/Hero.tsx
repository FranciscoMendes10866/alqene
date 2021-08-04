import React from "react";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Hero: React.FC<any> = ({ data, setData }) => {
  return (
    <div className="container">
      <section className="hero is-large">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-6">
              <h1 className="is-size-1 has-text-centered has-text-weight-semibold mb-5">
                Welcome to <span className="has-text-link">Wikipedia</span>
              </h1>
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={data.term}
                onChange={(e: InputEvent) =>
                  setData({ ...data, term: e.target.value })
                }
              />
              <p className="is-size-5 has-text-centered has-text-weight-medium mt-4">
                Explore <span className="has-text-link">millions</span> of
                articles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
