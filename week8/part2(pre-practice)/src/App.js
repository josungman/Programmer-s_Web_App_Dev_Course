console.log("app is running!");

import api from './api.js'
import Breadcrumb from './Breadcrumb.js'

class App {
  $target = null;
  
  data = {
    items:[]
  }

  constructor($target) {
    this.$target = $target;
    
    this.Breadcrumb = new Breadcrumb({
      $target
    })
  
    this.init(); 

  }
  

  setState(nextData) {
    this.data = nextData;
  }

  saveResult(result){    
  }


  init() {
    this.Breadcrumb.getBreadcrumbRoot()
  }


  }



export default App;