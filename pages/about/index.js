import Link from "next/link";
import { Fragment } from "react";

// our-domain/about

const AboutUS = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/about/1">Yash</Link>
        </li>
        <li>
          <Link href="/about/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/about/3">Suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutUS;
