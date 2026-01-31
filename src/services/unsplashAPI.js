const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

console.log("Key exists?", !!ACCESS_KEY); 

export const RequestImages = async (query) => {
    if (!ACCESS_KEY) {
        console.error("Error: ACCESS_KEY not defined .env");
        return [];
    }

    try {

        const url = query
            ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=30`
            : `https://api.unsplash.com/photos/random?count=30`;

        const response = await fetch(url, {
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`,
                },
            }
        );

    if (!response.ok) throw new Error(`Error status: ${response.status}`);
        
        const data = await response.json();
        const results = data.results || data;
        return results;
    } catch (error) {
        console.error("There is an error", error);
        return [];
    }
};