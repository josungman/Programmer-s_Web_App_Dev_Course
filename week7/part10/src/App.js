console.log("app is running!");

class App {
  $target = null;
  data = [];
  page = 1;

  constructor($target) {
    this.$target = $target;

    this.Loading = new Loading({$target});

    this.DarkModeToggle = new DarkModeToggle({$target});

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {

        this.Loading.show();
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data ? data : [])
          this.Loading.hide();
          // 로컬에 저장
          this.saveResult(data);
      });

      },
      onRandomSearch: () => {
          this.Loading.show();
          api.fetchRandomCats().then(({ data }) => {
            this.setState(data)
            this.Loading.hide();
        });
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: cat => {
        this.imageInfo.showDetail({
          visible: true,
          cat
        });
      },
      onNextPage: () => {
        console.log('다음 페이지 로딩');
        this.Loading.show();
        const keywordHistory = localStorage.getItem('keywordHistory')
        === null ? [] :localStorage.getItem('keywordHistory').split(',');
        
        const lastKeyword = keywordHistory[0];
        const page = this.page + 1;
        
        api.fetchCatsPage(lastKeyword,page).then(({ data }) => {
          
          let newData = this.data.concat(data) //기존 데이터에 다음 데이터 배열 추가
          
          this.setState(newData)
          this.page = page
          console.log(this.page)

          this.Loading.hide();
          
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.init();
  }

  

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  saveResult(result){
    localStorage.setItem('lastResult',JSON.stringify(result))
  }


  init() {
    const lastResult = localStorage.getItem('lastResult')
    === null ? [] :JSON.parse(localStorage.getItem('lastResult'));
    this.setState(lastResult);
  }


}
