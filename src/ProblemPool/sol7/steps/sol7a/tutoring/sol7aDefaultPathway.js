var hints = [{id: "sol7a-h1", type: "hint", dependencies: [], title: "Eliminate a Variable", text: "The y's are already opposites so they will be eliminated once we add up the two equations. \\n $$\\left(3\\right) x-\\left(2\\right) y=1$$ \\n $$-x+\\left(2\\right) y=9$$", variabilization: {}}, {id: "sol7a-h2", type: "hint", dependencies: ["sol7a-h1"], title: "Add the Equations to Eliminate One Variable", text: "Add the x's, y's, and constants. y will be eliminated and then solve for x. \\n $$\\left(2\\right) x=10$$ \\n $$x=5$$", variabilization: {}}, {id: "sol7a-h3", type: "hint", dependencies: ["sol7a-h2"], title: "Substitute Solution into Original Equations", text: "Substitute $$x=5$$ into the first equation, $$\\left(3\\right) x-\\left(2\\right) y=1$$. Then solve for y. \\n $$\\left(3\\right) x-\\left(2\\right) y=1$$ \\n $$\\left(3\\right) \\left(5\\right)-\\left(2\\right) y=1$$ \\n $$\\left(15\\right)-\\left(2\\right) y=1$$ \\n $$-\\left(2\\right) y=-14$$ \\n $$y=7$$", variabilization: {}}, {id: "sol7a-h4", type: "hint", dependencies: ["sol7a-h2", "sol7a-h3"], title: "Solution as Ordered Pair", text: "Solution to the system of equations is (5,7).", variabilization: {}}, ]; export {hints};