import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../services/requestFirebase';

const Article = () => {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    getArticleById(params.id).then((article) => {
      setArticle(article);
    });
  }, []);
  return (
    <div className="container-article">
      <h2 className="article-title">{article.title}</h2>
      <img src={article.imageUrl} className="article-img" />
      <p className="article-description">{article.description}</p>
      <div className="article-expert-comment">
        <h3 className="article-expert-comment-title">Experts Comment</h3>
        <p className="article-expert-comment-text">{article.expertComment}</p>
      </div>
    </div>
  );
};

export default Article;
