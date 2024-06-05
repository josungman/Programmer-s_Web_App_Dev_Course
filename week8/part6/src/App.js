import {getPersonalInfo,getCardStatus} from './Storage.js'
import CardView from './CardView.js'

class App {
  state = {
    personalInfo : null,
    cardStatus : null
  }
    
  constructor($body) {
      this.$body = $body;
      
      this.cardView = new CardView({
        $body,
        initalState : this.state
        })
      
      this.init();
  }

  setState(nextData) {
      console.log(this);
      this.data = nextData;
  }
  
  async init() {
      
      this.state.personalInfo = await getPersonalInfo();
      this.state.cardStatus = await getCardStatus();
      this.cardView.setState(this.state)    

    }
}
export default App;