class Book {
    constructor(title, author, pages, publishYear) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.publishYear = publishYear;
    }
  
    getSummary() {
      return `${this.title} is written by ${this.author} and was published in ${this.publishYear}. It has ${this.pages} pages.`;
    }
  }
  
  const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 1925);
  console.log(myBook.getSummary());

  







  class Customer {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    updateEmail(newEmail) {
      this.email = newEmail;
    }
  }
  
  const customer = new Customer('John', 'Doe', 'john.doe@example.com');
  console.log(customer.fullName());
  customer.updateEmail('new.email@example.com');
  console.log(customer.email);

  







  class Movie {
    constructor(title, director, releaseYear, duration) {
      this.title = title;
      this.director = director;
      this.releaseYear = releaseYear;
      this.duration = duration;
    }
  
    getMovieInfo() {
      return `${this.title}, directed by ${this.director}, was released in ${this.releaseYear} and has a duration of ${this.duration} minutes.`;
    }
  }
  
  const myMovie = new Movie('Inception', 'Christopher Nolan', 2010, 148);
  console.log(myMovie.getMovieInfo());

  







  class Ticket {
    constructor(eventName, eventDate, price, isAvailable) {
      this.eventName = eventName;
      this.eventDate = eventDate;
      this.price = price;
      this.isAvailable = isAvailable;
    }
  }
  
  const myTicket = new Ticket('Concert', '2025-08-15', 50, true);
  console.log(myTicket);

  




  