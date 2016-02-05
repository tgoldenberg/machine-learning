function [J, grad] = costFunction(theta, X, y)
%COSTFUNCTION Compute cost and gradient for logistic regression
%   J = COSTFUNCTION(theta, X, y) computes the cost of using theta as the
%   parameter for logistic regression and the gradient of the cost
%   w.r.t. to the parameters.

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;

grad = zeros(size(theta));

n = size(theta, 1);

h = sigmoid(X*theta);
J = ((-y)' * log(h)-(1-y)' * log(1-h))/m;

for i=1:m, 
    hx = sigmoid(theta'*X(i, :)');
    temp = hx - y(i);
    for j=1:n,
        grad(j) = grad(j) + temp * X(i,j);
    end;
end;
grad = grad/m;







% =============================================================

end
