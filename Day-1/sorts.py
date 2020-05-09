
import sys
arr = input()
# print(arr)
def swap(s1, s2):
    return s2, s1

x = tuple(arr)
y = []
for i in x:
    if i in "1234567890":
        y.append(i)
# print(y)
for j in range(0,len(y)):
    midindex = j
    for k in range(j+1,len(y)):
        if (y[midindex] > y[k]):
            midindex = k
    # swap(y[j],y[k])
    y[j], y[midindex] = y[midindex], y[j] 
print(y)            
# //done for the day dated 07.05.2020