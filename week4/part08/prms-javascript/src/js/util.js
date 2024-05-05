

/**
 * 
 * @param Element node 
 */
export const toShow = (node) => {
    if(node.className.includes('v-none')) {
        node.className = node.className.replace('v-none','v-show')
    } else {
      node.classList.add("v-show");
    }
};


export const toHidden = (node) => {
    if(node.className.includes('v-show')) {
        node.className = node.className.replace('v-show','v-none')
    } else {
      node.classList.add("v-none");
    }
};
