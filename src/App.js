import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Route, Switch } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Addform from "./Components/Addform";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const App = (props) => {
  //   openAddform = () => {
  //     this.setState({ modalOpen: true });
  //   };

  //   closeAddform = () => {
  //     this.setState({ modalOpen: false });
  //   };
  const plan_list = useSelector((state) => state.plan.list);
  console.log(plan_list);

  return (
    <Container>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Container>
              <FullCalendar
                locale={"ko"}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={{ plan_list }}
              />

              <Fab
                color="primary"
                aria-label="add"
                style={{ float: "right" }}
                onClick={() => {
                  props.history.push("/add");
                }}
              >
                <AddIcon />
              </Fab>
            </Container>
          )}
        ></Route>
        <Route path="/add" component={Addform}></Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  width: 60vw;
  height: 60vh;
  margin: 30px auto;
`;

export default withRouter(App);
