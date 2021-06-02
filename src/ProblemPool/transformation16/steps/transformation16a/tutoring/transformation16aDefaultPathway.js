var hints = [{id: "transformation16a-h1", type: "hint", dependencies: [], title: "Testing Even Functions", text: "Let's start by checking if the function is even. Even functions are defined as functions where $$f(x)=f(-x)$$.", variabilization: {}}, {id: "transformation16a-h2", type: "hint", dependencies: ["transformation16a-h1"], title: "Testing Even Functions", text: "Evaluate f(-x). $$f(-x)=-\\left(x^3\\right)-\\left(2\\right) x$$. Since this is not equivalent to $$x^3+\\left(2\\right) x$$, the function is not even.", variabilization: {}}, {id: "transformation16a-h3", type: "hint", dependencies: ["transformation16a-h2"], title: "Testing Odd Functions", text: "Now, let's check if the function is odd. Odd functions are defined as functions where $$-f(x)=f(-x)$$.", variabilization: {}}, {id: "transformation16a-h4", type: "hint", dependencies: ["transformation16a-h3"], title: "Testing Odd Functions", text: "We already found f(-x) when we tested if the function was even, so we just have to evaluate -f(x). $$-f(x)=-\\left(x^3+\\left(2\\right) x\\right)=-x$$. Since this is equivalent to $$-\\left(x^3\\right)-\\left(2\\right) x$$, the function is odd.", variabilization: {}}, ]; export {hints};