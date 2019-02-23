import React, { useRef } from "react"
import { Link } from 'gatsby';

export default () => {
  const linkRef = useRef(null);
  return (
    <Link
      ref={linkRef}
      to="https://github.com/gatsbyjs/gatsby-starter-hello-world"
    >
      Hello world!
    </Link>
  );
}
