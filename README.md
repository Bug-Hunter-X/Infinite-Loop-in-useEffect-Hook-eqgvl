# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying a state variable within the effect without specifying any dependencies. 

The `bug.js` file contains the erroneous code, while `bugSolution.js` shows the correct way to use `useEffect` in this scenario.