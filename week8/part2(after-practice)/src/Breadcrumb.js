import validateState from '../src/utils/StateValidation.js'

export default function Breadcrumb({$target, initalState, onClick}){
    const $breadcrumb = document.createElement('nav')
    $breadcrumb.className = 'Breadcrumb'
    $target.appendChild($breadcrumb)


    this.state = initalState

    this.setState = (nextState) => {

        validateState(nextState,'Breadcrumb')

        if (this.state !== nextState) {
            this.state = nextState
            this.render()
        }
    }


    this.render = () => {
        $breadcrumb.innerHTML = `
            <div class="Breadcrumb__item">Root</div>
            ${this.state.map(({id,name}) =>`
            <div class="Breadcrumb__item" data-id="${id}">${name}</div>
            `
            ).join('')}
        `
    }

    this.render()

    $breadcrumb.addEventListener('click', (e) => {
        const $breadcrumbItem = e.target.closest('.Breadcrumb__item')
        
        const {id} = $breadcrumbItem.dataset
        onClick(id)

    })

}