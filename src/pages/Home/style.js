import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("images/backDesk.png");
  background-size: cover;

  input {
    width: 354px;
    height: 41px;
    outline: none;
    padding: 11px 0 13px 14px;
    border-radius: 5px;
  }

  img{
    width: 364px;
    height: 271px;
  }

  .box{
    display: flex;
   flex-direction: column;
   justify-content: center;
   padding-top: 45px;
   padding-left: 172px;
  }
`;
