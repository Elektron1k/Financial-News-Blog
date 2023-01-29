import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card-article">
      <img
        src="https://images.mktw.net/im-299272"
        className="card-img-top card-img-size"
        alt="Picture"
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link to="/article/111">
            The New York Stock Exchange president says the stock market is not a
            casino. Here&apos;s what academic research says.
          </Link>
        </h5>
        <p className="card-text">https://images.mktw.net/im-299272</p>
      </div>
    </div>
  );
};

export default Card;
