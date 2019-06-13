import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/shared/alert.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(public as: AlertService, public auth: AuthService) {}

  reg = {
    displayName: "",
    email: "",
    pwd: "",
    pwd2: ""
  };

  ngOnInit() {}

  registerAcct() {
    if (this.reg.pwd != this.reg.pwd2) {
      this.as.displayAlert("Passwords", "Your passwords dont match");
      this.reg.pwd = "";
      this.reg.pwd2 = "";
    } else {
      if (this.reg.displayName == "") {
        this.reg.displayName = this.reg.email;
      }

      this.auth
        .createUser(this.reg.email, this.reg.pwd)
        .then((user: firebase.User) => {
          this.as.displayAlert(user.email, "Acct created - Please Login");
        });
    }
  }
}