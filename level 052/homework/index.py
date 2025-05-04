#1
def get_grade(s1,s2,s3):
    score=int(input("enter your score"))
    if 90 <= score <= 100:
        return 'A'
    if 80 <= score < 90:
        return 'B'
    if 70 <= score < 80:
        return 'C'
    if 60 <= score < 70:
        return 'D'
    if 0 <= score < 60:
        return 'F'
print(get_grade)


#2
def month(month):
    if month in range (1,2,3,4):
        return 1
    elif month in range (5,6,7,8):
        return 2
    elif month in range (9,10,11,12):
        return 3
print(month)

#3
def repets(arr):
    return sum(1 for n in set(arr) if arr.count(n) == 1)

n = [4, 5, 7, 5, 4, 8]
print(repets(n))
#4

def n(A,B):
    if A==B: 
        L=A*B
    else: 
        L=A*2 + B*2
        return L
    print(L)


    