
import "@fortawesome/fontawesome-free/js/all.js";
import { initCurrentAsset } from "./current-asset";
import { initConsumptionDetails } from "./consumption-details";

const initApp = async () => {
    initCurrentAsset();
    initConsumptionDetails();
};

initApp()