user_input = input("Enter numbers separated by spaces: ")


number_list = [float(num) for num in user_input.split()]


if number_list:  
    mean_value = sum(number_list) / len(number_list)
    print("Mean value:", mean_value)
else:
    print("No numbers entered.")
