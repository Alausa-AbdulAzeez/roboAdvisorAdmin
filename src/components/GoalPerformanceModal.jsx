import React, { useState } from "react";
import AssetUpdateModal from "./AssetUpdateModal";
import AssetAdditionModal from "./AssetAdditionModal";

const GoalPerformanceModal = ({ onClose }) => {
  // Variable that handles the UI to be displayed
  const [currentUi, setCurrentUi] = useState("assetUpdateModal");

  //   Function to handle change of displalyed UI
  const changeUi = (uiToBeDisplayed) => {
    setCurrentUi(uiToBeDisplayed);
  };

  //   End of function to handle change of displalyed UI

  // Function to render a specific UI
  const handleSpecificUiRenderi = () => {
    switch (currentUi) {
      case "assetUpdateModal":
        return <AssetUpdateModal changeUi={changeUi} onClose={onClose} />;
      case "assetAdditionModal":
        return <AssetAdditionModal changeUi={changeUi} />;
      default:
        break;
    }
  };
  // End of function to render a specific UI

  return handleSpecificUiRenderi();
};

export default GoalPerformanceModal;
