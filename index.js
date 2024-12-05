const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
];

function superbowlWin(records) {
    const winningYear = records.find(record => record.result === "W");
    return winningYear ? winningYear.year : undefined;
}

console.log(superbowlWin(record)); // Outputs: "2015"
