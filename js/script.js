function getData(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories').then((res)=> res.json()).then((data)=> showData(data.categories))
}
function showData(categories){
const categoryContainer = document.getElementById('categoryContainer');

for(let cat of categories){
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `
    
    <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>

    `
    categoryContainer.append(categoryDiv);

}

}
getData()

