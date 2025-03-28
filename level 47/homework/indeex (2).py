def count_words(text):
    words = text.split()
    return len(words)

# Example usage
text = "Hello there, how many words are in this sentence?"
print("Number of words:", count_words(text))



def check_number(num):
    if num > 0:
        return "The number is positive."
    elif num < 0:
        return "The number is negative."
    else:
        return "The number is zero."

# Example usage
user_input = float(input("Enter a number: "))
result = check_number(user_input)
print(result)





def categorize_age(age):
    if age < 0:
        return "Age cannot be negative."
    elif age <= 12:
        return "You are a child."
    elif age <= 19:
        return "You are a teenager."
    elif age <= 59:
        return "You are an adult."
    else:
        return "You are a senior."

# Example usage
user_age = int(input("Enter your age: "))
message = categorize_age(user_age)
print(message)



def separate_even_odd(numbers):
    even_numbers = [num for num in numbers if num % 2 == 0]
    odd_numbers = [num for num in numbers if num % 2 != 0]
    return even_numbers, odd_numbers

# Example usage
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens, odds = separate_even_odd(numbers)
print("Even numbers:", evens)
print("Odd numbers:", odds)






def calculate_average(numbers):
    if not numbers:
        return 0
    total = sum(numbers)
    count = len(numbers)
    average = total / count
    return average

# Example usage
numbers = [1, 2, 3, 4, 5]
print("Average:", calculate_average(numbers))
