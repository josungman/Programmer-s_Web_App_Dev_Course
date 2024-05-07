
import "@fortawesome/fontawesome-free/js/all.js";
import { initCurrentAsset } from "./current-asset";
import { initConsumptionDetails } from "./consumption-details";
import { initAddItem } from "./add-item";

const initApp = async () => {
    initCurrentAsset();
    initConsumptionDetails();
    initAddItem();
};

initApp()