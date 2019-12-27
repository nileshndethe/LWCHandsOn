/**
 * @File Name          : helloWorld.js
 * @Description        :
 * @Author             : Nilesh Dethe
 * @Group              :
 * @Last Modified By   : Nilesh Dethe
 * @Last Modified On   : 8/31/2019, 4:07:42 PM
 * @Modification Log   :
 * Ver       Date            Author      		    Modification
 * 1.0    8/31/2019   Nilesh Dethe     Initial Version
 **/
import { LightningElement, api } from "lwc";

export default class HelloWorld extends LightningElement {
  @api greetingName = "Nilesh";

  selectedNameHandler() {
    this.dispatchEvent(
      new CustomEvent("nameselect", { detail: this.greetingName })
    );
  }

  /*names = [
    "Hema",
    "Rekha",
    "Jaya",
    "Aur",
    "Shushma",
    "Subki",
    "Pasand",
    "Nirma"
  ];

  @track showList = false;

  greetingChangeHandler(event) {
    this.greetingName = event.target.value;
    console.log("greeting--" + this.greetingName);
  }

  showListHandler(event) {
    this.showList = event.target.checked;
  }*/
}