def last_even_numbers(arr, number):
    # Filter out the even numbers from the original array
    even_numbers = [x for x in arr if x % 2 == 0]
    # Return the last 'number' of even numbers from the filtered list
    return even_numbers[-number:]

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number = 3
print(last_even_numbers(arr, number))  # Output: [6, 8, 10]


def triangular_number(n):
    return n * (n + 1) // 2

# Example usage:
for i in range(10):
    print(triangular_number(i))
