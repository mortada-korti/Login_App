import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      NotFound
      <div>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
