import React from "react";

const page = ({ params }: any) => {
  console.log(params);
  return <div>`Post ${params.postID}`</div>;
};

export default page;
