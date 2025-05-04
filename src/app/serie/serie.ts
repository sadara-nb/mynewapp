export class Serie {
    name: string;
    channel: string;
    seasons: number;
    description: string;
    poster: string;
    url: string;
   
    public constructor(name: string, channel: string, seasons: number, description: string, poster: string, url: string) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.poster = poster;
        this.url = url;
    }
}