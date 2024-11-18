def monkey_count(n):
    return range(1, n+1)


def reverse_array(n):
    return list(range(n, 0, -1))

print(reverse_array(5))  


def reverseWords(str):
    return ' '.join(reversed(str.split(' ')))


def zeroFuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left

