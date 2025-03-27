import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import DocViewer from "react-doc-viewer";
import styles from "./parsingdocument.module.css";
export default function ParsingDocument() {
  const [data, setdata] = useState();
  const [upload, setupload] = useState([]);
  const handlechange = useCallback(
    (e) => {
      setdata(e.target.files[0]);
    },
    [setdata]
  );
  const handleupload = useCallback(() => {
    setupload([...upload, data]);

    alert("uploaded successfully");
  }, [setupload]);
  return (
    <section className="text-capitalize">
      <h5> file supported </h5>
      <p>
        bmp ,doc, docx ,html,jpg,jpeg,pdf, png ,ppt,pptx,tiff ,txt, xls,xlsx
      </p>
      <input
        type="file"
        name="wordupload"
        id="wordinput"
        className={styles.docfileupload}
        onChange={handlechange}
      />
      <Button type="button" onClick={handleupload}>
        {" "}
        Submit
      </Button>
      {data && <DocViewer documents={upload} />}
    </section>
  );
}
