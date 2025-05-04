def A(str):
  return str[::-1]
print(A)

def N(n,m):
    return n * m if n > 0 and m > 0 else 0
print(N)


def H(nums):
    return sum(nums) / len(nums) if nums else 0

print(H)