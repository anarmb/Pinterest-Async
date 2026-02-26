import "./gallery.css";
let gallery; 

export const Gallery = () => {
    const app = document.querySelector("#app");
    const main = document.createElement("main");
    gallery = document.createElement("div"); 
    gallery.className = "gallery";
    main.appendChild(gallery);
    app.appendChild(main);
};

export const showImages = (results) => {
    
    
    gallery.innerHTML = "";

    results.forEach(result => {

        const card = document.createElement("div");
        card.className = "image-card";

        const hover = document.createElement("div");
        hover.className = "hover-div";

        const views =  document.createElement("div");
        views.className = "views";
        views.textContent = `👁️ ${result.views ?? 0}`;

        const likes = document.createElement("div");
        likes.className = "likes";
        likes.innerHTML = result.likes ? `❤️ ${result.likes}` : `❤️`;

        hover.append(views, likes);

        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description || "Unsplash Image";
        img.classList = "main-img";

        img.addEventListener("load", () => {
            requestAnimationFrame(() => {
                const rowHeight = 5;  
                const rowGap = 16;
                const totalHeight = card.scrollHeight + rowGap;
                const rowSpan = Math.ceil(totalHeight / (rowHeight + rowGap));
                card.style.gridRowEnd = `span ${rowSpan}`;
            });
        });

        const visitButton = document.createElement("button");
        visitButton.className = "visit-button";
        visitButton.textContent = "Visit";

        const authorImg = document.createElement("img");
        authorImg.src = result.user.profile_image.small;
        authorImg.alt = `${result.user.name} profile`;
        authorImg.className = "author";

        const authorName = document.createElement("p");
        authorName.textContent = result.user.name;
        authorName.className = "author-name";

        const uploadImg = document.createElement("img");
        uploadImg.className = "uploadImg";
        uploadImg.src = '../src/assets/upload_icon.png';

        const formattedDate = new Date(result.created_at).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
        
        const date = document.createElement("p");
        date.textContent = formattedDate;
        date.className = "posted-when";

        const dateAndUploadIcon = document.createElement("div");
        dateAndUploadIcon.className = "dateAndUploadIcon";
        dateAndUploadIcon.append(uploadImg, date);

        const infoContainer = document.createElement("div");
        infoContainer.className = "info-container";
        infoContainer.append(authorImg, authorName, dateAndUploadIcon);

        card.append(hover, img, visitButton, infoContainer);
        gallery.append(card);
    });
};