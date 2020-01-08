/**
 * @File Name          : selectTextRightClickMenuPoc.js
 * @description        :
 * @Author             : Nilesh Dethe
 * @Group              :
 * @Last Modified By   : Nilesh Dethe
 * @Last Modified On   : 1/8/2020, 5:40:19 PM
 * @Modification Log   :
 * Ver       Date            Author      		    Modification
 * 1.0    1/3/2020   Nilesh Dethe     Initial Version
 **/
import { LightningElement, api, track } from "lwc";

export default class SelectTextRightClickMenuPoc extends LightningElement {
  /*@api day = { id: "123", name: "my_day", label: "My Day" };

  copyDay = function() {
    console.log(`Entry ${this.day.id}!`);
    this.doCopy();
  };

  doCopy = function() {
    let content = this.day;
    let inp = this.template.querySelector(".my-class");
    inp.disabled = false;
    inp.value = JSON.stringify(content);
    inp.select();
    document.execCommand("copy");
    inp.disabled = true;

    console.log(`copied ${this.day.id}`);
  };*/

  @track selectedText = "";
  @track sampleTextAreaTxt = "";

  getSelectionText() {
    if (window.getSelection) {
      this.selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      this.selectedText = document.selection.createRange().text;
    }
    console.log(this.selectedText);
  }

  addTimeStamp() {
    let txtAreaInput = this.template.querySelector(
      "lightning-textarea[data-id='sampleTxtArea']"
    );
    if (txtAreaInput) {
      console.log("txtAreaInput without Timestamp >> " + txtAreaInput.value);
      txtAreaInput.value = txtAreaInput.value + "\n1-8" + " ";
      txtAreaInput.focus();
      console.log("txtAreaInput with Timestamp>> " + txtAreaInput.value);
    }
  }
}
