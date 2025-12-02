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
            { emso: "010521500123", firstSelection: 0, secondSelection: 1 },
            { emso: "020521500124", firstSelection: 0, secondSelection: 2 },
            { emso: "030521500125", firstSelection: 0, secondSelection: 3 },
            { emso: "040521500126", firstSelection: 0, secondSelection: 1 },
            { emso: "050521500127", firstSelection: 0, secondSelection: 2 },
            { emso: "060521500128", firstSelection: 0, secondSelection: 3 },
            { emso: "070521500129", firstSelection: 0, secondSelection: 1 },
            { emso: "080521500130", firstSelection: 0, secondSelection: 2 },
            { emso: "090521500131", firstSelection: 0, secondSelection: 3 },
            { emso: "100521500132", firstSelection: 0, secondSelection: 1 },
            { emso: "110521500133", firstSelection: 0, secondSelection: 2 },
            { emso: "120521500134", firstSelection: 0, secondSelection: 3 },
            { emso: "130521500135", firstSelection: 0, secondSelection: 1 },
            { emso: "140521500136", firstSelection: 0, secondSelection: 2 },
            { emso: "150521500137", firstSelection: 0, secondSelection: 3 },
    
            { emso: "160521500138", firstSelection: 1, secondSelection: 0 },
            { emso: "170521550139", firstSelection: 1, secondSelection: 2 },
    
            { emso: "180521500140", firstSelection: 2, secondSelection: 0 },
            { emso: "190521500141", firstSelection: 2, secondSelection: 1 },
            { emso: "200521550142", firstSelection: 2, secondSelection: 3 },
            { emso: "210521500143", firstSelection: 2, secondSelection:0 },
            { emso: "220521550144", firstSelection: 2, secondSelection:1 },
            { emso: "230521500145", firstSelection: 2, secondSelection:3 },
    
            { emso: "240521500146", firstSelection: 3, secondSelection:0 },
            { emso: "250521500147", firstSelection: 3, secondSelection:1 },
            { emso: "260521550148", firstSelection: 3, secondSelection:2 }
        ],
        classes: {
            r4a: [
                "010521500123","020521500124","030521500125","040521500126","050521500127",
                "060521500128","070521500129","080521500130","090521500131","100521500132",
                "110521500133","120521500134","130521500135","140521500136","150521500137",
                "160521500138","180521500140","200521550142","210521500143","240521500146",
                "250521500147","220521550144","230521500145","260521550148","170521550139",
                "190521500141","200521550142","210521500143"
            ],
            r4b: [
                "010521500149","020521500150","030521500151","040521500152","050521500153",
                "060521500154","070521500155","080521500156","090521500157","100521500158",
                "110521500159","120521500160","130521500161","140521500162","150521500163",
                "160521500164","170521500165","180521500166","190521500167","200521500168",
                "210521500169","220521500170","230521500171","240521500172"
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