// Part One: Math Problems---------------------------------
    // Declare variables
    const n1 = 10;
    const n2 = 15;
    const n3 = 20;
    const n4 = 5;
    // Check if all numbers are divisible by 5. Cache the result in a variable.
    const isDiv5 = (n1 % 5) +  (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
    console.log(`Each of the four numbers are divisible by 5: ${isDiv5}`);
    // Check if the first number is larger than the last. Cache the result in a variable.
    const isFirstlarge = n1 > n4;
    console.log(`The first number is larger than the last: ${isFirstlarge}`);
    // Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    let doMath = n2 - n1;
    // Multiply the result by the third number.
    doMath *= n3;
    // Find the remainder of dividing the result by the fourth number.
    doMath %= n4;
    console.log(`The result from the arithmatic chain is: ${doMath}`);
    // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
    const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
    console.log(`Each number is less than 25: ${isUnder25}`);

// Part Two: Practical Math----------------------------------
// Part Three: Future Exploration----------------------------