class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, recieved ${res.status}`)
        }
        return await res.json();
    };
    async getAllPeople() {
        const res = await this.getResourse('/people/');
        return res.results.map(this.transformPerson);
    };

    async getPerson(id) {
        const person = await this.getResourse(`/people/${id}/`);
        return this.transformPerson(person);
    };

    transformPerson=(person)=> {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            hairColor: person.hair_color,
            height:person.height
        }
    };

    async getAllPlanets() {
        const res = await this.getResourse('/planets/');
        return res.results
    };

    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this.transformPlanet(planet);
    };

    transformPlanet=(planet)=> {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    async getAllStarships() {
        const res = await this.getResourse('/starships/');
        return res.results.map(this.transformStarship);
    };

    async getStarhip(id) {
        const starship = await this.getResourse(`/starships/${id}/`);
        return this.transformStarship(starship);
    };

    transformStarship=(starship)=> {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            constInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity

        }
    };

    extractId=(item)=> {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

}

export default SwapiService;
