getRandomName = function() {
    adjectives = [
        'pekny',
        'teply',
        'skaredy',
        'krivy',
        'retardovany',
        'uprimny',
        'nestastny',
        'bojazlivy',
        'opity',
        'fasisticky',
        'zradlivy',
        'klamlivy'
    ];

    nouns = [
        'Gates',
        'Potter',
        'Fico',
        'Kotleba',
        'Sulik',
        'Meciar',
        'Obama',
        'Kiska',
        'Ronaldo',
        'Siroky'
    ];

    return adjectives[Math.floor(Math.random()*adjectives.length)]
        + " " + nouns[Math.floor(Math.random()*nouns.length)];
};