student_scores = [45, 28, 82, 29, 95, 91, 40, 73, 18, 43]


def filter_scores(scores):
    return [score for score in scores if score > 50]

filtered_scores = filter_scores(student_scores)


print("Scores greater than 50:", filtered_scores)

