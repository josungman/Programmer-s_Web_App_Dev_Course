import { Title,SearchInput,Keywords,SearchResults,Loading } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const app = document.querySelector('.app');    
    const header = document.createElement('header');
    
    app.appendChild(header);

    new Title(header);
    new SearchInput(header);
    new Keywords(header);
    new SearchResults(header);
    new Loading(header);

    console.log('main.js : All components initialized')
    console.log(header);

});