import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const data = [
  {
    id: 1,
    name: '테스트1',
    content: '아아wef아'
  },
  {
    id: 2,
    name: '테스트2',
    content: '아weee아아'
  },
  {
    id: 3,
    name: '테스트3',
    content: '아아123아'
  }

]


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


function App() {
  return (
    <div className="App">
      {
        data.map((it, idx) => (
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">Click me!</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{it.content}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))
      }
    </div >
  );
}

export default App;
