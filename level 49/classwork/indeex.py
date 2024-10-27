def main():
    students = {}
    
    while True:
        name = input("Enter the student's name (or 'done' to finish): ")
        if name.lower() == 'done':
            break
        
        marks = input(f"Enter marks for {name} separated by commas: ")
        marks_list = list(map(float, marks.split(',')))
        
        average = sum(marks_list) / len(marks_list)
        students[name] = average
    
    if students:
        best_student = max(students, key=students.get)
        best_average = students[best_student]
        
        print("Average Marks for Each Student:")
        for student, average in students.items():
            print(f"{student}: {average:.2f}")
        
        print(f"The best student is {best_student} with an average mark of {best_average:.2f}.")
    else:
        print("No students were entered.")

if __name__ == "__main__":
    main()

