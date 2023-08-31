const data = [
  {
    id: 1,
    question: 'Quel réalisateur a créé la trilogie du Seigneur des anneaux ?',
    duo_options: ['Peter Jackson', 'Steven Spielberg'],
    square_options: ['George Lucas', 'Christopher Nolan', 'Peter Jackson', 'Steven Spielberg'],
    good_answer: 'Peter Jackson',
  },
  {
    id: 2,
    question: 'Quel acteur incarne le personnage de Tony Stark, alias Iron Man, dans le MCU ?',
    duo_options: ['Chris Evans', 'Robert Downey Jr.'],
    square_options: ['Chris Hemsworth', 'Mark Ruffalo', 'Robert Downey Jr.', 'Chris Evans'],
    good_answer: 'Robert Downey Jr.',
  },
  {
    id: 3,
    question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?",
    duo_options: ['Parasite', '1917'],
    square_options: ['Once Upon a Time in Hollywood', 'Joker', '1917', 'Parasite'],
    good_answer: 'Parasite',
  },
  {
    id: 4,
    question: 'Quel acteur a interprété le rôle de Jack Dawson dans le film Titanic ?',
    duo_options: ['Leonardo DiCaprio', 'Tom Hanks'],
    square_options: ['Brad Pitt', 'Johnny Depp', 'Leonardo DiCaprio', 'Tom Hanks'],
    good_answer: 'Leonardo DiCaprio',
  },
  {
    id: 5,
    question: "Quel réalisateur a dirigé les films 'Pulp Fiction' et 'Kill Bill' ?",
    duo_options: ['Martin Scorsese', 'Quentin Tarantino'],
    square_options: ['Steven Spielberg', 'Christopher Nolan', 'Quentin Tarantino', 'Martin Scorsese'],
    good_answer: 'Quentin Tarantino',
  },
  {
    id: 6,
    question: 'Quelle est la devise nationale de la France ?',
    duo_options: ['Liberté, Égalité, Fraternité', 'Vive la Révolution'],
    square_options: ['Vive la Liberté', 'Liberté, Égalité, Fraternité', 'Amour et Paix', 'Vive la Révolution'],
    good_answer: 'Liberté, Égalité, Fraternité',
  },
  {
    id: 7,
    question: 'Quel est le plus long fleuve de France ?',
    duo_options: ['La Seine', 'La Loire'],
    square_options: ['Le Rhône', 'La Garonne', 'La Loire', 'La Seine'],
    good_answer: 'La Loire',
  },
  {
    id: 8,
    question: "Quel monument emblématique se trouve à Paris et a été construit en 1889 à l'occasion de l'Exposition universelle ?",
    duo_options: ['Le Louvre', 'La Tour Eiffel'],
    square_options: ['Le Château de Versailles', 'La Tour Eiffel', 'La Cathédrale Notre-Dame', 'Le Louvre'],
    good_answer: 'La Tour Eiffel',
  },
  {
    id: 9,
    question: 'Quel roi de France a construit le Château de Versailles ?',
    duo_options: ['Louis XIV', 'Louis XVI'],
    square_options: ['Louis XIII', 'Louis XV', 'Louis XIV', 'Louis XVI'],
    good_answer: 'Louis XIV',
  },
  {
    id: 10,
    question: "Quel est le plat traditionnel français à base de carne de bœuf mijotée, de vin rouge et d'oignons ?",
    duo_options: ['Ratatouille', 'Boeuf Bourguignon'],
    square_options: ['Coq au Vin', 'Cassoulet', 'Boeuf Bourguignon', 'Ratatouille'],
    good_answer: 'Boeuf Bourguignon',
  },
  {
    id: 11,
    question: 'Quelle équipe nationale a remporté la Coupe du Monde de football en 2018 ?',
    duo_options: ['Allemagne', 'France'],
    square_options: ['Brésil', 'Argentine', 'France', 'Espagne'],
    good_answer: 'France',
  },
  {
    id: 12,
    question: "Quel joueur de tennis suisse est largement considéré comme l'un des plus grands joueurs de tous les temps ?",
    duo_options: ['Roger Federer', 'Rafael Nadal'],
    square_options: ['Novak Djokovic', 'Andy Murray', 'Rafael Nadal', 'Roger Federer'],
    good_answer: 'Roger Federer',
  },
  {
    id: 13,
    question: "Dans quel sport les équipes se disputent-elles la 'Coupe Stanley' ?",
    duo_options: ['Basketball', 'Hockey sur glace'],
    square_options: ['Football américain', 'Baseball', 'Hockey sur glace', 'Basketball'],
    good_answer: 'Hockey sur glace',
  },
  {
    id: 14,
    question: "Quelle joueuse de tennis américaine a remporté 23 titres du Grand Chelem en simple, un record dans l'ère ouverte ?",
    duo_options: ['Maria Sharapova', 'Serena Williams'],
    square_options: ['Venus Williams', 'Simona Halep', 'Serena Williams', 'Maria Sharapova'],
    good_answer: 'Serena Williams',
  },
  {
    id: 15,
    question: "Dans quelle ville se déroulent les Jeux Olympiques d'été en 2024 ?",
    duo_options: ['Los Angeles', 'Paris'],
    square_options: ['Tokyo', 'Londres', 'Paris', 'Los Angeles'],
    good_answer: 'Paris',
  },
  {
    id: 16,
    question: "Quelle vitamine est souvent appelée la 'vitamine du soleil' car elle est produite par la peau en réponse à l'exposition au soleil ?",
    duo_options: ['Vitamine C', 'Vitamine D'],
    square_options: ['Vitamine A', 'Vitamine E', 'Vitamine D', 'Vitamine K'],
    good_answer: 'Vitamine D',
  },
  {
    id: 17,
    question: "Quel organe du corps humain est responsable de la production d'insuline et de la régulation de la glycémie ?",
    duo_options: ['Cœur', 'Pancréas'],
    square_options: ['Rein', 'Pancréas', 'Foie', 'Poumon'],
    good_answer: 'Pancréas',
  },
  {
    id: 18,
    question: 'Quelle maladie chronique affecte les voies respiratoires et peut causer des difficultés respiratoires, notamment des crises de suffocation ?',
    duo_options: ['Asthme', 'Diabète'],
    square_options: ['Arthrite', 'Asthme', 'Hypertension', 'Diabète'],
    good_answer: 'Asthme',
  },
  {
    id: 19,
    question: 'Quelle est la plus grande glande du corps humain, responsable de la régulation de nombreux processus métaboliques ?',
    duo_options: ['Thyroïde', 'Pancréas'],
    square_options: ['Pancréas', 'Rein', 'Thyroïde', 'Foie'],
    good_answer: 'Thyroïde',
  },
  {
    id: 20,
    question: 'Quel nutriment essentiel est principalement obtenu à partir de la consommation de produits laitiers et joue un rôle dans la santé des os ?',
    duo_options: ['Fer', 'Calcium'],
    square_options: ['Vitamine C', 'Calcium', 'Vitamine D', 'Potassium'],
    good_answer: 'Calcium',
  },
  {
    id: 21,
    question: 'Quelle est la forme de gouvernement où le pouvoir est exercé par le peuple à travers des représentants élus ?',
    duo_options: ['Monarchie', 'Démocratie'],
    square_options: ['Oligarchie', 'Dictature', 'Démocratie', 'Monarchie'],
    good_answer: 'Démocratie',
  },
  {
    id: 22,
    question: 'Quel homme politique a été le premier président des États-Unis ?',
    duo_options: ['Thomas Jefferson', 'George Washington'],
    square_options: ['Benjamin Franklin', 'John Adams', 'George Washington', 'Thomas Jefferson'],
    good_answer: 'George Washington',
  },
  {
    id: 23,
    question: "Quel est le système politique où le pouvoir est concentré entre les mains d'un seul dirigeant absolu et autoritaire ?",
    duo_options: ['Oligarchie', 'Dictature'],
    square_options: ['Démocratie', 'Dictature', 'Théocratie', 'Oligarchie'],
    good_answer: 'Dictature',
  },
  {
    id: 24,
    question: "Quelle femme politique a été la première femme à devenir chancelière d'Allemagne ?",
    duo_options: ['Angela Merkel', 'Margaret Thatcher'],
    square_options: ['Theresa May', 'Nicole Fontaine', 'Margaret Thatcher', 'Angela Merkel'],
    good_answer: 'Angela Merkel',
  },
  {
    id: 25,
    question: 'Quelle révolution politique et sociale a eu lieu en France en 1789 et a conduit à la chute de la monarchie ?',
    duo_options: ['Révolution industrielle', 'Révolution française'],
    square_options: ['Révolution américaine', 'Révolution française', 'Révolution russe', 'Révolution industrielle'],
    good_answer: 'Révolution française',
  },
  {
    id: 26,
    question: 'Combien de côtés a un pentagone régulier ?',
    duo_options: ['4', '5'],
    square_options: ['5', '6', '7', '4'],
    good_answer: '5',
  },
  {
    id: 27,
    question: 'Quelle est la racine carrée de 144 ?',
    duo_options: ['9', '12'],
    square_options: ['11', '13', '12', '9'],
    good_answer: '12',
  },
  {
    id: 28,
    question: "Si a = 5 et b = 3, quel est le résultat de l'expression a² - b² ?",
    duo_options: ['4', '16'],
    square_options: ['16', '8', '10', '4'],
    good_answer: '16',
  },
  {
    id: 29,
    question: 'Quelle est la valeur de π (pi) arrondie à deux décimales ?',
    duo_options: ['3.14', '3.21'],
    square_options: ['3.21', '3.14', '3.18', '3.10'],
    good_answer: '3.14',
  },
  {
    id: 30,
    question: "Quel est le résultat de l'opération 8 × 7 + 3 ÷ 2 ?",
    duo_options: ['60.5', '59'],
    square_options: ['59', '62', '60.5', '61'],
    good_answer: '59',
  },
  {
    id: 31,
    question: 'Quel événement historique a marqué la fin de la Seconde Guerre mondiale en Europe en 1945 ?',
    duo_options: ['Le débarquement en Normandie', 'La capitulation allemande'],
    square_options: ['La bataille de Stalingrad', 'Le débarquement en Normandie', "L'attaque de Pearl Harbor", 'La capitulation allemande'],
    good_answer: 'La capitulation allemande',
  },
  {
    id: 32,
    question: 'Quel empire était dirigé par Napoléon Bonaparte ?',
    duo_options: ['Empire britannique', 'Empire français'],
    square_options: ['Empire russe', 'Empire ottoman', 'Empire français', 'Empire britannique'],
    good_answer: 'Empire français',
  },
  {
    id: 33,
    question: "Quel roi de France a été surnommé le 'Roi-Soleil' ?",
    duo_options: ['Louis XIV', 'Louis XVI'],
    square_options: ['Louis XIII', 'Louis XV', 'Louis XIV', 'Louis XVI'],
    good_answer: 'Louis XIV',
  },
  {
    id: 34,
    question: 'Quel explorateur a mené la première circumnavigation du globe au XVIe siècle ?',
    duo_options: ['Christophe Colomb', 'Ferdinand Magellan'],
    square_options: ['Hernán Cortés', 'Vasco de Gama', 'Ferdinand Magellan', 'Christophe Colomb'],
    good_answer: 'Ferdinand Magellan',
  },
  {
    id: 35,
    question: 'Quel événement a marqué le début de la Révolution américaine en 1775 ?',
    duo_options: ["La Déclaration d'Indépendance", 'La Bataille de Lexington et Concord'],
    square_options: ['Le Boston Tea Party', 'La Bataille de Lexington et Concord', "La Déclaration d'Indépendance", 'Le Traité de Paris'],
    good_answer: 'La Bataille de Lexington et Concord',
  },
  {
    id: 36,
    question: "Quel créateur de contenu YouTube est connu pour sa série de vidéos 'PewNews' et ses commentaires sur l'actualité ?",
    duo_options: ['Logan Paul', 'PewDiePie'],
    square_options: ['Markiplier', 'PewDiePie', 'Jenna Marbles', 'Logan Paul'],
    good_answer: 'PewDiePie',
  },
  {
    id: 37,
    question: 'Quelle plateforme de partage de vidéos a été rachetée par Google en 2006 ?',
    duo_options: ['Vimeo', 'YouTube'],
    square_options: ['Dailymotion', 'YouTube', 'Twitch', 'Vimeo'],
    good_answer: 'YouTube',
  },
  {
    id: 38,
    question: 'Quelle YouTubeuse française est notamment connue pour ses vidéos humoristiques et ses parodies de chansons ?',
    duo_options: ['EnjoyPhoenix', 'Natoo'],
    square_options: ['Marie Lopez', 'Natoo', 'Léa Camilleri', 'EnjoyPhoenix'],
    good_answer: 'Natoo',
  },
  {
    id: 39,
    question: 'Quelle catégorie de vidéos YouTube met en scène des personnes en train de manger et de commenter leur repas ?',
    duo_options: ['Vlogs', 'Mukbang'],
    square_options: ['Tutoriels de maquillage', 'Mukbang', 'Sketches comiques', 'Vlogs'],
    good_answer: 'Mukbang',
  },
  {
    id: 40,
    question: "Quelle chaîne YouTube est célèbre pour ses vidéos de science et d'éducation, notamment 'MinutePhysics' ?",
    duo_options: ['Vsauce', 'Veritasium'],
    square_options: ['Veritasium', 'SmarterEveryDay', 'Vsauce', 'Kurzgesagt'],
    good_answer: 'Vsauce',
  },
  {
    id: 41,
    question: 'Quelle série télévisée américaine suit les vies des employés de bureau de Dunder Mifflin Paper Company ?',
    duo_options: ['Friends', 'The Office'],
    square_options: ['Parks and Recreation', 'The Office', 'How I Met Your Mother', 'Friends'],
    good_answer: 'The Office',
  },
  {
    id: 42,
    question: "Quelle série de science-fiction britannique met en scène un Docteur voyageant à travers le temps et l'espace dans son TARDIS ?",
    duo_options: ['Star Trek', 'Doctor Who'],
    square_options: ['Battlestar Galactica', 'Stargate SG-1', 'Doctor Who', 'Star Trek'],
    good_answer: 'Doctor Who',
  },
  {
    id: 43,
    question: "Quel personnage de la série 'Game of Thrones' est également connu sous le nom de 'Reine des Dragons' ?",
    duo_options: ['Cersei Lannister', 'Daenerys Targaryen'],
    square_options: ['Sansa Stark', 'Daenerys Targaryen', 'Cersei Lannister', 'Arya Stark'],
    good_answer: 'Daenerys Targaryen',
  },
  {
    id: 44,
    question: 'Quelle série télévisée animée met en scène la famille Simpson dans la ville fictive de Springfield ?',
    duo_options: ['Family Guy', 'The Simpsons'],
    square_options: ['South Park', "Bob's Burgers", 'The Simpsons', 'Family Guy'],
    good_answer: 'The Simpsons',
  },
  {
    id: 45,
    question: 'Quelle série de science-fiction a pour protagoniste Walter White, un professeur de chimie devenu fabricant de méthamphétamine ?',
    duo_options: ['Breaking Bad', 'Stranger Things'],
    square_options: ['The Wire', 'Breaking Bad', 'Narcos', 'Stranger Things'],
    good_answer: 'Breaking Bad',
  },
  {
    id: 46,
    question: "Quel groupe britannique est célèbre pour ses chansons 'Bohemian Rhapsody' et 'We Will Rock You' ?",
    duo_options: ['The Beatles', 'Queen'],
    square_options: ['The Rolling Stones', 'Queen', 'Led Zeppelin', 'The Beatles'],
    good_answer: 'Queen',
  },
  {
    id: 47,
    question: "Quelle chanteuse américaine est surnommée la 'Reine de la Pop' et est connue pour des tubes comme 'Like a Virgin' ?",
    duo_options: ['Britney Spears', 'Madonna'],
    square_options: ['Whitney Houston', 'Madonna', 'Mariah Carey', 'Britney Spears'],
    good_answer: 'Madonna',
  },
  {
    id: 48,
    question: "Quel artiste a sorti l'album 'Thriller', l'album le plus vendu de tous les temps ?",
    duo_options: ['Michael Jackson', 'Elvis Presley'],
    square_options: ['Elton John', 'Prince', 'Michael Jackson', 'Paul McCartney'],
    good_answer: 'Michael Jackson',
  },
  {
    id: 49,
    question: "Quel groupe de rock est connu pour sa chanson 'Stairway to Heaven' et est souvent considéré comme l'un des plus grands groupes de tous les temps ?",
    duo_options: ['Led Zeppelin', 'The Rolling Stones'],
    square_options: ['The Who', 'Pink Floyd', 'The Rolling Stones', 'Led Zeppelin'],
    good_answer: 'Led Zeppelin',
  },
  {
    id: 50,
    question: "Quelle chanson de la chanteuse britannique Adele a remporté l'Oscar de la meilleure chanson originale en 2013 ?",
    duo_options: ['Someone Like You', 'Skyfall'],
    square_options: ['Rolling in the Deep', 'Hello', 'Skyfall', 'Someone Like You'],
    good_answer: 'Skyfall',
  },
];
export default data;
