user_input = input("Enter numbers separated by spaces: ")


number_list = [int(num) for num in user_input.split()]

reversed_list = number_list[::-1]


print("Reversed list:", reversed_list)