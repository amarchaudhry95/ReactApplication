import React from "react";
import { connect } from "react-redux";

const Rows = ({ shareColor, sharePrice, ...props }) => {
  console.log("amar " + props.companyName);
  let colour = shareColor === 0 ? {} : shareColor === 1 ? red : green;
  let time = new Date().toLocaleString();

  return (
    <tr key={props.key} style={colour}>
      <td>{props.companyName}</td>
      <td>{sharePrice}</td>
      <td>{time}</td>
    </tr>
  );
};

const red = { backgroundColor: "#FF0000" };
const green = { backgroundColor: "#58FF33" };

const mapStateToProps = (state, props) => {
  return {
    shareColor: state.shares[props.companyName].color,
    sharePrice: state.shares[props.companyName].price
  };
};

export default connect(
  mapStateToProps,
  {}
)(Rows);
