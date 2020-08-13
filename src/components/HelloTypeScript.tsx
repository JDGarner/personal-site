import * as React from "react";

export interface HelloTypeScriptProps {
  compiler: string;
  framework: string;
}

export const HelloTypeScript = (props: HelloTypeScriptProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
