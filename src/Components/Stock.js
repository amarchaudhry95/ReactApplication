import React from "react";
import { connect } from "react-redux";
import TableHeader from "./TableHeader";
import Rows from "./Rows";

const Stock = shares => {
  let rows = [];
  for (let key = 0; key < shares.shares.length; key++) {
    rows.push(<Rows key={shares.shares[key]} companyName={shares.shares[key]} />);
  }

  return (
    <div>
      <h1 id="title">Share Market World</h1>
      <table id="sharesTable">
        <thead>
          <TableHeader />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    shares: Object.keys(state.shares)
  };
};

export default connect(
  mapStateToProps,
  {}
)(Stock);
