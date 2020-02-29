import React from "react";
import CarerrIte from "./CarerrIte";

const CarerrList = () => {
  return (
    <div className="carerrList">
      <div className="container">
        <CarerrIte
          desc={"Health Departments"}
          final={"30000"}
          icon={"fas fa-smile"}
        />
        <CarerrIte
          desc={"Satisfied Patients"}
          final={"500"}
          icon={"fas fa-clipboard-list"}
        />
        <CarerrIte
          desc={"Blood Donations"}
          final={"80"}
          icon={"fas fa-user-md"}
        />
        <CarerrIte
          desc={"Different Services"}
          final={"60"}
          icon={"fas fa-map-marker-alt"}
        />
      </div>
    </div>
  );
};

export default CarerrList;
