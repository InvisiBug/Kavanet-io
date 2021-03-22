import React from "react";
import { Layout } from "../";
import { MDXProvider } from "@mdx-js/react";

const MyH1 = (props) => <h1 className="bg-gray-200 h-full" {...props} />;

const components = {
  h1: MyH1,
};

const GuideTemplate = ({ children }) => {
  return (
    <Layout>
      <h1>Guide Template</h1>
      <div>{children}</div>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  );
};

export default GuideTemplate;
