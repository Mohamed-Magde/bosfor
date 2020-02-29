import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/main.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/landing-components/Footer";
import Landing from "./components/layout/Landing";
import HairBlog from "./components/layout/blogs/hairblogs/HairBlog";
import ToothBlog from "./components/layout/blogs/ToothBlog";
import BodyBlog from "./components/layout/blogs/BodyBlog";
import HairThird from "./components/layout/blogs/hairblogs/HairThird";
import HairSecond from "./components/layout/blogs/hairblogs/HairSecond";
import HairTFourth from "./components/layout/blogs/hairblogs/HairTFourth";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/hair" component={HairBlog} />
          <Route path="/secondHair" component={HairSecond} />
          <Route path="/thirdHair" component={HairThird} />
          <Route path="/fourthdHair" component={HairTFourth} />
          <Route path="/tooth" component={ToothBlog} />
          <Route path="/body" component={BodyBlog} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
