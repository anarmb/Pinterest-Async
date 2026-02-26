import "./header.css";
import { Searchbar } from "../searchbar/searchbar.js";
import { RequestImages } from "../../services/unsplashAPI.js";
import { showImages } from "../gallery/gallery.js";

export const Header = () => { 
    const header = document.createElement("header");
    const app = document.querySelector("#app");

    const divHeader =document.createElement("div");
    divHeader.className = "divHeader";
    const logo = document.createElement("img");
    logo.src = "../src/assets/logo.png";
    logo.alt = "Logo Pinterest";
    logo.className = "logo";

    logo.addEventListener("click", async () => {
    const randomImages = await RequestImages("");
    showImages(randomImages);
    });

    const navBar =document.createElement("nav");
    navBar.className = "navbar";
    const sections = [ 
        {name: "Home", class: "home" },
        {name: "Explore", class: "explore"},
        {name: "Create", class: "create"}]

    sections.forEach((section) => {
        const a = document.createElement("a");
        a.textContent = section.name;
        a.className = section.class;
        navBar.appendChild(a);
    })

    const divImages = document.createElement("div");
    divImages.className = "divImages";

    const notifications = document.createElement("img");
    notifications.src = "../src/assets/notifications.png";
    notifications.alt = "Notifications";
    notifications.className = "notifications-img";

    const messages = document.createElement("img");
    messages.src = "../src/assets/messages.png";
    messages.alt = "Messages";
    messages.className = "messages-img";

    const profile = document.createElement("img");
    profile.src = "../src/assets/profile.png";
    profile.alt = "Profile";
    profile.className = "profile-img";

    const searchBar = Searchbar(async(query) => {
        const results = await RequestImages(query);
        showImages(results);
    });
    
    divHeader.append(logo, navBar);
    divImages.append(notifications, messages, profile);
    header.append(divHeader, searchBar, divImages);
    app.prepend(header);

    (async () => {
    const randomImages = await RequestImages("");
    showImages(randomImages);
    })();

};