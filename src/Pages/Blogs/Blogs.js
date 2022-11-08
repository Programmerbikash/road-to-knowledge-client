import React from "react";

const Blogs = () => {
  return (
    <div className="mt-24 mb-8 text-center w-4/5 mx-auto bg-slate-300 rounded-3xl p-5">
      <div tabIndex={0} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
        Difference between SQL and NoSQL
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>There are five practical differences between SQL and NoSQL: <br /> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          
          <p> &#9827; <span className="font-semibold text-xl">Language:-</span> SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.</p>
          
          <p> &#9827; <span className="font-semibold text-xl">Scalability:-</span> Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</p>
          
          <p> &#9827; <span className="font-semibold text-xl">Structure:-</span> SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.</p>
        </div>
      </div>
      <div tabIndex={1} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />
          &#9827; The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br />
          &#9827; JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. <br />
          &#9827; Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
        </div>
      </div>
      <div tabIndex={2} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>tabIndex={2} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div tabIndex={3} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>tabIndex={3} attribute is necessary to make the div focusable</p>
        </div>
          </div>
          
          
    </div>
  );
};

export default Blogs;
