import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import { Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";

const NavBar = styled(AppBar)({
  height: "5.5rem",
  backgroundColor: "#3D4C5A",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
});

const SelectContainer = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem",
  fontFamily: 'Helvetica, Arial, sans-serif',
});

const OptionsContainer = styled.div(
  ({ displayDropdown }) => ({
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    marginLeft: "1rem",
    opacity: displayDropdown ? 1 : 0,
    transition: "opacity 0.3s, transform 0.3s ease-in-out",
  })
);

const SelectGroup = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "0.5rem",
  marginRight: "1rem",
});

const SpanText = styled.span({
  fontSize: "1rem",
  marginRight: "0.5rem",
  color: "#ECF0F1",
});

const SelectStyle = styled(Select)({
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: "1rem",
  padding: "0rem",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#4F6272",
  color: "#ECF0F1",
  cursor: "pointer",
  marginTop: "0rem",
  marginBottom:"0rem",
  maxHeight:'40px',
  outline:"none",
});

const DisplayButton = styled(Button)(
  ({ clicked }) => ({
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    backgroundColor: clicked ? "#4CAF50" : "#5CB85C", // Adjusted hover color
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: clicked ? 'bold' : 'normal',
    '&:hover': {
      backgroundColor: "#4CAF50", // Adjusted hover color
    },
  })
);

const TopNav = (props) => {
  const [groupValue, setGroupValue] = useState("status");
  const [orderValue, setOrderValue] = useState("priority");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [isDisplayClicked, setIsDisplayClicked] = useState(false);
  const { setGroup, setOrder } = props;

  const handleSelectChange = (e, isGroup) => {
    const value = e.target.value;
    localStorage.setItem(isGroup ? "group" : "order", value);
    isGroup ? setGroup(value) : setOrder(value);
    isGroup ? setGroupValue(value) : setOrderValue(value);
  };

  const toggleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
    setIsDisplayClicked(prevState => !prevState);
  };

  return (
    <div>
      <NavBar position="static">
        <SelectContainer>
          <DisplayButton
            variant="contained"
            onClick={toggleDisplayDropdown}
            clicked={isDisplayClicked}
          >
            Display
          </DisplayButton>
          <OptionsContainer displayDropdown={displayDropdown}>
            <SelectGroup>
              <SpanText>Grouping:</SpanText>
              <SelectStyle
                value={groupValue}
                onChange={(e) => handleSelectChange(e, true)}
                name="group"
                id="group"
              >
                <MenuItem value="status">Status</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="priority">Priority</MenuItem>
              </SelectStyle>
            </SelectGroup>

            <SelectGroup>
              <SpanText>Ordering:</SpanText>
              <SelectStyle
                value={orderValue}
                onChange={(e) => handleSelectChange(e, false)}
                name="order"
                id="order"
              >
                <MenuItem value="priority">Priority</MenuItem>
                <MenuItem value="title">Title</MenuItem>
              </SelectStyle>
            </SelectGroup>
          </OptionsContainer>
        </SelectContainer>
      </NavBar>
    </div>
  );
};

export default TopNav;
