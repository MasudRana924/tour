/* eslint-disable react/prop-types */
import { Card } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const BlankCard = ({ children, className }) => {
  return (
    <Card
      sx={{ p: 0, position: "relative" }}
      className={className}
    >
      {children}
    </Card>
  );
};
BlankCard.propTypes = {
  children: PropTypes.node,
};
export default BlankCard;