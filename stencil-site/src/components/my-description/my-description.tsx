import { Component, State } from "@stencil/core";

@Component({
  tag: "my-description",
  styleUrl: "my-description.css"
})
export class MyDescription {
  @State() eventlist: Array<any> = new Array();
  @State() eventArray: [];

  componentWillLoad() {
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=BE&apikey=wuCndb95veCDmDchOoorgsazH2KMDzrc`
    )
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            this.eventlist = json._embedded.events.slice(0, 8);
          });
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    return [
      <content>
        {this.eventlist.map(entry => (
          <div id={entry.name} class="tab-content__item">
            <div class="festival-description">
              <img src={entry.images[9].url} class="festival-image" />
              <div class="festival-info">
                <h2 class="festival-info__title">{entry.name}</h2>
                <p class="festival-info__text">
                  Tickets for sale from{" "}
                  {entry.sales.public.startDateTime.slice(0, 10)} to{" "}
                  {entry.sales.public.endDateTime.slice(0, 10)}.
                </p>
                <p class="festival-info__text">
                  A {entry.classifications[0].segment.name} festival
                  <br />
                  Genre: {entry.classifications[0].genre.name} <br />
                  Subgenre: {entry.classifications[0].subGenre.name} <br />
                  Promoter: {entry.promoter.name} <br />
                  Buy tickets:{" "}
                  <a href={entry.url} target="_blank">
                    {entry.url}
                  </a>{" "}
                  <br />
                </p>
              </div>
            </div>

            <div id="festival-info" class="info">
              <div class="info-blok price">
                <h3 class="info-blok-title">Ticket price</h3>
                <p class="info-blok-price">
                  €
                  <span class="info-blok-price__price">
                    {entry.priceRanges[0].min}
                  </span>
                  <span class="info-blok-price__slash"> /</span>€
                  <span class="info-blok-price__price">
                    {entry.priceRanges[0].max}
                  </span>
                </p>

                <h4 class="info-blok__more-price">MIN PRICE / MAX PRICE</h4>
              </div>

              <div class="info-blok blok-venue">
                <h3 class="info-blok-title">Venue info</h3>
                <div class="venue-info__box">
                  <p class="venue-info__box-address">
                    {entry._embedded.venues[0].name}
                  </p>
                  <p class="venue-info__box-address">
                    {entry._embedded.venues[0].address.line1}
                  </p>
                  <p class="venue-info__box-address">
                    {entry._embedded.venues[0].city.name},{" "}
                    {entry._embedded.venues[0].postalCode}
                  </p>
                  <p class="venue-info__box-address">
                    {entry._embedded.venues[0].country.name}
                  </p>
                </div>
              </div>

              <div class="info-blok more">
                <h3 class="info-blok-title">Date</h3>
                <p class="info-blok-price">
                  <span class="info-blok-price__date">
                    {entry.dates.start.localDate}
                  </span>
                </p>
                <h4 class="info-blok__more">START DATE</h4>
              </div>
            </div>
          </div>
        ))}
      </content>
    ];
  }
}
