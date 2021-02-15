const inputValue = document.querySelector('.search-input');
const names = document.querySelectorAll('td');

inputValue.addEventListener('keyup',function(event){
    const term = event.target.value.toLowerCase();
    names.forEach(function(name){
    
        const nameValue = name.innerText;
        if(nameValue.toLowerCase().indexOf(term) > -1){
             name.parentElement.style.display = 'block'
        }
        else{
            name.parentElement.style.display = 'none'
        }
        
    })
    
})