import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, 'articles'));
  let articles = [];
  querySnapshot.forEach((doc) => {
    articles.push({ ...doc.data(), id: doc.id });
  });

  return articles;
};

const getArticleById = async (id) => {
  const allArticles = await getAll();
  let articleById = {};
  allArticles.forEach((article) => {
    if (article.id === id) {
      articleById = article;
    }
  });
  return articleById;
};

export { getAll, getArticleById };
