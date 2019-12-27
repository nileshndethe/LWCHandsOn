/**
 * @File Name          : greetingGenerator.js
 * @Description        :
 * @Author             : Nilesh Dethe
 * @Group              :
 * @Last Modified By   : Nilesh Dethe
 * @Last Modified On   : 8/31/2019, 4:24:55 PM
 * @Modification Log   :
 * Ver       Date            Author      		    Modification
 * 1.0    8/31/2019   Nilesh Dethe     Initial Version
 **/
import { LightningElement, track } from "lwc";

export default class GreetingGenerator extends LightningElement {
  @track selectedNames = [];

  nameSelectHandler(event) {
    this.selectedNames.push(event.detail);
  }
  names = [
    "Hema",
    "Rekha",
    "Jaya",
    "Aur",
    "Shushma",
    "Subki",
    "Pasand",
    "Nirma"
  ];
}