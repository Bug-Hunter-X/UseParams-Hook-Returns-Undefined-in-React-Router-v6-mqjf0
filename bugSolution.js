The solution involves ensuring that the `useParams` hook is used inside a component that is directly rendered by a `<Route>` or `<Routes>` component.

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // params will have correct values here
  return <div>My Component with ID: {params.id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}/>
    </Routes>
  );
}


```