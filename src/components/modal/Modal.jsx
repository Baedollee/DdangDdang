import React from "react";

const Modal = () => {
  const regionList = [
    "서울 전체",
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  return (
    <div>
      <div>지역선택</div>
      <div>
        {regionList.map((index, item) => {
          return <div key={item}>{index}</div>;
        })}
      </div>
    </div>
  );
};

export default Modal;
