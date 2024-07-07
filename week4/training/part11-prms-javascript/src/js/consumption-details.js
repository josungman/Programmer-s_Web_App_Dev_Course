import { getConsumptionDetails } from "../api/get-consumption-details"
import { toHidden, toShow } from "./util";

const $consumptionDetails = document.querySelector(".consumption-details");
const $consumptionDetailsLoader = document.querySelector(".consumption-details-loader");

export const initConsumptionDetails = () => {
    handleGetConsumptionDetails();
}


const createElement = (tagName,className) => {
    const newElement = document.createElement(tagName);
    newElement.className = className;
    return newElement;
};

export const handleGetConsumptionDetails = async () => {
    toShow($consumptionDetailsLoader);
    $consumptionDetails.textContent = "";
    const list = await getConsumptionDetails();

    list.map(({createAt,category,description,price,fundsAtTheTime}) => {
        const $li = createElement("li","consumption-details-per-day");
        const $pDate = createElement("p","consumption-details-date");
        const $itemSection = createElement("section","consumption-details-item");
        const $itemSectionColumn = createElement("section","consumption-details-item-column");
        const $itemCategory = createElement("section",".item-section");
        const $consumptionDetailsDetail = createElement("div","consumption-details-detail");
        const $consumptionDetailsDetailTitle = createElement("div","consumption-details-detail-row consumption-details-detail-title");
        const $consumptionDetailsDetailSubTitle = createElement("div","consumption-details-detail-row consumption-details-detail-subtitle");
        const $consumptionDetailsItemCaption = createElement("section","consumption-details-item-caption");
        const $deleteSection = createElement("div","delete-section");
        const $deleteButton = createElement("button","delete-button");


        //날짜
        $pDate.textContent = new Date(createAt).toLocaleDateString();
        $li.appendChild($pDate);
        
        // 카테고리
        $itemCategory.textContent = category;
        $itemSectionColumn.appendChild($itemCategory);
        
        //삭제버튼
        $deleteButton.textContent = "🗑";
        $deleteSection.appendChild($deleteButton)
        
        //상세내역
        $consumptionDetailsDetailSubTitle.textContent = price + "원"     
        $consumptionDetailsDetailTitle.textContent = description;
        $consumptionDetailsDetail.appendChild($consumptionDetailsDetailTitle);
        $consumptionDetailsDetail.appendChild($consumptionDetailsDetailSubTitle);
        
        //캡션
        $consumptionDetailsItemCaption.textContent = `남은 자산 ${fundsAtTheTime.toLocaleString()}원`
        
        //최종추가
        $itemSectionColumn.appendChild($consumptionDetailsDetail);
        $itemSectionColumn.appendChild($deleteSection);
        $itemSection.appendChild($itemSectionColumn);
        $itemSection.appendChild($consumptionDetailsItemCaption);

        $li.appendChild($itemSection);
        $consumptionDetails.appendChild($li);
    });



    toHidden($consumptionDetailsLoader);

}