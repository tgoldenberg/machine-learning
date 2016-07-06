import mat4py
import json

hand_written_digits = mat4py.loadmat('ex4data1.mat')
weights = mat4py.loadmat('ex4weights.mat')


with open('digits.json', 'w') as outfile:
    json.dump(hand_written_digits, outfile)

with open('weights.json', 'w') as outfile:
    json.dump(weights, outfile)

# fd = open('data_y.txt', 'w')
# fd.write(jsondata)
# fd.close()
