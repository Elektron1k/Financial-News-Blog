import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAll } from '../services/requestFirebase';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAll().then((render) => setArticles(render));
  }, []);
  return (
    <div className="container-grid">
      {articles.length ? (
        articles.map((article) => <Card key={article.id} article={article} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Articles;
