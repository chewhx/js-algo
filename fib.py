def fib(n, memo=[1, 1]):

    if n <= 0:
        return 0
    elif n < len(memo):
        return memo[n]
    else:
        ans = fib(n - 1, memo) + fib(n - 2, memo)
        memo.append(ans)
        return ans



print(fib(10))
print(fib(28))
print(fib(35))

# [4, 3],
#   [10, 55],
#   [28, 317811],
#   [35, 9227465],
