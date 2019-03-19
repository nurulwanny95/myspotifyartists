import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQA18YdPk8avIaVciEzsF5-W-gWBhotmyKy41kcNEtvIr1TMAal6lcGVEuhU-OWRujc2gtwP4aG7Cw_gYUgVqY_5yyIlSesY54jAgofY1MbzV-22o4PyplssVQBcMCzCCLaqmIQyPiRnwoJF6XhpAXYv-UfAD6bhqK46HtXlza7ZFff3xzLUy2qJF0YqUf-ddHB8tkXVoUuMWV0xIH9i88jzu95XRgfDgFi1PBR8t1JojKPfSGDfV6SrfA6_NjRAa8zu2zAhwuCEGIhtR3AicMVUMKKSteibb_k"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
