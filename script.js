let movies_list = [
    
        
     {
        img: "https://catimages.org/images/2025/05/30/Interrogation-2025-HDHub4u.Ms.jpg",
        movie_name: "Interrogation (2025)",
        title: "DS4K WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
        link: "https://t.me/movie_mela_61/434"
    },
     {
        img: "https://image.tmdb.org/t/p/w342/AEgggzRr1vZCLY86MAp93li43z.jpg",
        movie_name: "Karate Kid Legends (2025)",
        title: "HQ-HDTC [Hindi (LiNE) & English] 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
        link: "https://t.me/movie_mela_61/436"
    },
    {
        img: "https://image.tmdb.org/t/p/w342/rEffPihtdQXiXfRdfq7pPM5JDqa.jpg",
        movie_name: "Tourist Family (2025)",
        title: "DS4K WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
        link: "https://t.me/movie_mela_61/438"
    },
     {img: "https://image.tmdb.org/t/p/w342/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    movie_name: "Final Destination: Bloodlines (2025)",
    title: "DS4K WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
        link: "https://t.me/movie_mela_61/429"
    },
    {img: "https://image.tmdb.org/t/p/w342/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    movie_name: "Retro (2025)",
    title: "DS4K WEB-DL [Hindi (DD5.1) & Tamil] 4K 1080p 720p & 480p Dual Audio [x264/10Bit-HEVC] | Full Movie",
        link: "https://t.me/movie_mela_61/420"
    },


]

let input_movies = movies_list.map((item) => {
    return `
    <div class="text-white p-2 ">
               <div><a href="${item.link}" target="_blank"> <img src="${item.img}" alt="" class="rounded-sm"></a></div>
               <a href="${item.link}" class="hover:underline focus:underline" target="_blank"> <h2 class="text-2xl  font-bold bangers-regular max-sm:text-xl">${item.movie_name}</h2>
                <p class="arvo-bold-italic text-sm max-sm:text-xs leading-6">${item.title} </p></a>
            </div>
    `
}).join("")

document.getElementById('movie-grid').innerHTML = input_movies


let input_menu=true;

function small_menu(e){
    if (input_menu)
    {document.getElementById('small-menu').innerHTML=`
            <div class="absolute bg-black text-center text-2xl text-white w-full h-[100vh] left-0 top-25">
                <ul class="my-10">
                    <li><form action="" method="get">
                <label for="search-movie"></label>
                <input type="search" name="search-movie" id="search-movie" placeholder="Search"
                    class='bg-white w-[70vw] h-8 font-serif rounded-tl-sm rounded-bl-sm focus:outline-none text-center'>
                <button type="submit"
                    class="bg-red-500 absolute rounded-tr-sm rounded-br-sm text-white w-[10vw] h-8 font-serif  focus:ring-red-200 focus:ring-2 "><ion-icon
                        name="search-outline"></ion-icon></button>
            </form></li>
                    <li class="my-10"><a href="#" >BollyWood</a></li>
                    <li class="my-10"><a href="#" >HollyWood</a></li>
                    <li class="my-10"><a href="#" >Anime</a></li>
                    <li class="my-10"><a href="#" >Home</a></li>
                </ul>
            </div>`
        
            e.name="close-outline"
            input_menu=false;
        }
        else{
            document.getElementById('small-menu').innerHTML=``
            e.name="menu-outline"
            input_menu=true;
        }

}