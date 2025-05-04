def simple_multiplication(number) :
    if number % 2 == 0:
        n = 8
    else:
        n = 9
    return number * n

def check_alive(health):
    if health <= 0:
        return False
    else:
        return True
    



#3 ver gavige


#4
def positive_sum(arr):
    total = 0

    for num in arr:
        if num > 0:
            total += num
            return total