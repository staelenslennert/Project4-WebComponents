import { Component, Event, State } from "@stencil/core";
import { EventEmitter } from "@ionic/core/dist/types/stencil.core";

@Component({
  tag: "my-tabs",
  styleUrl: "my-tabs.css"
})
export class MyTabs {
  @Event() tabToggle: EventEmitter;

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

  openTab(evt, tabName) {
    console.log("tab clicked", tabName);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content__item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("selectbar-list__item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  render() {
    return [
      <div class="selectbar">
        <div class="selectbar-list">
          {this.eventlist.map(entry => (
            <button
              class="selectbar-list__item"
              onClick={e => this.openTab(e, entry.name)}
            >
              {entry.name}
            </button>
          ))}
        </div>
      </div>
    ];
  }
}
