import { Ui } from "./Ui.module.js";

export class Details {
    constructor(id) {

        document.getElementById('btnClose').addEventListener('click', () => {

            document.getElementById("games").classList.remove('d-none')
                document.getElementById("details").classList.add('d-none')
        })
        this.loading = document.querySelector(".loading")
        this.getDetails(id)
    }



    async getDetails(id){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '432c6ce70dmshdf942753fa2fe4ep16c043jsn3f36192f59ed',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        const res = await api.json()
        this.loading.classList.add("d-none")
        new Ui().displayDetails(res)

    }
}