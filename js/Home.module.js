import { Details } from "./Details.module.js"
import { Ui } from "./Ui.module.js"

export class Home {
    constructor() {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                this.linkData(link)

                //const category = link.getAttribute('data-category')
                const category = link.dataset.category
                this.getGames(category)
            })
        })
        this.loading = document.querySelector(".loading")
        this.details = document.getElementById('details')
        this.games = document.getElementById('games')

        this.ui = new Ui();
        
        this.getGames('MMORPG')

    }


    async linkData(link) {
        {
            document.querySelector('.navbar-nav .active').classList.remove('active')
            link.classList.add("active")


        }
    }

    async getGames(category) {
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '432c6ce70dmshdf942753fa2fe4ep16c043jsn3f36192f59ed',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        this.loading.classList.add("d-none")
        const response = await api.json()
        this.ui.display(response)

        //click on card to get card details

        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click' , ()=>{
                const gameID = card.dataset.id

                this.games.classList.add('d-none')
                this.details.classList.remove('d-none')

                
                const details = new Details(gameID)
            })
        })



    }
} 