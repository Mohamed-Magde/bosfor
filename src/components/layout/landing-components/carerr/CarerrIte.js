import React, { useState, Fragment } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CarerrIte = ({ desc, icon, final }) => {
  const [open, toggle] = useState(false);
  const [focus, setFocus] = React.useState(false);

  return (
    <Fragment>
      {" "}
      <CountUp start={focus ? 0 : null} end={final} duration={5} redraw={true}>
        {({ countUpRef }) => (
          <div className="wrapper">
            <i className={icon}></i>
            <p className="num-desc">{desc}</p>
            <div className="wrapper-num">
              <span ref={countUpRef} />
              <VisibilitySensor
                onChange={isVisible => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
              >
                <a className="plus">+</a>
              </VisibilitySensor>
            </div>
          </div>
        )}
      </CountUp>
    </Fragment>
  );
};

export default CarerrIte;
