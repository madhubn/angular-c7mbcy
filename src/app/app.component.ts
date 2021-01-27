import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export class User {
  mobileNumber?: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  form: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted = false;
  user = new User();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      phone: [""]
    });
  }
}
