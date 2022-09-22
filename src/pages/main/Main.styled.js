// Package import
import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;

  position: absolute;
  top: 70px;
  bottom: 70px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ListContainer = styled.div`
  margin: 32px 20px;
`;

export const ListHeader = styled.span`
  font-size: ${(props) =>
    props.isLast ? props.theme.fontSizes.md : props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListHeaderMore = styled.div`
  color: ${(props) => props.theme.colors.Gray3};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.normal};

  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 6px;
    height: 10px;

    path {
      fill: ${(props) => props.theme.colors.Gray3};
    }
  }
`;

export const PopularList = styled.div`
  margin-top: 16px;

  display: flex;
  gap: 12px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PopularItem = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;

    border-radius: 8px;
    z-index: -5;

    position: absolute;

    object-fit: cover;
  }
`;

export const PopularItemContent = styled.div`
  width: 60%;
  min-width: 185px;
  height: 250px;
  padding: 16px;

  color: ${(props) => props.theme.colors.White};
  border-radius: 8px;
  background: linear-gradient(180deg, #4d71ff 22.5%, rgba(0, 0, 0, 0.4) 91.9%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) => {
    switch (props.idx) {
      case 0:
        return css`
          background: linear-gradient(
            180deg,
            #4d71ff 22.5%,
            rgba(0, 0, 0, 0.4) 91.9%
          );
        `;
      case 1:
        return css`
          background: linear-gradient(
            180deg,
            #1dc79a 22.5%,
            rgba(0, 0, 0, 0.4) 91.9%
          );
        `;
      case 2:
        return css`
          background: linear-gradient(
            180deg,
            #fdb024 22.5%,
            rgba(0, 0, 0, 0.4) 91.9%
          );
        `;
      case 3:
        return css`
          background: linear-gradient(
            180deg,
            #ff664d 22.5%,
            rgba(0, 0, 0, 0.4) 91.9%
          );
        `;
      default:
        return;
    }
  }};
`;

export const TagWrap = styled.div`
  margin-bottom: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  span {
    padding: 2px 4px;

    /* color: ${(props) =>
      props.isPopular ? props.theme.colors.Blue1 : props.theme.colors.White}; */
    background-color: ${(props) =>
      props.isPopular ? props.theme.colors.White : props.theme.colors.Blue1};
    border-radius: 100px;

    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.medium};

    ${(props) => {
      if (props.isPopular) {
        switch (props.idx) {
          case 0:
            return css`
              color: ${(props) => props.theme.colors.Blue1};
            `;
          case 1:
            return css`
              color: ${(props) => props.theme.colors.Green1};
            `;
          case 2:
            return css`
              color: ${(props) => props.theme.colors.Yellow};
            `;
          case 3:
            return css`
              color: ${(props) => props.theme.colors.Red};
            `;
          default:
            return;
        }
      } else {
        return css`
          color: ${(props) => props.theme.colors.White};
        `;
      }
    }}
  }
`;

export const TagRegion = styled.span`
  color: ${(props) => props.theme.colors.Blue1} !important;
  background-color: ${(props) => props.theme.colors.White} !important;
  border: 1px solid ${(props) => props.theme.colors.Blue1};
`;

export const PopularTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.normal};
`;

export const PopularPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const PopularPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl} !important;
  font-weight: ${(props) => props.theme.fontWeights.medium} !important;
`;

export const NewList = styled.div`
  margin: 16px auto;

  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const NewItem = styled.div`
  display: flex;

  img {
    width: 75px;
    height: 75px;
    border-radius: 8px;

    object-fit: cover;
  }
`;

export const NewItemContent = styled.div`
  width: calc(100% - 95px);
  margin-left: 18px;
`;

export const NewItemTitle = styled.span`
  width: 100%;

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.normal};

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NewItemPriceWrap = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.normal};

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NewItemPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const LastList = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 16px 0px;
`;

export const LastItem = styled.div`
  width: 165px;
	max-width: 48%;

  img {
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    border-radius: 8px;

    object-fit: cover;
  }
`;

export const AddAuction = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  position: absolute;
  bottom: 102px;
  right: 20px;
`;
