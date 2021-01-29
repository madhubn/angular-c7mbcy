import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
export class User {
  mobileNumber?: string;
}

// const URL = '/api/';
const URL = "https://evening-anchorage-3159.herokuapp.com/api/";

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
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      phone: [
        "",
        [Validators.pattern(/^\(\d{3}\)\s\d{3}\d{4}$/), Validators.required]
      ]
    });

    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async item => {
        console.log("item", item);
        console.log("item", item._file.size);
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = "";

    this.uploader.response.subscribe(res => (this.response = res));
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
