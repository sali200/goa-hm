function categorizeMembers(members) {
    return members.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open");
}

