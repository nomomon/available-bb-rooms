interface Room {
    name: {
        en: string;
        nl: string;
    };
    code: string;
    address: string;
    url: string;
    seats: string;
    allocation: number;
    capacity: number;
    hidden: boolean;
    avoidConcurrency: {
        name: {
            en: string;
            nl: string;
        };
        address: string;
    }[];
}

export default Room;

/**
 * example of a room:
 * {
        "name": {
            "en": "",
            "nl": "BB 5161.0041b (36)"
        },
        "code": "#SPLUS19FAFA",
        "address": "",
        "url": "https://myuniversity.rug.nl/infonet/medewerkers/fse/education/timetabling-fse/teaching-locations/bernoulliborg/bernoulliborg",
        "seats": "",
        "allocation": 0,
        "capacity": 36,
        "hidden": false,
        "avoidConcurrency": [
            {
                "name": {
                    "en": "",
                    "nl": "BB 5161.0041b (36/18)"
                },
                "address": ""
            },
            {
                "name": {
                    "en": "",
                    "nl": "BB 5161.0041b (36)"
                },
                "address": ""
            }
        ]
    }
 */