import { Component } from "@stencil/core";

@Component({
  tag: "my-content-bundle"
})
export class MyContentBundle {
  render() {
    return [<my-tabs />, <my-description />];
  }
}
