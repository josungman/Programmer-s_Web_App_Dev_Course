export default function Loading({ $target }){
  const $loading = document.createElement('div')
  $loading.className = 'Loading Modal'
  
  $target.appendChild($loading)
  
  this.state = false

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }


  this.render = () => {
    $loading.innerHTML = `
      <div class="content">
        <img width="100%" src="../assets/nyan-cat.gif">
      </div>
    `
    $loading.style.display = this.state ? 'block' : 'none'
  }

  this.render()


}