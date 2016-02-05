function [J, grad] = lrCostFunction(theta, X, y, lambda)
%COSTFUNCTION Compute cost and gradient for logistic regression
%   J = COSTFUNCTION(theta, X, y) computes the cost of using theta as the
%   parameter for logistic regression and the gradient of the cost
%   w.r.t. to the parameters.
% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

templog(:, 1) = log(sigmoid(X*theta));
templog(:, 2) = log(1 - (sigmoid(X*theta)));
tempy(:, 1) = y;
tempy(:, 2) = 1 - y;
temp = templog.*tempy;

J = (1/m)*(-sum(temp(:, 1))-sum(temp(:, 2))) + ...
    (lambda/(2*m))*sum(theta(2:end, 1).^2)

grad(1,1) = (1/m)*sum((sigmoid(X*theta)-y).*X(:,1));
grad(2:end, 1) = ((1/m)*((sigmoid(X*theta)-y)'*X(:, 2:end)))' + (lambda/m)*theta(2:end)

grad = grad(:);

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta
%
% Note: grad should have the same dimensions as theta
%
% options = optimset('GradObj', 'on', 'MaxIter', 100);
% [optTheta, functionVal, exitFlag] = fminunc(@costFunction, theta, X, y, options)









% =============================================================

end
