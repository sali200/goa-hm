def process_scores(scores):
    if not scores:  # Check if the list is empty
        return None, None, None

    max_score = max(scores)
    min_score = min(scores)
    avg_score = sum(scores) / len(scores)

    return max_score, min_score, avg_score

student_scores = [105, 40, 88, 21, 48]
max_score, min_score, avg_score = process_scores(student_scores)

print(f"Maximum Score: {max_score}")
print(f"Minimum Score: {min_score}")
print(f"Average Score: {avg_score:.2f}")