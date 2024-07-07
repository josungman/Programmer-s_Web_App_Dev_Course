import React from 'react';
// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {

  const style = {
    App: {
      backgroundColor: 'white'
    },
    h2: {
      color: 'red'
    },
    bold_text: {
      color: 'green'
    }
  }

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    b: 4
  }

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div >
    </Container>

  );
}

Counter.defaultProps = {
  initialValue: 0
}

export default App;
