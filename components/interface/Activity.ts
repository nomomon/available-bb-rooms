interface Activity {
    id: string;
    hostKey: string;
    activityIndex: number;
    name: {
        en: string;
        nl: string;
    };
    activityName: {
        en: string;
        nl: string;
    };
    academicYear: string;
    start: number[];
    end: number[];
    plannedSize: number;
    activityType: {
        name: {
            en: string;
            nl: string;
        };
        syllabusName: string;
        color: string;
    };
    activityTypeCategory: string;
    recordingMode: string;
    status: string;
    groups: any[];
    staff: any[];
    locationUnits: {
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
    }[];
}

export default Activity;

/**
 * example of an event:
 * {
        "id": "7BA87EE820F2CDC9117EB8A3D6A338B3",
        "hostKey": "",
        "activityIndex": 0,
        "name": {
            "en": "Busy",
            "nl": "Bezet"
        },
        "activityName": {
            "en": "Busy",
            "nl": "Bezet"
        },
        "academicYear": "2022-2023",
        "start": [
            2022,
            9,
            5,
            9,
            0
        ],
        "end": [
            2022,
            9,
            5,
            11,
            0
        ],
        "plannedSize": 12,
        "activityType": {
            "name": {
                "en": "",
                "nl": ""
            },
            "syllabusName": "",
            "color": ""
        },
        "activityTypeCategory": "OTHER",
        "recordingMode": "NO",
        "status": "FINAL",
        "groups": [],
        "staff": [],
        "locationUnits": [
            {
                "name": {
                    "en": "",
                    "nl": "BB 5161.0204 (24, 12 pc)"
                },
                "code": "5161.0204",
                "address": "",
                "url": "https://myuniversity.rug.nl/infonet/medewerkers/fse/education/timetabling-fse/teaching-locations/bernoulliborg/bernoulliborg",
                "seats": "",
                "allocation": 0,
                "capacity": 24,
                "hidden": false,
                "avoidConcurrency": [
                    {
                        "name": {
                            "en": "",
                            "nl": "BB 5161.0204 (12 pc)"
                        },
                        "address": ""
                    }
                ]
            },
 */