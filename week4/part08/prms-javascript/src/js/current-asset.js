import axios from "axios"
import { getCurrentAsset } from "../api/get-current-asset"
import { toHidden, toShow } from "./util";
import { addCurrentAsset } from "../api/add-current-asset";

const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $currentAssetButtonLoader = document.querySelector(".current-asset-button-loader");
const $addItemButton = document.querySelector(".add-item-button");

export const initCurrentAsset = async () => {
    handleGetCurrentAsset();

    $currentAssetButton.addEventListener("click",function () {
        //console.log($currentAssetInput.value);
        const inputValue = $currentAssetInput.value;
        if (inputValue > 0) {
            handleaddCurrentAsset(inputValue);
        } else {
            console.warn('0원 이상이 아닙니다.')
        }
    });
};



const handleaddCurrentAsset = async (inputValue) => {
    toShow($currentAssetButtonLoader);
    toHidden($currentAssetButton);
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(1);
    //     },3000);
    // })
    await addCurrentAsset(Number(inputValue));
    toHidden($currentAssetButtonLoader);
    toShow($currentAssetButton);

    await handleGetCurrentAsset();
}


const handleGetCurrentAsset = async () => {
    toShow($currentAssetLoader);
    try{
        const {price} = await getCurrentAsset();
        if (price > 0) {
            $currentAssetValue.textContent = price.toLocaleString();
            toHidden($currentAssetInput);
        }else{
            toShow($currentAssetInput);
            toShow($currentAssetButton);
            toHidden($addItemButton);
        }
        
    }catch(err) {
       console.error('현제자산을 조회하는데 실패하였습니다.');
    }
    toHidden($currentAssetLoader);
};


