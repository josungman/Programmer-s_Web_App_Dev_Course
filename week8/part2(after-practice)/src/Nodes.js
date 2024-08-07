import validateState from '../src/utils/StateValidation.js'

export default function Nodes({$target, initalState, onClick,onPrevClick}){
  const $nodes = document.createElement('div')
  $target.appendChild($nodes)
  $nodes.classList.add('nodes')

  this.state = initalState

  this.setState = nextState => {

      validateState(nextState,'Nodes')

      if (this.state !== nextState) {
        this.state = nextState
        this.render()
      }
  }

  this.render = () => {
      
      const { isRoot,nodes} = this.state

      $nodes.innerHTML = `
        ${isRoot ? '' : `
          <div class="Node">
            <img src="../assets/prev.png">
          </div>
        `}
        ${nodes.map(node => `
          <div class="Node" data-id="${node.id}">
            <img src="${node.type === "DIRECTORY" ?
              "../assets/directory.png" :
              "../assets/file.png"
            }">
           ${node.name}
          </div>
        `).join('')}
      `
  }

  this.render()


  $nodes.addEventListener('click', e => {
    const $node = e.target.closest('.Node')
    
    const {id} = $node.dataset

    if (!id) {

    }

    const node = this.state.nodes.find(node => node.id === id)

    if (node) {
      onClick(node)
    } else {
      onPrevClick()
      //alert('올바르지 않은 Node입니다.')
    }


  })


  //추가기능 완료
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Backspace' && !this.state.isRoot){
      onPrevClick()
    }
})
}