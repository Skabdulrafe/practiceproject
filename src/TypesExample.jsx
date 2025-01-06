import Button from 'react-bootstrap/Button';
import './App.css'
function TypesExample() {
  return (
    <>
     <div className="d-flex gap-5 mb-2">
      <Button variant="outline-primary" size="lg">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning" size="lg">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
    
      <Button variant="info">Info</Button>
     </div>
    </>
  );
}

export default TypesExample;