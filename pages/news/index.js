import Link from "next/link";
import { Fragment } from "react";
// our-domain/news

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/something ">Something</Link>
        </li>
        <li>
          <Link href="/news/else">Else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
