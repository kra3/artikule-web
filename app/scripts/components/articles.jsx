import React from 'react';
import { Link } from 'react-router';

let buildArticleList = (times) => [...Array(3)].map((num, i) =>
  <article key={i + 1}>
    <span>{i + 1}</span>
    <header>
      <h2>Article title {i + 1}</h2>
    </header>
    <section className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor.</section>
    <Link to="home">read more ...</Link>
  </article>
)

const LatestArticles = (props) => {
  return (
    <section id="latest">
      {buildArticleList()}
    </section>
  )
};

export default LatestArticles;
