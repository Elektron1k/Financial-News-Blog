import React from 'react';
import { Link } from 'react-router-dom';

const Card = (prop) => {
  let { article } = prop;
  return (
    <div className="card-article">
      <img
        src={article.imageUrl}
        className="card-img-top card-img-size"
        alt="Picture"
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h5>
        <p className="card-text">{article.imageUrl}</p>
      </div>
    </div>
  );
};

export default Card;
