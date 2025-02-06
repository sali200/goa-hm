function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
  

  const newUser = new User(
    'Salome',
    'Moseshvili',
    '+995123456789',
    'salome.moseshvili@gmail.com',
    'securePassword123',
    'securePassword123'
  );
  
  console.log(newUser);
  



  const user1 = new User(
    'demetre',
    'bolqvazde',
    '+995840198982091487',
    'demetrebolqvaze@gmail.com',
    'password123',
    'password123'
  );
  
  const user2 = new User(
    'gabrieli',
    'shatirashvili',
    '+995894040809',
    'gabrieli.shatirishvili@gmail.com',
    'passwordshatira456',
    'passwordshatira456'
  );
  
  const user3 = new User(
    'Gaga',
    'koxodze',
    '+78422420909498',
    'gaga.koxodze@gmail.com',
    'passwordgaga789',
    'passwordgaga789'
  );
  
  console.log(user1);
  console.log(user2);
  console.log(user3);



  const sentence1 = `ჩემის სახელია Demetre, ჩემი გვარია Bolqvazde, ჩემი ტელეფონის ნომერი არის +995840198982091487, ჩემი ელფოსტა არის demetrebolqvaze@gmail.com.`;



  const sentence2 = `ჩემის სახელია Gabrieli, ჩემი გვარია Shatirashvili, ჩემი ტელეფონის ნომერი არის +995894040809, ჩემი ელფოსტა არის gabrieli.shatirishvili@gmail.com.`;



  const sentence3 = `ჩემის სახელია Gaga, ჩემი გვარია Koxodze, ჩემი ტელეფონის ნომერი არის +78422420909498, ჩემი ელფოსტა არის gaga.koxodze@gmail.com.`;
