type Combinable = number | string;

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultType: "as-number" | "as-text"
) => {
    let result: Combinable;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number"
    ) {
        result = +input1 + +input2;
        return +result;
    } else {
        result = input1.toString() + input2.toString();
        return result.toString();
    }
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-text");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
