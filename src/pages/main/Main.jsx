// React import
import React, { useEffect, useState } from "react";

// Redux import
import {
  getAuctionDeadlineList,
  getAuctionHitList,
  getAuctionNewList,
} from "../../redux/modules/AuctionListSlice";

// Package import
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isIOS } from "react-device-detect";

// Component & Element & Shared import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuctionCategoryList from "../../components/auctionCategoryList/AuctionCategoryList";
import SwipeImage from "../../components/swipeImage/SwipeImage";
import { EventImg, InfoImg, Next } from "../../shared/images";
import PlusButton from "../../elements/button/PlusButton";
import Loading from "../loading/Loading";

// Style import
import {
  BannerContainer,
  LastItem,
  LastList,
  ListContainer,
  ListHeader,
  ListHeaderMore,
  MainContainer,
  MainContent,
  NewItem,
  NewItemContent,
  NewItemPrice,
  NewItemPriceWrap,
  NewItemTitle,
  NewList,
  PopularItem,
  PopularItemContent,
  PopularList,
  PopularPrice,
  PopularPriceWrap,
  PopularTitle,
  TagRegion,
  TagWrap,
} from "./Main.styled";
import { FontEvent, FontRegular } from "../../shared/fonts/font";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const auctionAllList = useSelector((state) => state.auctionList.auctionList);

  const auctionHitList = useSelector(
    (state) => state.auctionList.auctionHitList
  );
  const auctionNewList = useSelector(
    (state) => state.auctionList.auctionNewList
  );
  const auctionDeadlineList = useSelector(
    (state) => state.auctionList.auctionDeadlineList
  );

  const getAuctionData = async () => {
    await dispatch(getAuctionHitList());
    await dispatch(getAuctionNewList());
    await dispatch(getAuctionDeadlineList());
    await setLoading(false);
  };

  useEffect(() => {
    getAuctionData();
  }, [
    JSON.stringify(auctionAllList),
    // JSON.stringify(auctionHitList),
    // JSON.stringify(auctionNewList),
    // JSON.stringify(auctionDeadlineList),
  ]);

  const moveAuctionDetail = (auctionId) => {
    navigate(`/auctionDetail/${auctionId}`);
  };

  return (
    <MainContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Header logo={true} search={true} alarm={true} /> */}
          <Header logo={true} search={true} />

          <MainContent isIOS={isIOS}>
            {/* 배너 */}
            <BannerContainer>
              {/* 마감임박 경매 배너 */}
              {/* <SwipeImage isMain={true} data={auctionNewList} height="100%" /> */}

              <SwipeImage isMain={true} data={undefined} height="100%" width="100%"/>
            </BannerContainer>

            {/* 카테고리별, 지역별 TOP 6 */}
            <AuctionCategoryList isCategory={true} />
            <AuctionCategoryList isCategory={false} />

            {/* 인기 경매 */}
            <ListContainer>
              <ListHeader>지금 관심 폭발 중!</ListHeader>

              <PopularList>
                {auctionHitList?.map((item, idx) => (
                  <PopularItem
                    key={item.auctionId}
                    onClick={() => moveAuctionDetail(item.auctionId)}>
                    <img
                      src={item.multiImages[0]?.imgUrl}
                      alt="auction-popular-img"
                    />
                    <PopularItemContent idx={idx}>
                      <div>
                        <TagWrap isPopular={true} idx={idx}>
                          {item.delivery ? <span>택배</span> : null}
                          {item.direct ? <span>직거래</span> : null}
                          <span>{item.region}</span>
                        </TagWrap>
                        <PopularTitle>{item.title}</PopularTitle>
                      </div>
                      <PopularPriceWrap>
                        <span>현재 입찰가</span>
                        <PopularPrice>{item.nowPrice}원</PopularPrice>
                      </PopularPriceWrap>
                    </PopularItemContent>
                  </PopularItem>
                ))}
              </PopularList>
            </ListContainer>

            {/* 새로운 경매 */}
            <ListContainer>
              <ListHeader>
                <span>따끈따끈 새로 올라온 경매!</span>
                <ListHeaderMore onClick={() => navigate("/auctionList")}>
                  <span>전체 보기</span>
                  <Next />
                </ListHeaderMore>
              </ListHeader>

              <NewList>
                {auctionNewList?.map((item) => (
                  <NewItem
                    key={item.auctionId}
                    onClick={() => moveAuctionDetail(item.auctionId)}>
                    <img
                      src={item.multiImages[0]?.imgUrl}
                      alt="auction-new-img"
                    />
                    <NewItemContent>
                      <TagWrap>
                        {item.delivery ? <span>택배</span> : null}
                        {item.direct ? <span>직거래</span> : null}
                        <TagRegion>{item.region}</TagRegion>
                      </TagWrap>
                      <NewItemTitle>{item.title}</NewItemTitle>
                      <NewItemPriceWrap>
                        <span>입찰시작가</span>
                        <NewItemPrice>{item.nowPrice}원</NewItemPrice>
                      </NewItemPriceWrap>
                    </NewItemContent>
                  </NewItem>
                ))}
              </NewList>
            </ListContainer>

            {/* 마감임박 경매 */}
            {auctionDeadlineList.length > 0 && (
              <ListContainer>
                <ListHeader isLast={true}>
                  <span>서두르세요! 곧 경매가 끝나요</span>
                  <ListHeaderMore onClick={() => navigate("/auctionList")}>
                    <span>전체 보기</span>
                    <Next />
                  </ListHeaderMore>
                </ListHeader>

                <LastList>
                  {auctionDeadlineList?.map((item) => (
                    <LastItem
                      key={item.auctionId}
                      onClick={() => moveAuctionDetail(item.auctionId)}>
                      <img
                        src={item.multiImages[0]?.imgUrl}
                        alt="auction-last-img"
                      />
                      <TagWrap>
                        {item.delivery ? <span>택배</span> : null}
                        {item.direct ? <span>직거래</span> : null}
                        <TagRegion>{item.region}</TagRegion>
                      </TagWrap>
                      <NewItemTitle>{item.title}</NewItemTitle>
                      <NewItemPriceWrap>
                        <span>최고입찰가</span>
                        <NewItemPrice>{item.nowPrice}원</NewItemPrice>
                      </NewItemPriceWrap>
                    </LastItem>
                  ))}
                </LastList>
              </ListContainer>
            )}
          </MainContent>

          <PlusButton />

          <Footer home={true} />
        </>
      )}
    </MainContainer>
  );
};

export default Main;
