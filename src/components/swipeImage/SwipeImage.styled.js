// Package import
import styled from "styled-components";

export const SwipeContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};

  color: white;
  position: relative;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const SwipeShowContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const SwipeItem = styled.div`
  width: 100%;
  min-width: 100%;
  height: auto;
  min-height: ${(props) => props.minHeight};

  position: relative;
`;

export const SwipeImg = styled.img`
  width: 100%;

  position: absolute;
	z-index: -5;

  object-fit: cover;
`;

export const SwipeImgLayer = styled.div`
	height: 140px;
	background-color: #dedede;
	
	position: absolute;
`;

export const SwipeContent = styled.div`
  height: 20%;
  min-height: 140px;
  padding: 20px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  color: ${(props) => props.theme.colors.White};

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

export const BannerTime = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.normal};
`;

export const BannerTitle = styled.span`
  margin-top: 4px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const BannerPriceWrap = styled.div`
  text-align: end;

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }
`;

export const BannerPrice = styled.span`
  margin-left: 4px;
  font-size: ${(props) => props.theme.fontSizes.xxl} !important;
  font-weight: ${(props) => props.theme.fontWeights.medium} !important;
`;

export const BannerCircle = styled.div`
  width: 214px;
  height: 214px;

  background: linear-gradient(
    140.57deg,
    rgba(253, 176, 36, 0.7) 17.63%,
    rgba(253, 176, 36, 0) 63.63%
  );
  border-radius: 200px;
  z-index: -5;

  position: absolute;
  bottom: -100px;
  right: -50px;
`;

export const SwipeIdx = styled.div`
  width: fit-content;

  position: absolute;
	top: ${(props) => (props.isMain ? "20px" : null)};
	right: ${(props) => (props.isMain ? "20px" : "50%")};
	bottom: ${(props) => (props.isMain ? null : "17px")};

  display: flex;
  gap: 4px;
`;

export const SwipeIdxItem = styled.span`
  width: 8px;
  height: 8px;

  border-radius: 10px;
  background-color: ${(props) =>
    props.idxNow ? props.theme.colors.White : "rgba(255, 255, 255, 0.5)"};
`;

export const SwipeBtn = styled.button`
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 15px;
  opacity: 0.6;

  position: absolute;
  top: 50%;
  left: ${(props) => (props.location === "prev" ? "10px" : null)};
  right: ${(props) => (props.location === "next" ? "10px" : null)};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;
