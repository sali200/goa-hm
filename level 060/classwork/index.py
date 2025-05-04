
def grow(arr):
	product = 1
	for i in arr:
		product *= i
	return product



def fake_bin(x):
    return ''.join('0' if c < '5' else '1' for c in x)




def hero(bullets, dragons):
    return bullets >= dragons * 2




def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)



from itertools import permutations

def latest_time_from_digits(a, b, c, d):
    # Create all permutations of the four digits
    permutations_of_digits = permutations([a, b, c, d])
    max_time = -1  # Initialize max_time to -1 to track no valid time found
    
    for perm in permutations_of_digits:
        hours = perm[0] * 10 + perm[1]
        minutes = perm[2] * 10 + perm[3]
        
        # Check if the combination is a valid time
        if 0 <= hours < 24 and 0 <= minutes < 60:
            current_time = hours * 60 + minutes
            max_time = max(max_time, current_time)
    
    if max_time == -1:
        return ""  # Return empty string if no valid time is found
    
    # Convert max_time back to HH:MM format
    latest_hours = max_time // 60
    latest_minutes = max_time % 60
    return f"{latest_hours:02}:{latest_minutes:02}"

# Examples
print(latest_time_from_digits(1, 9, 8, 3))  # Output: "19:38"
print(latest_time_from_digits(9, 1, 2, 5))  # Output: "21:59"
