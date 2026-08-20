import { CORE_CONCEPTS } from './data.js';

import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Card from './components/Card.jsx';
import TabButton from './components/TabButton.jsx';

function Feature() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* <Card img={components} alt="components" heading="Components" detail="Use to create resuable UI building blocks." />
      <Card img={jsxUi} alt="jsx" heading="JSX" detail="Use to create a js function with HTML body." />
      <Card img={config} alt="components" heading="Config" detail="Use to create config." />
      <Card img={stateMgmt} alt="StateMgmt" heading="State Management" detail="Use to manage the state of data in react components." /> */}
      <Card {...CORE_CONCEPTS[0]} />
      <Card {...CORE_CONCEPTS[1]} />
      <Card {...CORE_CONCEPTS[2]} />
      <Card {...CORE_CONCEPTS[3]} />
    </div>
  );
}

function Main() {
  return (
    <main>
      <HeroSection />
      <h3 className="text-3xl font-bold pb-5">React Feature</h3>
      <Feature className="my-5" />
      <h3 className="text-3xl font-bold pb-5">React Feature Demo</h3>
      <ul className='flex gap-4 items-center'>
        <TabButton>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton>
      </ul>
    </main >
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
