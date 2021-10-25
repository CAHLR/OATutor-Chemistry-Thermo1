var hints = [{id: "MoApp3a-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "The known quantities are 34 and 0.05.", variabilization: {}}, {id: "MoApp3a-h2", type: "hint", dependencies: ["MoApp3a-h1"], title: "Determine unknown quantities", text: "The unknown quantity in this problem is the talk-time.", variabilization: {}}, {id: "MoApp3a-h3", type: "hint", dependencies: ["MoApp3a-h2"], title: "Assign a variable", text: "Let x equal the talk-time.", variabilization: {}}, {id: "MoApp3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.05\\right) x+\\left(34\\right)$$"], dependencies: ["MoApp3a-h3"], title: "Translation to Math Operations", text: "What is the mathematical form of \"a monthly service fee of $34 plus $.05/min talk-time\"?", variabilization: {}}, ]; export {hints};