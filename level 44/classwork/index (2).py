
#1
def n(n): 
    if n % 2 == 0:
        return True
    else:
        return False
print(n)
#2
def A(month):
    
    if month in range(1, 4):
        return 1
    elif month in range(4, 7):
        return 2
    elif month in range(7, 10):
        return 3
    elif month in range(10, 13):
        return 4
    print(A)
#3
def get_grade(s1, s2, s3):
    return {6:'D', 7:'C', 8:'B', 9:'A', 10:'A'}.get((s1 + s2 + s3) / 30, 'F')
print(get_grade)
#4
def H(boolean):
    return "Yes" if boolean else "No"
print(H)
#5
def opposite(number):
    return -number
print(opposite)

