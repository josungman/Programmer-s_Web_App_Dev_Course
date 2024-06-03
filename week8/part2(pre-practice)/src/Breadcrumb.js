import api from './api.js'

class Breadcrumb {
    data = null;

    constructor({ $target }) {
      const $wrapper = document.createElement('nav');
      $wrapper.className = 'Breadcrumb';

      this.$navtitle = document.createElement('div')
      this.$navtitle.textContent = 'root'

      this.$searchResult = document.createElement('div')
      this.$searchResult.className = 'Nodes'

      $target.appendChild($wrapper);  
      $wrapper.appendChild(this.$navtitle)
      this.$navtitle.appendChild(this.$searchResult)
      
    }
    
    render() {
        console.log('render_ch')
        console.log(this.data)

        if (this.data === null || this.data.length ===0){
            this.$searchResult.style.display = 'none'
            return
          }
          this.$searchResult.innerHTML = this.data
            .map(
              (item) => `
              <div class="Node">
                <img src="./assets/${item.type}.png">
                <div>${item.name}</div>
              </div>
              `
            )
            .join("");

    }

    setState(nextData) {
        this.data = nextData;
        this.render()
      }

    async getBreadcrumbRoot() {     
            /*
            호출시 값 안넘어옴 [에러 찾음,
            배열로 직접 반환되는 경우, data 필드를 사용하여 구조 분해 할당하는 것이 아니라, 바로 반환된 데이터를 사용해야 한다.
            */
            await api.fetchBreadcrumbRoot().then(data => {
            //await api.fetchRandomCats().then(({data}) => {  //기존 api 호출 테스트 완료
            console.log("Fetched breadcrumb data:", data);
            this.setState(data ? data : []);
        })
    }

  }
  
  

  export default Breadcrumb