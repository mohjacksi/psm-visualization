import React, { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Panel from "./Panel";

const DescriptionPanel: FC = () => {
  return (
    <Panel
      initiallyDeployed
      title={
        <>
          <BsInfoCircle className="text-muted" /> Description
        </>
      }
    >
      <p>
        This map represents a <i>network</i> of PSM, Peptide and Protiens relationship with samples and projects within labs of Karolinska Institutet "Data vizualisation". {" "}
        <i>Node</i> represents PSM, Peptide, Protien, Sample, Project, and each edge a{" "} relationship between them.<br></br>
        <a target="_blank" rel="noreferrer" href="https://psm.mjacksi.com">
          "See also" link
        </a>
        .
      </p>
      
      
      
    </Panel>
  );
};

export default DescriptionPanel;
