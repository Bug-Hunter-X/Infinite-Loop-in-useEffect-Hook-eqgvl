```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The dependency array is empty, so the effect runs only once after the initial render.
    // If no dependency is needed, use an empty array [] to prevent the effect from re-running. 
    // If the effect needs to run whenever count changes, then you should include `count` in the dependency array
    let id = setInterval(()=>{
        setCount(prevCount => prevCount +1)
    }, 1000)
    return ()=> clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}
```