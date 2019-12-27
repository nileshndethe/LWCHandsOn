/**
 * @File Name          : uiRecordApiTester.js
 * @description        :
 * @Author             : Nilesh Dethe
 * @Group              :
 * @Last Modified By   : Nilesh Dethe
 * @Last Modified On   : 12/27/2019, 11:33:59 AM
 * @Modification Log   :
 * Ver       Date            Author      		    Modification
 * 1.0    12/27/2019   Nilesh Dethe     Initial Version
 **/
import { LightningElement, wire, track } from "lwc";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import TASK_OBJECT from "@salesforce/schema/Task";

export default class UiRecordApiTester extends LightningElement {
  @track defaultRecordTypeId = "";
  @track errorObj = "";
  @wire(getObjectInfo, { objectApiName: TASK_OBJECT })
  getObjectInfo({ error, data }) {
    if (data) {
      this.defaultRecordTypeId = data.defaultRecordTypeId;
      console.log("Default Record Type Id: " + this.defaultRecordTypeId);
    }

    if (error) {
      this.errorObj = JSON.stringify(error);
      console.log("Error: " + this.errorObj);
    }
  }
}