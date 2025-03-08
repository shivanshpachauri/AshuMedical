import { useCallback, useState } from "react";
import { FixedSizeList as List } from "react-window";
import Papa from "papaparse";
import styles from "./parsingcsv.module.css";

export default function Parsingcsv() {
  const [data, setData] = useState([]);

  const handleChange = useCallback(
    (e) => {
      Papa.parse(e.target.files[0], {
        header: false,
        complete: (results) => {
          setData(results.data);
        },
      });
    },
    [setData]
  );

  return (
    <section>
      <input
        type="file"
        name="csvupload"
        id="csvinput"
        className={styles.csvfileupload}
        onChange={handleChange}
      />
      <List
        height={400} // Set the height of the list
        itemCount={data.length}
        itemSize={35} // Set the height of each row
        width={"100%"}
        style={{ border: "1px solid black" }}
      >
        {({ index, style }) => (
          <div style={style} className={styles.listrows} key={index}>
            {data[index].join(", ")}{" "}
            {/* Join the row items for better display */}
          </div>
        )}
      </List>
    </section>
  );
}
