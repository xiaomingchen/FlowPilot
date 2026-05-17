// data/names.js — International name lists for random generation
// Covers: US, UK, Japan, Singapore, Korea, France, Germany, Spain, Italy, India, etc.

const FIRST_NAMES = [
  // US / English (male)
  'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Christopher',
  'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Andrew', 'Paul', 'Joshua', 'Kenneth', 'Kevin',
  'Brian', 'George', 'Timothy', 'Ronald', 'Jason', 'Edward', 'Jeffrey', 'Ryan', 'Jacob', 'Nicholas',
  'Ethan', 'Alexander', 'Benjamin', 'Samuel', 'Nathan', 'Tyler', 'Dylan', 'Caleb', 'Lucas', 'Mason',
  'Logan', 'Oliver', 'Aiden', 'Liam', 'Noah', 'Elijah', 'Sebastian', 'Carter', 'Owen', 'Jack',
  // US / English (female)
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen',
  'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
  'Abigail', 'Emily', 'Ella', 'Madison', 'Scarlett', 'Grace', 'Chloe', 'Victoria', 'Riley', 'Aria',
  'Lily', 'Aurora', 'Zoey', 'Penelope', 'Layla', 'Nora', 'Camila', 'Hannah', 'Addison', 'Stella',
  // British
  'Arthur', 'Freddie', 'Alfie', 'Oscar', 'Henry', 'Theo', 'Archie', 'Finn', 'Jude', 'Reuben',
  'Rosie', 'Isla', 'Evie', 'Florence', 'Luna', 'Willow', 'Poppy', 'Daisy', 'Phoebe', 'Matilda',
  // Japanese (Romaji)
  'Haruto', 'Yuto', 'Sota', 'Yuki', 'Ren', 'Takumi', 'Kaito', 'Ryusei', 'Hinata', 'Sora',
  'Kota', 'Daiki', 'Shota', 'Naoki', 'Kenji', 'Taro', 'Kazuki', 'Daisuke', 'Masashi', 'Ryo',
  'Yui', 'Aoi', 'Hina', 'Akari', 'Sakura', 'Mio', 'Rin', 'Mei', 'Koharu', 'Nana',
  'Misaki', 'Ayumi', 'Kaori', 'Naomi', 'Mika', 'Rina', 'Saki', 'Emi', 'Chika', 'Haruka',
  // Korean (Romaji)
  'Minjun', 'Seojun', 'Doyun', 'Jiho', 'Yejun', 'Junseo', 'Hyunwoo', 'Joonho', 'Taehyung', 'Sungmin',
  'Jisoo', 'Minji', 'Seoyeon', 'Hayoon', 'Jimin', 'Yuna', 'Nayeon', 'Somin', 'Eunji', 'Dayoung',
  // Chinese / Singapore
  'Wei', 'Jie', 'Jun', 'Hao', 'Chen', 'Yang', 'Ming', 'Feng', 'Tian', 'Kai',
  'Xin', 'Hui', 'Ling', 'Mei', 'Fang', 'Yan', 'Jing', 'Li', 'Xue', 'Wen',
  // French
  'Louis', 'Gabriel', 'Raphael', 'Jules', 'Adam', 'Antoine', 'Victor', 'Hugo', 'Maxime', 'Theo',
  'Camille', 'Lea', 'Chloe', 'Manon', 'Ines', 'Juliette', 'Margaux', 'Clara', 'Zoe', 'Eva',
  // German
  'Felix', 'Leon', 'Lukas', 'Ben', 'Jonas', 'Elias', 'Maximilian', 'Henry', 'Emil', 'Anton',
  'Mia', 'Hannah', 'Sofia', 'Emilia', 'Lina', 'Lea', 'Leonie', 'Alina', 'Marie', 'Sophie',
  // Spanish
  'Santiago', 'Mateo', 'Leonardo', 'Diego', 'Adrian', 'Nicolas', 'Samuel', 'Alejandro', 'Carlos', 'Andres',
  'Sofia', 'Valentina', 'Camila', 'Mariana', 'Luciana', 'Elena', 'Daniela', 'Gabriela', 'Isabella', 'Paula',
  // Italian
  'Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Gabriele', 'Riccardo', 'Edoardo', 'Tommaso', 'Andrea',
  'Giulia', 'Aurora', 'Ginevra', 'Vittoria', 'Beatrice', 'Ludovica', 'Chiara', 'Francesca', 'Anna', 'Giorgia',
  // Indian
  'Arjun', 'Vihaan', 'Rohan', 'Aarav', 'Reyansh', 'Ishaan', 'Krishna', 'Advik', 'Dhruv', 'Kabir',
  'Ananya', 'Diya', 'Aisha', 'Saanvi', 'Myra', 'Anika', 'Kavya', 'Ira', 'Nisha', 'Priya',
  // Thai
  'Somchai', 'Nattapong', 'Arthit', 'Kittisak', 'Chaiwat', 'Warut', 'Piyawat', 'Thanawat', 'Siriporn', 'Kannika',
  // Arabic
  'Omar', 'Ali', 'Hassan', 'Youssef', 'Ahmed', 'Khalid', 'Ibrahim', 'Tariq', 'Rami', 'Samir',
  'Fatima', 'Layla', 'Aisha', 'Noor', 'Yasmin', 'Leila', 'Sara', 'Hana', 'Dina', 'Mariam',
  // Turkish
  'Yusuf', 'Eymen', 'Omer', 'Mustafa', 'Emir', 'Hamza', 'Bugra', 'Kerem', 'Baran', 'Arda',
  'Zeynep', 'Defne', 'Elif', 'Ecrin', 'Miray', 'Nisa', 'Azra', 'Berfin', 'Cemre', 'Busra',
  // Russian
  'Dmitri', 'Alexei', 'Nikolai', 'Ivan', 'Andrei', 'Sergei', 'Mikhail', 'Pavel', 'Maxim', 'Vladimir',
  'Anastasia', 'Daria', 'Natalia', 'Olga', 'Elena', 'Irina', 'Tatiana', 'Yulia', 'Svetlana', 'Marina',
];

