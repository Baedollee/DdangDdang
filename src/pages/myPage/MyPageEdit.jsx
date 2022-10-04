// React import
import React, { useEffect, useRef, useState } from "react";

// Redux import
import { editMyPage, _MyPageData } from "../../redux/modules/MyPageSlice";
import { useDispatch, useSelector } from "react-redux";

// Package import
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Component import
import Header from "../../components/header/Header";

// Element & Shared import
import { BasicProfile, Camera, Delete } from "../../shared/images";
import PageModal from "../../components/modal/PageModal";

const MyPageEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = {
    nickName: "",
  };

  const profileData = useSelector((state) => state?.myPage?.myPage);
  const img_ref = useRef(null);

  const [inputForm, setInputForm] = useState(data);
  const [imgFile, setImgFile] = useState([]);
  const [imagePreview, setImagePreview] = useState(profileData?.profileImgUrl);
  console.log("preview", imagePreview);

  const [optionVisible, setOptionVisible] = useState(false); // alert 모달
  const [optionContent, setOptionContent] = useState({
    modalText: "",
    btnText: "",
    isConfirm: false,
    onClickBtn: () => {},
    onClickCloseBtn: () => {},
  });

  const memberId = sessionStorage?.getItem("memberId");

  const onLoadFile = (e) => {
    const reader = new FileReader();
    setImgFile(...imgFile, URL.createObjectURL(e.target.files[0]));

    const prevImg = e.target.files[0];
    reader.readAsDataURL(prevImg);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const onSubmitHandler = async () => {
    let formData = new FormData();
    let uploadImg = img_ref.current;

    formData.append(
      "data",
      new Blob([JSON.stringify(inputForm)], { type: "application/json" })
    );
    if (imgFile === []) {
      return formData.append("profileImg", null);
    } else {
      formData.append("profileImg", uploadImg.files[0]);
    }

    const data = dispatch(
      editMyPage({ memberId: memberId, formData: formData })
    ).unwrap();
    if (data) {
      // 포스팅 완료후 새로고침
      setOptionVisible(true);
      setOptionContent({
        modalText: "프로필 변경이 \n 완료되었습니다.",
        btnText: "확인",
        // isConfirm: true,
        onClickCloseBtn: () => navigate(-1, { replace: true }),
      });
    }
  };

  useEffect(() => {
    dispatch(_MyPageData(memberId));
  }, [imagePreview]);

  return (
    <>
      <ProfileEditLayout>
        <Header back={true} pageName="프로필 수정" />

        <MyProfile>
          <MyImgWrap>
            <MyImgBox>
              {imagePreview === null ? (
                profileData?.profileImgUrl === null ? (
                  <BasicProfile />
                ) : (
                  <img src={profileData?.profileImgUrl} alt="" />
                )
              ) : (
                <img src={imagePreview} alt="" />
              )}

              <label htmlFor="img_UpFile">
                <Camera />
              </label>
              <input
                ref={img_ref}
                type="file"
                accept="image/*"
                id="img_UpFile"
                onChange={onLoadFile}
                style={{ display: "none" }}
              />
            </MyImgBox>
          </MyImgWrap>

          <MyTextWrap>
            <div className="MyTextNick">닉네임</div>
            <div className="MyTextInputWrap">
              <input
                type="text"
                value={inputForm.nickName}
                name="nickName"
                onChange={onChangeHandler}
                placeholder={
                  profileData.nickname === null
                    ? "닉네임을 입력해주세요."
                    : profileData?.nickname?.length > 6
                    ? profileData?.nickname?.split("kakao")[0] + "kakao"
                    : profileData?.nickname
                }
                minLength="4"
                maxLength="6"
              />

              <Delete />
            </div>
            <span className="MyTextCheck"></span>
          </MyTextWrap>
        </MyProfile>
        <MyDoneBtnWrap>
          <MyDoneBtn type="button" onClick={onSubmitHandler}>
            완료
          </MyDoneBtn>
        </MyDoneBtnWrap>
      </ProfileEditLayout>
      <PageModal
        visible={optionVisible}
        setVisible={setOptionVisible}
        modalText={optionContent.modalText}
        btnText={optionContent.btnText}
        isConfirm={optionContent.isConfirm}
        onClickBtn={optionContent.onClickBtn}
        onClickCloseBtn={optionContent.onClickCloseBtn}
      />
    </>
  );
};

const ProfileEditLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;

  margin: 70px 10px 10px 10px;
  margin: 70px 20px 0px 20px;
`;
const MyImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-top: 32px;
`;
const MyImgBox = styled.div`
  display: flex;
  width: 120px;
  height: 100%;

  img {
    display: flex;
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }
  label {
    display: flex;
    position: absolute;
    top: 186px;
    left: 219px;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.White};
  }
`;

const MyTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .MyTextNick {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.ms};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
  .MyTextInputWrap {
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: 56px;
    position: relative;
    input {
      width: 100%;
      padding: 17px 30px 14px 9px;
      border-radius: 8px;
      border: 1px solid #1dc79a;
      font-size: ${(props) => props.theme.fontSizes.md};
    }
    svg {
      position: absolute;
      top: 19px;
      right: 8px;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      border: none;
      align-items: center;
      justify-content: center;
    }
  }
  .MyTextCheck {
    display: flex;
    margin-top: 12px;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: ${(props) => props.theme.colors.Red};
  }
`;
const MyDoneBtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
`;
const MyDoneBtn = styled.button`
  display: flex;
  width: 350px;
  height: 56px;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.md};
  background-color: #dedede;
  border: none;
  border-radius: 8px;
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translate(-50%);
`;

export default MyPageEdit;
