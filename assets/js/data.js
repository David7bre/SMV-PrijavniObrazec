export function GetData() {
    var dataLS = localStorage.getItem('data');
    if (dataLS != null) return JSON.parse(dataLS);
    return {
        subjects: {
            0: { count: 15, name: 'Android', professor: 'B. Resinovič', description: 'izdelava androidne aplikacije' },
            1: { count: 2, name: 'Python', professor: 'B. Lubej', description: 'osnovni ukazi in metode za delo, izdelava preproste igre' },
            2: { count: 6, name: 'Linux', professor: 'G. Breznik', description: 'nalagalnik, particije, uporabniki, pravice, skripte, administracija' },
            3: { count: 3, name: 'JavaScript', professor: 'B. Slemenšek', description: 'JS za postavitev aktivnih strani, izdelava igre' }
        },
        students: [
            { emso: "0105021500123", firstSelection: 0, secondSelection: 1 },
            { emso: "0205021500124", firstSelection: 0, secondSelection: 2 },
            { emso: "0305021500125", firstSelection: 0, secondSelection: 3 },
            { emso: "0405021500126", firstSelection: 0, secondSelection: 1 },
            { emso: "0505021500127", firstSelection: 0, secondSelection: 2 },
            { emso: "0605021500128", firstSelection: 0, secondSelection: 3 },
            { emso: "0705021500129", firstSelection: 0, secondSelection: 1 },
            { emso: "0805021500130", firstSelection: 0, secondSelection: 2 },
            { emso: "0905021500131", firstSelection: 0, secondSelection: 3 },
            { emso: "1005021500132", firstSelection: 0, secondSelection: 1 },
            { emso: "1105021500133", firstSelection: 0, secondSelection: 2 },
            { emso: "1205021500134", firstSelection: 0, secondSelection: 3 },
            { emso: "1305021500135", firstSelection: 0, secondSelection: 1 },
            { emso: "1405021500136", firstSelection: 0, secondSelection: 2 },
            { emso: "1505021500137", firstSelection: 0, secondSelection: 3 },
    
            { emso: "1605021500138", firstSelection: 1, secondSelection: 0 },
            { emso: "1705021550139", firstSelection: 1, secondSelection: 2 },
    
            { emso: "1805021500140", firstSelection: 2, secondSelection: 0 },
            { emso: "1905021500141", firstSelection: 2, secondSelection: 1 },
            { emso: "2005021550142", firstSelection: 2, secondSelection: 3 },
            { emso: "2105021500143", firstSelection: 2, secondSelection:0 },
            { emso: "2205021550144", firstSelection: 2, secondSelection:1 },
            { emso: "2305021500145", firstSelection: 2, secondSelection:3 },
    
            { emso: "2405021500146", firstSelection: 3, secondSelection:0 },
            { emso: "2505021500147", firstSelection: 3, secondSelection:1 },
            { emso: "2605021550148", firstSelection: 3, secondSelection:2 }
        ],
        classes: {
            r4a: [
                "0105021500123","0205021500124","0305021500125","0405021500126","0505021500127",
                "0605021500128","0705021500129","0805021500130","0905021500131","1005021500132",
                "1105021500133","1205021500134","1305021500135","1405021500136","1505021500137",
                "1605021500138","1805021500140","2005021550142","2105021500143","2405021500146",
                "2505021500147","2205021550144","2305021500145","2605021550148","1705021550139",
                "1905021500141","2005021550142","2105021500143"
            ],
            r4b: [
                "0105021500149","0205021500150","0305021500151","0405021500152","0505021500153",
                "0605021500154","0705021500155","0805021500156","0905021500157","1005021500158",
                "1105021500159","1205021500160","1305021500161","1405021500162","1505021500163",
                "1605021500164","1705021500165","1805021500166","1905021500167","2005021500168",
                "2105021500169","2205021500170","2305021500171","2405021500172"
            ]
        },
        settings: {
            maxCount: 15
        }
    };      
}

export function PostData(newData) {
    localStorage.setItem('data', JSON.stringify(newData));
}