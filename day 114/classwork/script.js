class PersianGuineaPig {
    constructor(color, size, birthYear, birthMonth, birthDay) {
        this.color = color;
        this.size = size;
        this.birthDate = new Date(birthYear, birthMonth - 1, birthDay); 
    }

    calculateAge() {
        const today = new Date();
        let years = today.getFullYear() - this.birthDate.getFullYear();
        let months = today.getMonth() - this.birthDate.getMonth();
        let days = today.getDate() - this.birthDate.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `ასაკი: ${years} წელი, ${months} თვე, ${days} დღე`;
    }
}


const guineaPig = new PersianGuineaPig("თეთრი", "პატარა", 2020, 5, 15);
console.log(guineaPig.calculateAge());