const LAST_NAMES = [
  // US / English
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Adams',
  'Nelson', 'Baker', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans',
  // British
  'Stewart', 'Morrison', 'Fraser', 'Graham', 'Murray', 'Robertson', 'Reid', 'Cameron', 'Wallace', 'Simpson',
  'Hunter', 'Duncan', 'Hamilton', 'Gordon', 'Black', 'Watson', 'Bell', 'Marshall', 'Gibson', 'Mackenzie',
  // Japanese (Romaji)
  'Tanaka', 'Suzuki', 'Takahashi', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Saito', 'Kato',
  'Yoshida', 'Yamada', 'Sasaki', 'Matsumoto', 'Inoue', 'Kimura', 'Shimizu', 'Hayashi', 'Sato', 'Mori',
  'Abe', 'Ikeda', 'Hashimoto', 'Ogawa', 'Ishikawa', 'Okada', 'Nishimura', 'Fujita', 'Endo', 'Aoki',
  // Korean (Romaji)
  'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim',
  'Shin', 'Oh', 'Seo', 'Kwon', 'Hwang', 'Ahn', 'Song', 'Ryu', 'Hong', 'Yoo',
  // Chinese / Singapore
  'Wang', 'Chen', 'Li', 'Zhang', 'Liu', 'Yang', 'Huang', 'Wu', 'Zhou', 'Xu',
  'Sun', 'Ma', 'Zhu', 'Hu', 'Lin', 'Guo', 'He', 'Luo', 'Zheng', 'Liang',
  'Tan', 'Ong', 'Ng', 'Teo', 'Goh', 'Chua', 'Koh', 'Ang', 'Sim', 'Toh',
  // French
  'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefevre', 'Leroy', 'Roux', 'David', 'Bertrand',
  'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller',
  // German
  'Mueller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Koch',
  'Richter', 'Klein', 'Wolf', 'Schroeder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krueger', 'Hoffmann',
  // Spanish
  'Flores', 'Rivera', 'Diaz', 'Cruz', 'Morales', 'Reyes', 'Gutierrez', 'Ortiz', 'Ramos', 'Romero',
  'Alvarez', 'Mendoza', 'Castillo', 'Vargas', 'Jimenez', 'Moreno', 'Dominguez', 'Herrera', 'Medina', 'Aguilar',
  // Italian
  'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco',
  'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti',
  // Indian
  'Patel', 'Kumar', 'Sharma', 'Singh', 'Gupta', 'Das', 'Mehta', 'Joshi', 'Shah', 'Rao',
  'Reddy', 'Nair', 'Pillai', 'Iyer', 'Chatterjee', 'Mukherjee', 'Bose', 'Banerjee', 'Sen', 'Kapoor',
  // Arabic / Middle East
  'Al-Rashid', 'Hassan', 'Ahmed', 'Ali', 'Mahmoud', 'Ibrahim', 'Khalil', 'Mansour', 'Saeed', 'Nasser',
  'Farooq', 'Hamdan', 'Jaber', 'Yassin', 'Bakr', 'Hariri', 'Sabbagh', 'Khouri', 'Nasr', 'Sharif',
  // Turkish
  'Yilmaz', 'Kaya', 'Demir', 'Celik', 'Arslan', 'Dogan', 'Ozturk', 'Aydin', 'Ozdemir', 'Polat',
  'Korkmaz', 'Cetin', 'Aksoy', 'Kurt', 'Karaca', 'Koc', 'Bulut', 'Tekin', 'Simsek', 'Erdogan',
  // Russian
  'Ivanov', 'Petrov', 'Sidorov', 'Smirnov', 'Kuznetsov', 'Popov', 'Volkov', 'Sokolov', 'Novikov', 'Morozov',
  'Fedorov', 'Mikhailov', 'Lebedev', 'Kozlov', 'Andreev', 'Makarov', 'Nikolaev', 'Zakharov', 'Stepanov', 'Orlov',
  // Thai
  'Charoenpol', 'Prasert', 'Saetang', 'Chaisiri', 'Wongsawat', 'Pholphirun', 'Siriwan', 'Chaiyaphum', 'Thongkham', 'Rattanaporn',
];

/**
 * Generate a random full name.
 * @returns {{ firstName: string, lastName: string }}
 */
function generateRandomName() {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return { firstName, lastName };
}

/**
 * Generate a random birthday (age 19-25).
 * @returns {{ year: number, month: number, day: number }}
 */
function generateRandomBirthday() {
  const currentYear = new Date().getFullYear();
  const age = 19 + Math.floor(Math.random() * 7); // 19 to 25
  const year = currentYear - age;
  const month = 1 + Math.floor(Math.random() * 12); // 1 to 12
  const maxDay = new Date(year, month, 0).getDate(); // days in that month
  const day = 1 + Math.floor(Math.random() * maxDay);
  return { year, month, day };
}
