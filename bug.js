In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component rendered by a route.  This leads to `undefined` values for route parameters.

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // This will always be undefined if not inside a Route component
  console.log(params);
  return <div>...</div>;
}
```