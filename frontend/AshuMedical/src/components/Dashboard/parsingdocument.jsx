import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import FileViewer from "react-file-viewer";
import styles from "./parsingdocument.module.css";
import DomPurify from "dompurify";
export default function ParsingDocument() {
  const [data, setData] = useState(null);
  const [upload, setUpload] = useState([]);

  const handleChange = useCallback((e) => {
    setData(e.target.files[0]);
  }, []);

  const handleUpload = useCallback(() => {
    if (data) {
      const documentObject = {
        uri: URL.createObjectURL(data),
        fileType: data.type,
        fileName: data.name,
      };

      setUpload((prevUpload) => [...prevUpload, documentObject]);
      alert("Uploaded successfully");
      setData(null); // Clear the file input after upload
    } else {
      alert("Please select a file to upload.");
    }
  }, [data]);
  // const Filepurified = DomPurify.sanitize(
  //   <FileViewer
  //     fileType={upload[upload.length - 1].fileType.split("/")[1]} // Get the file type
  //     filePath={upload[upload.length - 1].uri}
  //     onError={(e) => console.log(e)}
  //   />
  // );
  return (
    <section className="text-capitalize">
      <h5>File Supported</h5>
      <p>
        bmp, doc, docx, html, jpg, jpeg, pdf, png, ppt, pptx, tiff, txt, xls,
        xlsx
      </p>
      <input
        type="file"
        name="wordupload"
        id="wordinput"
        className={styles.docfileupload}
        onChange={handleChange}
      />
      <Button type="button" onClick={handleUpload}>
        Submit
      </Button>
      {upload.length > 0 && (
        <FileViewer
          fileType={upload[upload.length - 1].fileType.split("/")[1]} // Get the file type
          filePath={upload[upload.length - 1].uri}
          onError={(e) => console.log(e)}
        />
      )}
    </section>
  );
}
