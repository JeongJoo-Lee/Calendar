import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { addPlan } from "../redux/modules/plan";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "50vw",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100vw",
  },
}));

const Addform = (props) => {
  const plan_list = useSelector((state) => state.plan.list);
  // console.log(plan_list);

  const dispatch = useDispatch();

  const classes = useStyles();

  const [title, settitle] = useState({
    title: " ",
  });

  const [date, setdate] = useState({
    date: " ",
  });

  const onReset = () => {
    settitle("");
    setdate("");
  };
  const new_plan = { title: title, date: date };

  const onAdd = () => {
    dispatch(addPlan(new_plan));
    props.history.replace("/");
  };

  return (
    <Wrap>
      <Header>
        <h1>새로운 일정 추가</h1>
        <p>일정 내용</p>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          placeholder="일정 내용을 입력하세요"
        ></input>
      </Header>
      <Date>
        <p>일시</p>
        <form className={classes.container} noValidate>
          <TextField
            name="date"
            id="datetime-local"
            type="datetime-local"
            defaultValue="YYYY-MM-DDThh:mm"
            onChange={(e) => {
              setdate(e.target.value);
            }}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Date>
      <ButtonBox>
        <button onClick={onAdd}>완료</button>
        <button
          onClick={
            (onReset,
            () => {
              props.history.goBack();
            })
          }
        >
          취소
        </button>
      </ButtonBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 50vw;
  min-height: 35vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #cccccc;
  border-radius: 20px;
  padding: 30px;
  font-weight: bold;
`;

const Header = styled.div`
  & > input {
    max-width: 49.5vw;
    width: 100vw;
    padding: 8px 0px;
  }
  & > h1 {
    text-align: center;
  }
`;

const Date = styled.div`
  margin-bottom: 50px;
  margin-top: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & button {
    padding: 10px 30px;
    border: 1px solid #ffcc00;
    border-radius: 15px;
    background-color: #ffcc00;
  }
`;

export default Addform;
