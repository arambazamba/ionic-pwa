import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private auth: AuthService) {
    auth.isAuthenticated().subscribe(val => {
      this.loggedIn = val;
    });
  }

  loggedIn = false;
  email: string;
  menuData = [
    { title: "Hounds", pic: "assets/imgs/beach.jpg", Url: "hounds" },
    { title: "Account", pic: "assets/imgs/beach.jpg", Url: "account" },
    { title: "About", pic: "assets/imgs/beach.jpg", Url: "about" }
  ];
  showLogin() {}

  signOff() {}
}