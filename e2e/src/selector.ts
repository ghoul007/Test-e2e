import { by } from "protractor";

export class Selector {
    


  static  getName() {
        return by.css('input[name="name"]')
    }


}