import React from "react";

const Docs = ({ params }) => {
  return (
    <div>
      <h1>Docs Home Page</h1>
      if(params.slug.length === 2)
      {
        <h1>
          {" "}
          Viewing docs for features {params.slug[0]} and concept{" "}
          {params.slug[1]}
        </h1>
      }
    </div>
  );
};

export default Docs;
