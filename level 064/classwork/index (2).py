def sayHello(title, name):
    return f"Hello, {title} {name}"

# მაგალითი
print(sayHello("Mr.", "Spock"))  # Output: Hello, Mr. Spock
print(sayHello("Captain", "Kirk"))  # Output: Hello, Captain Kirk
print(sayHello("Dr.", "McCoy"))  # Output: Hello, Dr. McCoy



def array_plus_array(arr1,arr2):
    return sum(arr1+arr2)
 

def monkey_count(n):
    return range(1, n+1)


def reverse_array(n):
    return list(range(n, 0, -1))

# Example usage
print(reverse_array(5))  
