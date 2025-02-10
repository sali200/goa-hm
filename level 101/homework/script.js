const university = {
    name: 'საერთაშორისო უნივერსიტეტი',
    departments: 10,
    website: 'https://university.example',
    ratings: {
        student1: 4.5,
        student2: 4.8,
        student3: 4.7
    }
};

// 1. გამოიტანეთ ობიექტის ყველა თვისება და მნიშვნელობა.
console.log(university);

// 2. შეამოწმეთ, გააჩნია თუ არა scholarship თვისება.
console.log('scholarship' in university);

// 3. დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით.
const updatedUniversity = {...university, studentsCount: 1500};
console.log(updatedUniversity);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedUniversity);
updatedUniversity.name = 'ცვლილება';
console.log(updatedUniversity);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedUniversity));




const sportsClub = {
    clubName: 'დინამო',
    sportType: 'ფეხბურთი',
    foundedYear: 1925,
    achievements: {
        title1: 'ჩემპიონატი 1980',
        title2: 'ლიგა 2015',
        title3: 'ოქროს მედალი 2020'
    }
};

// 1. გამოიტანეთ ობიექტის თვისებების სია.
console.log(Object.keys(sportsClub));

// 2. გამოიტანეთ ობიექტის მნიშვნელობების სია.
console.log(Object.values(sportsClub));

// 3. შეამოწმეთ, არსებობს თუ არა sponsors ველი.
console.log('sponsors' in sportsClub);

// 4. დაამატეთ ახალი თვისება stadiumCapacity ახალი ობიექტით გაერთიანების გზით.
const updatedSportsClub = {...sportsClub, stadiumCapacity: 55000};
console.log(updatedSportsClub);

// 5. გაყინეთ ობიექტი და სცადეთ მისი ცვლილება.
Object.freeze(updatedSportsClub);
updatedSportsClub.clubName = 'ცვლილება';
console.log(updatedSportsClub);

// 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedSportsClub));





const hotel = {
    hotelName: 'რედისონი',
    stars: 5,
    location: 'თბილისი',
    guestReviews: {
        guest1: 'მაღალი ხარისხი',
        guest2: 'შესანიშნავი სერვისი',
        guest3: 'ლამაზი ხედები'
    }
};

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.
console.log(hotel);

// 2. შეამოწმეთ, გააჩნია თუ არა spa ველი.
console.log('spa' in hotel);

// 3. დაამატეთ roomsCount ახალი ობიექტის გაერთიანებით.
const updatedHotel = {...hotel, roomsCount: 200};
console.log(updatedHotel);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedHotel);
updatedHotel.hotelName = 'ცვლილება';
console.log(updatedHotel);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedHotel));





const cinema = {
    cinemaName: 'კავეა',
    moviesCount: 12,
    location: 'თბილისი',
    movieReviews: {
        user1: 'შესანიშნავი გამოცდილება',
        user2: 'კომფორტული ადგილები',
        user3: 'მაღალი ხარისხი'
    }
};

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.
console.log(cinema);

// 2. შეამოწმეთ, გააჩნია თუ არა vipSeats ველი.
console.log('vipSeats' in cinema);

// 3. დაამატეთ ticketPrice ახალი ობიექტის გაერთიანებით.
const updatedCinema = {...cinema, ticketPrice: 15};
console.log(updatedCinema);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedCinema);
updatedCinema.cinemaName = 'ცვლილება';
console.log(updatedCinema);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedCinema));
 




