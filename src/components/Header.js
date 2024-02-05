import React from "react";
import Card from "./Card";
import ReactMarkdown from "react-markdown";

const Header = () => {
  const instructions = `
  This application demonstrates the utilization of web workers. It
  features a **\`longText\`** variable containing the contents of ten lengthy
  Wikipedia articles. The user can adjust the repetition count and
  toggle the use of web workers to observe the performance variance. By
  default, the repetition is set to **100 times** the **\`longText\`**. Click
  _Calculate_ view the results.
`;

  return (
    <Card>
      <h1 className="text-lg font-bold">Instructions</h1>
      <ReactMarkdown className="text-xs md:text-sm mr-4 text-justify">
        {instructions}
      </ReactMarkdown>
    </Card>
  );
};

export default Header;
