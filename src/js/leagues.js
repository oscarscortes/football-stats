import { API_FOOTBALL_KEY } from "./constants";

export const getLeagues = async () => {
    try {
        const response = await fetch("https://v3.football.api-sports.io/leagues", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_FOOTBALL_KEY,
            },
        });

        if (!response) {
            console.log("Error fetching data");
            return [];
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error)
        return null;
    }
}