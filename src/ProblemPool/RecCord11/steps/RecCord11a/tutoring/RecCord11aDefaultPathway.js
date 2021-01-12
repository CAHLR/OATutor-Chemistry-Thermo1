var hints = [{id: "RecCord11a-h1", type: "hint", dependencies: [], title: "Identify location", text: "The first thing we should do is to identify ordered pairs to describe each position."}, {id: "RecCord11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(1,1)"], dependencies: ["RecCord11a-h1"], title: "Ordered pairs", text: "Where is her first stop?"}, {id: "RecCord11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(5,1)"], dependencies: ["RecCord11a-h1"], title: "Ordered pairs", text: "Where is her second stop?"}, {id: "RecCord11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(8,3)"], dependencies: ["RecCord11a-h1"], title: "Ordered pairs", text: "Where is her third stop?"}, {id: "RecCord11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(8,7)"], dependencies: ["RecCord11a-h1"], title: "Ordered pairs", text: "Where is her fourth stop?"}, {id: "RecCord11a-h6", type: "hint", dependencies: ["RecCord11a-h2", "RecCord11a-h3", "RecCord11a-h4", "RecCord11a-h5"], title: "Calculate the distance", text: "The number of grid units that Tracie traveled from (x_1, y_1) to (x_2, y_2) is |x_2-x_1|+|y_2-y_1|."}, {id: "RecCord11a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["RecCord11a-h6"], title: "Calculate the distance", text: "What is |1-0|+|1-0|?"}, {id: "RecCord11a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["RecCord11a-h6"], title: "Calculate the distance", text: "What is |5-1|+|1-1|?"}, {id: "RecCord11a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["RecCord11a-h6"], title: "Calculate the distance", text: "What is |8-5|+|3-1|?"}, {id: "RecCord11a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["RecCord11a-h6"], title: "Calculate the distance", text: "What is |8-8|+|7-3|?"}, {id: "RecCord11a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["RecCord11a-h7", "RecCord11a-h8", "RecCord11a-h9", "RecCord11a-h10"], title: "Total distance", text: "What is 2+4+5+4?"}, {id: "RecCord11a-h12", type: "hint", dependencies: ["RecCord11a-h11"], title: "Conversion of Units", text: "Since each grid unit represents 1000 feet, so the total distance that Tracie traveled is 15000 feet."}, ]; export {hints};