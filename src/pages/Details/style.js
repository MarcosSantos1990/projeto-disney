import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("images/teste4.png");
  background-size: cover;
  background-color: #00050a;

  input {
    width: 354px;
    height: 41px;
    outline: none;
    padding: 11px 0 13px 14px;
    border-radius: 5px;
    margin: 76px 66px 0 0;
  }

  img {
    width: 165px;
    height: 123px;
    margin: 18px 0 0 60px;
  }

  .box {
    display: flex;
    justify-content: space-between;
  }

  .avatar-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    list-style: none;
    margin-top: 300px;
  }

  .avatar-list img {
    width: 190px;
    height: 190px;
    border-radius: 50%;
  }

  

 

`;
