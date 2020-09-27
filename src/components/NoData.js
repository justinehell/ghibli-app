import React from "react";
import DetailedPageRelatedImg from "../styledComponents/DetailedPage/DetailedPageRelatedImg";

const NoData = () => {
  return (
    <div style={{ width: "80px", textAlign: "center" }}>
      <DetailedPageRelatedImg
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThxlxfSxZUlnZuOZ4tPJiyYaTsJgxIKeF26A&usqp=CAU"
        alt="unknown"
      />
      <p style={{ color: "#282c34" }}>No data</p>
    </div>
  );
};
export default NoData;
