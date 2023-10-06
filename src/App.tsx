import React, { Component, StrictMode } from "react";
import HomeScreen from "./screens/home";
import AcademyScreen from "./screens/academy";
import AgencyScreen from "./screens/agency";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: "",
    };
  }

  _setPage = (v: string) => {
     window.history.replaceState(null, v, v);
    this.setState({ page: v });
  };

  componentDidMount(): void {
      console.log(window.location.pathname);
      
  }

  render() {
    const { page }: any = this.state;
    // event, academy, agency
    return (
      <StrictMode>
        <HomeScreen setPage={this._setPage} />
        {page === "academy" && <AcademyScreen />}
        {page === "agency" && <AgencyScreen />}
      </StrictMode>
    );
  }
}
