// React import
import React, { Fragment, useState, useEffect } from "react";

// Redux import
import { useDispatch, useSelector } from "react-redux";
import { auctionSearchThunk } from "../../redux/modules/SearchSlice";
import { auctionItemList } from "../../redux/modules/AuctionListSlice";

// Package import
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../shared/Cookie";

// Component import
import Footer from "../../components/footer/Footer";
import SearchCard from "./SearchCard";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useParams();
  const searchList = useSelector((state) => state.auctionList);
  const navigate = useNavigate();
  const userLocation = useSelector((state) => state.userLocation);
  const token = getCookie("accessToken");

  useEffect(() => {
    dispatch(auctionSearchThunk());
  }, [dispatch]);

  const onKeyDown = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter" && userLocation) {
      dispatch(
        auctionItemList({
          auctio: e.target.value,
          navigate,
          location: userLocation,
        })
      );
    }
  };

  return (
    <Fragment>
      <SearchBox>
        <SearchBoxInputGroup>
          <SearchBoxInputWrap>
            <SearchBoxInput
              type="text"
              placeholder="검색어를 입력해주세요."
              onKeyDown={onKeyDown}
            />
            <SearchBoxInputIcon>
              <IoSearchOutline className="icon" />
            </SearchBoxInputIcon>
          </SearchBoxInputWrap>
        </SearchBoxInputGroup>
        <SearchBoxFilterGroup>
          <SearchBoxFilterTitleSpan>최근 검색어</SearchBoxFilterTitleSpan>
          <SearchBoxFilterWrap>
              <div className="SearchResultHeader">
                <p className="SearchResultHeaderTitle">{search}</p>
              </div>
              <div className="SearchResultCardWrap">
              {searchList ? (
                  searchList.map((item, index) => {
                    return <SearchCard searchList={item} />;
                  })
                ) : (
                  <LoadingWrap>
                    <Loadingtext>검색 결과가 없습니다.</Loadingtext>
                  </LoadingWrap>
                )}
              </div>
          </SearchBoxFilterWrap>
        </SearchBoxFilterGroup>
      </SearchBox>
      <Footer />
    </Fragment>
  );
};

export default Search;

export const SearchBox = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
`;

export const SearchBoxInputGroup = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  margin-top: 10%;
`;

export const SearchBoxInputWrap = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBoxInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  width: 90%;
  background-color: #dedede;
  height: 36px;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 35px;
  border: 1px solid red;
  &:focus {
    outline: none;
    border-color: #6d6d6d;
  }
`;

export const SearchBoxInputIcon = styled.div`
  .icon {
    position: absolute;
    color: #6d6d6d;
    top: 50%;
    left: 40px;
    transform: translate(-50%, -50%);
  }
`;

export const SearchBoxFilterGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  margin-top: 7%;
`;

export const SearchBoxFilterTitleSpan = styled.span`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
`;

export const SearchBoxFilterWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;

export const LoadingWrap = styled.div``;

export const Loadingtext = styled.div``;
