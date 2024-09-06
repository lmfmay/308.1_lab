// Part One: Math Problems---------------------------------
    // Declare variables
    const n1 = 10;
    const n2 = 15;
    const n3 = 20;
    const n4 = 5;
    // Check if all numbers are divisible by 5. Cache the result in a variable.
    const isDiv5 = (n1 % 5) +  (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
    // Check if the first number is larger than the last. Cache the result in a variable.
    const isFirstlarge = n1 > n4;
    // Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    let doMath = n2 - n1;
    // Multiply the result by the third number.
    doMath *= n3;
    // Find the remainder of dividing the result by the fourth number.
    doMath %= n4;
    // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
    const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
    console.log(`Part 1 Solution:
        Each of the four numbers are divisible by 5: ${isDiv5}.
        The first number is larger than the last: ${isFirstlarge}
        The result from the arithmatic chain is: ${doMath}
        Each number is less than 25: ${isUnder25}`);

// Part Two: Practical Math----------------------------------
    /**You are planning a cross-country road trip! Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip? */
    //Distance of trip is 1,500 miles.
    const tripDist = 1500;
    // At 55 miles per hour, you get 30 miles per gallon. At 60 miles per hour, you get 28 miles per gallon. At 75 miles per hour, you get 23 miles per gallon.
    const mpgAt55 = 30;
    const mpgAt60 = 28;
    const mpgAt75 = 23;
    //Gallons of fuel for entire trip.
    const gallonsNeeded55 = tripDist / mpgAt55;
    const gallonsNeeded60 = tripDist / mpgAt60;
    const gallonsNeeded75 = tripDist / mpgAt75;
    const gallonsNeededcombi = (0.6*tripDist/mpgAt60)+(0.4*tripDist/mpgAt75);
    // Will your budget be enough to cover the fuel expense? fuel budget of $175. average cost of fuel is $3 per gallon.
    const fuelBdgt = 175;
    const fuelCost = 3;
    const cost55 = gallonsNeeded55 * fuelCost;
    const cost60 = gallonsNeeded60 * fuelCost;
    const cost75 = gallonsNeeded75 * fuelCost;
    const costCombi = gallonsNeededcombi * fuelCost;
    const budget55 = fuelBdgt >= cost55;
    const budget60 = fuelBdgt >= cost60;
    const budget75 = fuelBdgt >= cost75;
    const budgetCombi = fuelBdgt >= costCombi

    // Trip in hours
    const tripHours55 = tripDist / 55;
    const tripHours60 = tripDist / 60;
    const tripHours75 = tripDist / 75;
    const tripHourscombi = (0.6*tripDist/60)+(0.4*tripDist/75);
    //Evaluation of problem
    console.log(`Part 2 Solution:
    Fuel efficiency: Travelling at 55 mph, 60 mph and 75 mph at constant speed require ${gallonsNeeded55},${gallonsNeeded60}, and ${gallonsNeeded75} gallons of fuel respectively.
        Is there enough fuel budget to travel at 55 miles? ${budget55}, it costs ${cost55}
        Is there enough fuel budget to travel at 60 miles? ${budget60}, it costs ${cost60}
        Is there enough fuel budget to travel at 75 miles? ${budget75}, it costs ${cost75}
    Let's consider the road trip hours at different speeds.
        Hours travelling at 55 miles: ${tripHours55}
        Hours travelling at 60 miles: ${tripHours60}
        Hours travelling at 75 miles: ${tripHours75}
    All things considered, it would make the most sense to travel at a combination of speeds so that you can get to your destination faster without busting the budget!
    Travelling at a combination of 60mph for 900 miles and 75mph for 600 miles cost ${costCombi} and takes ${tripHourscombi} hours.`);

// Part Three: Future Exploration----------------------------