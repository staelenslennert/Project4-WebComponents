import { Component, State } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css"
})
export class MyHeader {
  @State() image: string;

  componentWillLoad() {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=BE&apikey=wuCndb95veCDmDchOoorgsazH2KMDzrc"
    )
      .then((response: Response) => response.json())
      .then(response => {
        this.image = response._embedded.events[0].images[0].url;
      });
  }

  render() {
    return [
      <content class="festival">
        <div class="header-img">
          <div class="layer">
            <div class="header-content">
              <h1 class="header-title">Event catalog</h1>
              <a href="#festival">
                <button class="header-button">Watch the latest events</button>
              </a>
            </div>
          </div>
        </div>
      </content>
    ];
  }
}
