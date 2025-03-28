#codewars
def number_to_words(number):
    switcher = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    }
    return switcher.get(number, "Invalid number")

# Example usage:
print(number_to_words(1))  # Output: "One"



def last_even_numbers(arr, number):
    # Filter out the even numbers from the original array
    even_numbers = [x for x in arr if x % 2 == 0]
    # Return the last 'number' of even numbers from the filtered list
    return even_numbers[-number:]

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number = 3
print(last_even_numbers(arr, number))  # Output: [6, 8, 10]


