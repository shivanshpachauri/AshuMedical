import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./parsingdocument.module.css";
import { Viewer as PDFViewer, Worker } from "@react-pdf-viewer/core";
import * as XLSX from "xlsx";
import { pdfjs } from "@react-pdf-viewer/core";
import mammoth from "mammoth";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js`;

export default function ParsingDocument() {
  const [data, setData] = useState(null);
  const [upload, setUpload] = useState([]);

  const handleChange = useCallback((e) => {
    setData(e.target.files[0]);
  }, []);

  const handleUpload = useCallback(() => {
    if (!data) return alert("Please select a file to upload.");

    const fileObject = {
      uri: URL.createObjectURL(data),
      fileType: data.type,
      fileName: data.name,
    };

    setUpload((prevUpload) => [...prevUpload, fileObject]);
    alert("Uploaded successfully");
    setData(null);
  }, [data]);

  const renderFileViewer = (file) => {
    const fileType = file.fileType;
    if (fileType.includes("pdf")) {
      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <PDFViewer fileUrl={file.uri} />
        </Worker>
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
    if (fileType.includes("spreadsheet") || fileType.includes("excel")) {
      return <ExcelViewer file={file} />;
    }
    if (fileType.includes("wordprocessingml") || fileType.includes("doc")) {
      return <DocViewer file={file} />;
    }
    return <p>Unsupported File Type</p>;
  };

  return (
    <section>
      <h5>File Supported</h5>
      <p>PDF, DOCX, XLSX, PPTX, TXT, Images</p>
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
      {upload.length > 0 && renderFileViewer(upload[upload.length - 1])}
    </section>
  );
}

function ExcelViewer({ file }) {
  const [data, setData] = useState(null);

  const readExcel = async () => {
    const response = await fetch(file.uri);
    const blob = await response.arrayBuffer();
    const workbook = XLSX.read(blob, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    setData(XLSX.utils.sheet_to_json(sheet, { header: 1 }));
  };

  return (
    <div>
      <Button onClick={readExcel}>Load Excel</Button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
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
          className=" bg-primary rounded "
          style={{
            overflowY: "scroll",
            height: "500px",
            overflowX: "hidden",
            wordWrap: "break-word",
          }}
        >
          {content}
        </pre>
      )}
    </div>
  );
}
