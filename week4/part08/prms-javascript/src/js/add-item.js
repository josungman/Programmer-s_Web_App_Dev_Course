import { addConsumptionDetail } from "../api/add-consumption-details";
import { updateCurrentAsset } from "../api/update-current-asset";
import { handleGetConsumptionDetails } from "./consumption-details";
import { handleaddCurrentAsset } from "./current-asset";
import { toHidden, toShow, validatePrice, validateRequired } from "./util";

const $currentAssetValue = document.querySelector(".current-asset-value");
const $addItemButton = document.querySelector(".add-item-button");
const $itemSubmitButton = document.querySelector(".item-submit-button");
const $addItemDetail = document.querySelector(".add-item-detail");
const $itemCategory = document.querySelector("#item-category");
const $itemPrice = document.querySelector("#item-price");
const $itemDescription = document.querySelector("#item-description");



export const initAddItem = () => {
    addEventListener();
};


const addEventListener = () => {
    $addItemButton.addEventListener('click', function () {
        toShow($addItemDetail);
        toHidden($addItemButton);
    });

    $itemSubmitButton.addEventListener('click', function () {
        handleAddConsuptionDetail();
    });
}

const handleAddConsuptionDetail = async () => {
    try {

        validateRequired([$itemCategory.value, $itemPrice.value, $itemDescription.value]);
        validatePrice(Number($itemPrice.value), Number($currentAssetValue.textContent.replace(",","")));

        const funcsAtTheTime = Number($currentAssetValue.textContent.replace(",","")) - Number($itemPrice.value)
        await addConsumptionDetail(
            {
                price : Number($itemPrice.value),
                category : $itemCategory.value,
                description : $itemDescription.value,
                fundsAtTheTime : funcsAtTheTime ,
                createAt : new Date().toISOString(),
            }
        );

        await handleaddCurrentAsset(funcsAtTheTime);

        handleGetConsumptionDetails();
        initForm();

        toHidden($addItemDetail);
        toShow($addItemButton);

    } catch (err) {

        console.log(err)
    }
};


const initForm = () => {
    $itemCategory.value = ''
    $itemPrice.value = ''
    $itemDescription.value = ''

}