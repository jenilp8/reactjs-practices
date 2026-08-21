import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { useState } from 'react';

import Welcome from './components/Welcome.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Card from './components/Card.jsx';
import TabButton from './components/TabButton.jsx';
import Footer from './components/Footer.jsx';
import FragmentEle from './components/FragmentEle.jsx';

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

  const [tabContent, setTabContent] = useState('components');

  function handleSelect(selectButton) {
    setTabContent(selectButton);
    console.log(tabContent);
  }

  return (
    <main>
      <HeroSection />
      <h3 className="text-3xl font-bold pb-5">React Feature</h3>
      <Feature />
      <h3 className="text-3xl font-bold mt-5 pb-5">React Feature Demo</h3>
      <ul className='tab-btn flex gap-4 items-center'>
        <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
      </ul>
      <div id="tab-content" className="p-5 my-5">
        <h3 className="font-bold text-2xl text-white">{EXAMPLES[tabContent].title}</h3>
        <p className="text-white">
          {EXAMPLES[tabContent].description}
        </p>
        <pre className="font-bold text-2xl text-white">
          <code>
            {EXAMPLES[tabContent].code}
          </code>
        </pre>
      </div>
      <h3 className="text-3xl font-bold mt-5 pb-5">Components Practices</h3>
      <Welcome />
      <FragmentEle/>
      <Footer />
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
