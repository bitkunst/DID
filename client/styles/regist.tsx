import styled from 'styled-components';

const RegistStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  background: black;
  position: absolute;
  top: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  li {
    list-style: none;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding-top: 50px;
    padding-left: 150px;
    margin: 0 auto;
  }

  .title {
    width: 20%;
    padding-top: 10px;

    & > li {
      height: 50px;
      color: white;
      font-size: 12px;
    }

    & > li:nth-child(1) {
      height: 85px;
    }

    & > li:nth-child(3) {
      height: 85px;
    }
  }

  .regist_frm {
    width: 80%;

    & > .overlap,
    .pwCheck {
      width: 80px;
      height: 25px;
      border: none;
      border-radius: 10px;
      margin-left: 10px;
      background: gray;
    }

    & > input {
      width: 50%;
      height: 30px;
      border: none;
      margin-bottom: 20px;
      padding-left: 10px;
      background: gray;
      border-radius: 10px;
    }

    & > input:focus {
      outline: none;
    }

    & > input::placeholder {
      color: #efefef;
    }

    & > .button {
      margin-top: 50px;
      background: green;
    }

    .true {
      color: green;
    }

    .false {
      color: red;
    }
  }
`;

export default RegistStyled;