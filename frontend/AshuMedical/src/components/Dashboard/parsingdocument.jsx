import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./parsingdocument.module.css";
import { Document, Page } from "@react-pdf/renderer";
import mammoth from "mammoth";
import "./parsingdocument.css";
import Swal from "sweetalert2";

export default function ParsingDocument() {
  // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js`;
  const [data, setData] = useState(null);
  const [upload, setUpload] = useState([]);

  const handleChange = useCallback((e) => {
    setData(e.target.files[0]);
  }, []);

  const handleUpload = useCallback(() => {
    if (!data) return Swal.fire("Please select a file to upload.");

    const fileObject = {
      uri: URL.createObjectURL(data),
      fileType: data.type,
      fileName: data.name,
    };

    setUpload((prevUpload) => [...prevUpload, fileObject]);
    Swal.fire("Uploaded successfully");
    setData(null);
  }, [data]);

  const renderFileViewer = (file) => {
    const fileType = file.fileType;
    if (fileType.includes("pdf")) {
      return (
        <Document file={file}>
          <Page size="A4" />
        </Document>
      );
    }
    if (fileType.includes("image")) {
      return (
        <img
          className="rounded m-2 p-2"
          src={file.uri}
          alt="Uploaded file"
          style={{ height: "500px", width: "500px", objectFit: "cover" }}
        />
      );
    }
    if (fileType.includes("text")) {
      return <pre>{file.fileName}</pre>;
    }

    if (fileType.includes("wordprocessingml") || fileType.includes("doc")) {
      return <DocViewer file={file} />;
    }
    return <p>Unsupported File Type</p>;
  };

  return (
    <section>
      <h5>File Supported</h5>
      <p>PDF, DOCX, PPTX, TXT, Images</p>
      <div className="d-flex">
        <input
          type="file"
          name="wordupload"
          id="wordinput"
          className={styles.docfileupload}
          onChange={handleChange}
        />
        <Button
          style={{ backgroundColor: "darkblue", height: "50px" }}
          type="button"
          className="m-2 p-2"
          onClick={handleUpload}
        >
          Submit
        </Button>
      </div>
      <div className="">
        {upload.length > 0 && renderFileViewer(upload[upload.length - 1])}
      </div>
    </section>
  );
}

function DocViewer({ file }) {
  const [content, setContent] = useState(null);

  const readDocx = async () => {
    const response = await fetch(file.uri);
    const arrayBuffer = await response.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    setContent(result.value);
  };

  return (
    <div className="container   ">
      <Button
        style={{ backgroundColor: "darkblue", margin: ".25rem" }}
        onClick={readDocx}
      >
        Load DOCX
      </Button>
      {content && (
        <pre
          className="m-2 p-4  documentrenderer bg-primary rounded "
          style={{
            overflow: "scroll",
            height: "500px",
            overflowWrap: "break-word",
          }}
        >
          {content}
        </pre>
      )}
    </div>
  );
}
