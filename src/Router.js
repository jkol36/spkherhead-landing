import React from "react";
import { HashRouter as ReactRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Information from "./components/Information";
import MyParticles from "./components/Particles";
import ComingSoon from "./components/ComingSoon";
import NFT from "./components/NFT";

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <MyParticles />
              <Information />
            </>
          )}
        />
        <Route exact path="/nft" render={() => <NFT />} />
        <Route exact path="/studio" render={() => <ComingSoon />} />
        <Route exact path="/mint" render={() => <ComingSoon />} />
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
