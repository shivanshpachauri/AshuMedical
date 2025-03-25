import React from "react";

export default function aiformatter(inputstring) {
  //   could also use marked https://www.npmjs.com/package/marked
  // marked.setOptions({ breaks: true });
  // console.log(marked("This is line one.\nThis is line two."));

  const boldText = inputstring.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  const newText = boldText.replace(/\n/g, "<br/>");
  const withoutapostrophe = newText.replace(/""/g, "");
  // console.log(newText);
  console.log(withoutapostrophe);

  return withoutapostrophe;
}
