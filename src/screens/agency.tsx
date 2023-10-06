import React, { Component } from "react";
import cs from "../styles/agency.module.css";
import ScreenHeader, { ScreenFooter } from "../components/foot&head";

export default class AgencyScreen extends Component {
  render() {
    return (
      <div className={cs.body}>
        <div className={cs.banner}>
          <div className={cs.bannerBody}>
            hallow World
          </div>
        </div>
        <ScreenFooter />
        <ScreenHeader />
      </div>
    );
  }
}
