function centroids = computeCentroids(X, idx, K)
%COMPUTECENTROIDS returs the new centroids by computing the means of the 
%data points assigned to each centroid.
%   centroids = COMPUTECENTROIDS(X, idx, K) returns the new centroids by 
%   computing the means of the data points assigned to each centroid. It is
%   given a dataset X where each row is a single data point, a vector
%   idx of centroid assignments (i.e. each entry in range [1..K]) for each
%   example, and K, the number of centroids. You should return a matrix
%   centroids, where each row of centroids is the mean of the data points
%   assigned to it.
%

% Useful variables
[m n] = size(X);

% You need to return the following variables correctly.
centroids = zeros(K, n);


for i = 1:size(centroids, 1)
    count = 0;
    for j = 1:m
        if idx(j) == i
            count = count + 1;
            centroids(i,:) = centroids(i,:) + X(j,:);
        end
    end
    if count > 0
        centroids(i,:) = centroids(i,:) / count;
    end
end







% =============================================================


end

