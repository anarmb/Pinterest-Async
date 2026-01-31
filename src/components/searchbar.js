import "../styles/searchbar.css"

export const Searchbar = (onSearch) => {

    const form = document.createElement("form");
    form.className = "form-search";

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "loupe";
    button.textContent = "🔍";

    const search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Search";
    search.className = "search";

    form.append(button, search);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = search.value.trim();
        if (!query) return;

        onSearch(query);

        search.value = "";
    });

    return form;
};