    
   // showCategories function
    function getCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories').then((res)=> res.json()).then((data)=> showCategories(data.categories))
    }

    // getVideos function
    const getVideos =()=>{
        fetch('https://openapi.programming-hero.com/api/phero-tube/videos').then((Response) => Response.json()).then((data)=> showVideos(data.videos))
    }

    // showCategories function
    function showCategories(categories){
const categoryContainer = document.getElementById('categoryContainer');

for(let cat of categories){
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `

    <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>

    `
    categoryContainer.append(categoryDiv);

}

    }

    // showVideos function
    const showVideos =(videos)=>{
        const videosContainer = document.getElementById('videosContainer');

        videos.forEach(video => {
       
        const cardDiv =document.createElement('div');
        cardDiv.innerHTML= `
        <div class="card bg-base-100 shadow-sm">
            <figure class="relative">
              <img
              class="w-full h-[200px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-sm bg-black text-white px-3 rounded py-1"> 3hrs 23min ago</span>
            </figure>
            <div class="py-3 pl-5 flex gap-5">
              <div>
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture} " />
                    </div>
                  </div>
              </div>

              <div>
                <h2 class="text-xl font-semibold"> ${video.title}</h2>
                <div>
                    <p class="flex gap-2 text-gray-400 text-sm">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""></p>
                </div>
                <p class="text-gray-400 text-sm "> ${video.others.views}  views</p>
              </div>
              
            </div>
          </div>

        `
        videosContainer.append(cardDiv);
    });
    }

    // call functions
    getVideos()
    getCategories()

