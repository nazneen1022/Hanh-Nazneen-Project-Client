import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    history.push("/");
    dispatch(logOut());
  };

  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      {/* <Button onClick={() => dispatch(logOut())}>Logout</Button> */}
      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
}
