import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
// import { createDOMPurify } from "dompurify";
export default function aiformatter(inputstring) {
  //   could also use marked https://www.npmjs.com/package/marked
  // marked.setOptions({ breaks: true });
  const data = marked.parse(inputstring);
  const clean = DOMPurify.sanitize(data);

  return clean;
}
