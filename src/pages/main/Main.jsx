// React import
import React from "react";

// Component import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuctionCategoryList from "../../components/auctionCategoryList/AuctionCategoryList";

// Style import
import {
  MainContainer,
  MainContent,
  Banner,
  BannerTitle,
  BannerContent,
  BannerPriceWrap,
  BannerPrice,
  ListContainer,
  PopularItem,
  TagWrap,
  PopularList,
  PopularTitle,
  PopularPriceWrap,
  PopularPrice,
  NewItem,
  NewItemContent,
  NewItemTitle,
  NewItemPriceWrap,
  NewItemPrice,
  NewList,
  ListHeader,
  ListHeaderMore,
  LastList,
  LastItem,
} from "./Main.styled";

const Main = () => {
  return (
    <MainContainer>
      <Header logo={true} />

      <MainContent>
        {/* 배너 */}
        <Banner>
          <BannerContent>
            <span>6일 12:36:01</span>
            <BannerTitle>
              폰트사이즈가 고민입니다.. 최대길이는 이 정도입니다.
            </BannerTitle>
          </BannerContent>
          <BannerPriceWrap>
            <span>최고입찰가</span>
            <BannerPrice>{598000}원</BannerPrice>
          </BannerPriceWrap>
        </Banner>

        {/* 카테고리별, 지역별 TOP 6 */}
        <AuctionCategoryList isCategory={true} />
        <AuctionCategoryList isCategory={false} />

        {/* 인기 경매 */}
        <ListContainer>
          <ListHeader>지금 관심 폭발 중!</ListHeader>

          <PopularList>
            {Array.from({ length: 3 }, () => (
              <PopularItem>
                <div>
                  <TagWrap backgroundColor="white">
                    <span>택배</span>
                    <span>마포구</span>
                  </TagWrap>
                  <PopularTitle>예시 텍스트입니다. 최대 두줄</PopularTitle>
                </div>
                <PopularPriceWrap>
                  <span>현재 입찰가</span>
                  <PopularPrice>{18000}원</PopularPrice>
                </PopularPriceWrap>
              </PopularItem>
            ))}
          </PopularList>
        </ListContainer>

        {/* 새로운 경매 */}
        <ListContainer>
          <ListHeader>
            <span>따끈따끈 새로 올라온 경매!</span>
            <ListHeaderMore>
              <span>전체보기</span>
              <img src="maskable.png" alt="all" />
            </ListHeaderMore>
          </ListHeader>

          <NewList>
            {Array.from({ length: 3 }, () => (
              <NewItem>
                <img src="maskable.png" alt="auction-img" />
                <NewItemContent>
                  <TagWrap backgroundColor="gray">
                    <span>택배</span>
                    <span>성산구</span>
                  </TagWrap>
                  <NewItemTitle>
                    제목은 한 줄만 노출됩니다. 길어진 길이는 안보입니다.
                  </NewItemTitle>
                  <NewItemPriceWrap>
                    <span>입찰시작가</span>
                    <NewItemPrice>{5000}원</NewItemPrice>
                  </NewItemPriceWrap>
                </NewItemContent>
              </NewItem>
            ))}
          </NewList>
        </ListContainer>

        {/* 마감임박 경매 */}
        <ListContainer>
          <ListHeader fontSize="18px">
            <span>서두르세요! 곧 경매가 끝나요</span>
            <ListHeaderMore>
              <span>전체보기</span>
              <img src="maskable.png" alt="all" />
            </ListHeaderMore>
          </ListHeader>

          <LastList>
            {Array.from({ length: 4 }, () => (
              <LastItem>
                <img src="maskable.png" alt="auction-img" />
                <TagWrap backgroundColor="gray">
                  <span>택배</span>
                  <span>성산구</span>
                </TagWrap>
                <NewItemTitle>
                  제목은 한 줄만 노출됩니다. 길어진 길이는 안보입니다.
                </NewItemTitle>
                <NewItemPriceWrap>
                  <span>최고입찰가</span>
                  <NewItemPrice>{5000}원</NewItemPrice>
                </NewItemPriceWrap>
              </LastItem>
            ))}
          </LastList>
        </ListContainer>
      </MainContent>

      <Footer />
    </MainContainer>
  );
};

export default Main;
