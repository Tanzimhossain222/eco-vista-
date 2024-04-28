const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
    {
        location: "Mumbai",
        latitude: 19.0759899,
        longitude: 72.8773928,
    },
    {
        location: "Sydney",
        latitude: -33.8548157,
        longitude: 151.2164539,
    },
    {
        location: "Tokyo",
        latitude: 35.6828387,
        longitude: 139.7594549,
    },
    {
        location: "Dubai",
        latitude: 25.276987,
        longitude: 55.296249,
    },
    {
        location: "Paris",
        latitude: 48.8566969,
        longitude: 2.3514616,
    },
    {
        location: "Berlin",
        latitude: 52.5170365,
        longitude: 13.3888599,
    },
    {
        location: "Rome",
        latitude: 41.8933203,
        longitude: 12.4829321,
    },
    {
        location: "Istanbul",
        latitude: 41.0096334,
        longitude: 28.9651646,
    },
    {
        location: "Cairo",
        latitude: 30.033333,
        longitude: 31.233334,
    },
    {
        location: "Cape Town",
        latitude: -33.928992,
        longitude: 18.417396,
    },
    {
        location: "Buenos Aires",
        latitude: -34.6075682,
        longitude: -58.4370894,
    },
    {
        location: "Mexico City",
        latitude: 19.4326296,
        longitude: -99.1331785,
    },
    {
        location: "Los Angeles",
        latitude: 34.0536909,
        longitude: -118.2427666,
    },
    {
        location: "Vancouver",
        latitude: 49.2608724,
        longitude: -123.1139529,
    },
    {
        location: "Anchorage",
        latitude: 61.2163129,
        longitude: -149.894852,
    }
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};
}

export { getLocationByName, getLocations };