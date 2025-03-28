#task 1 (bmi calculaotor)
bmi=int(input("enter ur high and weight"))
if bmi > 20 and bmi < 40:
    print("ur underweight")
elif bmi > 40 and bmi < 60:
    print("ur normal")
elif bmi > 60 and bmi < 80:
    print("yr over weight")
else:
    print("take ur diet")

#task 2 (going onece, going twice, sold🤑)
price=int(input("enter the price"))
while True:
    if price < 2000:
        print("more")
    elif  price > 2000:
        print("sold🤑")
    break
#task 3 (timer)
for i in range(1 -1):
    print(100)
