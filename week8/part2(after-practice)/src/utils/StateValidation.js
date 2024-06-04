//정합성 체크
export default function  validateState(data,component){
  
  if (component === 'Loading') {

    if (typeof data !== "boolean") {
      throw new Error(`${component} Component ValidateState Fail`);
    }
    
  }else if (component === 'Nodes') {

    if (typeof data.isRoot !== "boolean" && !Array.isArray(data.nodes)) {
      throw new Error(`${component} Component ValidateState Fail`);
    }

  }else if (component === 'ImageViewer'){
  
    if (!(typeof data.selectedImageUrl === "string" || data.selectedImageUrl === null)) {
      throw new Error(`${component} Component ValidateState Fail`);
    }

  }else if (component === 'Breadcrumb'){
  
    if (!Array.isArray(data)) {
      throw new Error(`${component} Component ValidateState Fail`);
    }
  
  }




}