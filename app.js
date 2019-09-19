const points = [[1, 4], [4, 4], [3, 2], [5, 1]];

function distanceBetweenPoints(p1, p2) {
  // c^2 = a^2 + b^2
  // ==> c = squareRootOf ( (y2-y1)^2 + (x2-x1)^2 )
  const xDelta = p2[0] - p1[0];
  const yDelta = p2[1] - p1[1];
  const deltasSquaredSummed = Math.pow(xDelta, 2) + Math.pow(yDelta, 2);
  const distance = Math.sqrt(deltasSquaredSummed);

  return distance;
}

function determinePointPairByDistanceComparator(points, distanceComparatorFn) {
  if (points.length < 2)
    throw new Error(
      'determinePointPairByDistanceComparator requires an array of points with at least two points'
    );

  const pointPair = {
    point1: points[0],
    point2: points[1],
    distance: distanceBetweenPoints(points[0], points[1]),
  };

  points.forEach((point1, point1Index) => {
    points.forEach((point2, point2Index) => {
      const arePointsIdentical = point1Index === point2Index;
      if (!arePointsIdentical) {
        const distance = distanceBetweenPoints(point1, point2);
        if (distanceComparatorFn(pointPair.distance, distance)) {
          pointPair.point1 = point1;
          pointPair.point2 = point2;
          pointPair.distance = distance;
        }
      }
    });
  });

  return pointPair;
}

function determineClosestPoints(points) {
  const isNewDistanceSmallerThanLastDistance = (newDistance, lastDistance) =>
    newDistance > lastDistance;
  const closestPoints = determineXXX(
    points,
    isNewDistanceSmallerThanLastDistance
  );

  return closestPoints;
}

function determineFarthestPoints(points) {
  const isNewDistanceLargerThanLastDistance = (newDistance, lastDistance) =>
    newDistance < lastDistance;
  const farthestPoints = determineXXX(
    points,
    isNewDistanceLargerThanLastDistance
  );

  return farthestPoints;
}

const pointCollection1 = [[1, 1], [1, 1], [2, 2], [3, 3], [4, 4]];
const pointCollection2 = [[1, 1], [4, 4], [2, 2], [3, 3]];
const pointCollection3 = [[1, 0], [4, 0], [2, 0], [3, 0]];

function testCollection(points) {
  console.log('We are testing a set of points: ', points);
  console.log('The two closest points are', determineClosestPoints(points));
  console.log('The two farthest points are', determineFarthestPoints(points));
}

testCollection(pointCollection1);
testCollection(pointCollection2);
testCollection(pointCollection3);

// Data inputs, functions, problem solving, clean code
