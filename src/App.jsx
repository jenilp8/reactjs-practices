import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { products } from './products.js';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import Welcome from './components/Welcome.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Card from './components/Card.jsx';
import TabButton from './components/TabButton.jsx';
import Footer from './components/Footer.jsx';
import FragmentEle from './components/FragmentEle.jsx';
import List from './components/List.jsx';
import Embedjs from './components/Embedjs.jsx';
import Warning from './components/Warning.jsx';
import Avatar from './components/Avatar.jsx';
import Bio from './components/Bio.jsx';
import Salary from './components/Salary.jsx';
import Badge from './components/Badge.jsx';
import Product from './components/Product.jsx';
import Category from './components/Category.jsx';
import Icon from './components/Icon.jsx';
import Modal from './components/Modal.jsx';
import Wrapper from './components/Wrapper.jsx';
import Section from './components/Section.jsx';
import Form from './components/Form.jsx';
import Counter from './components/Counter.jsx';
import Accordian from './components/Accordian.jsx';

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
  const categories = ["Electronics", "Clothing", "Shoes", "Books"];
  const users = [{
    id: 1,
    name: "Mashoor"
  }, {
    id: 2,
    name: "Hum"
  }, {
    id: 3,
    name: "Hai"
  }, {
    id: 4,
    name: "Yum"
  }, {
    id: 5,
    name: "Gulati"
  }];


  function handleSelect(selectButton) {
    setTabContent(selectButton);
    console.log(tabContent);
  }

  function formatAsUSD(value) {
    const usd = `$${value.toFixed(2)}`;
    console.log(usd);
    return usd;
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
      <FragmentEle />
      <List />
      <Embedjs />
      <Warning />
      <Avatar buttonName="Edit" />
      <Bio name="Mashoor Gulati" description="People's laughing reason" occupation="Comedian" />
      <Salary formatSalary={formatAsUSD(4500)} />
      <Badge text="Warning" />
      <Badge text="Danger" />
      <h2>Available Products</h2>
      <div onMouseEnter={() => console.log("Hovering!")} className="grid grid-cols-4 gap-4">
        {products.filter((product) => product.inStock === true).map((product) => (
          <Product key={product.name} {...product} >Nothing to show.Please scroll down.</Product>
        ))}
      </div>
      <h2>Asc. Products</h2>
      {/* <div className="grid grid-cols-4 gap-4">
        {products.sort((a, b) => a.price - b.price).map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </div> */}
      <h2>Products</h2>
      {/* <div className="grid grid-cols-4 gap-4">
        {products.length === 0 ? (
          <p>No Items</p>
        ) : (
          products.map((product) => (
            <Product key={product.name} {...product} />
          ))
        )}
      </div> */}
      <ul>
        <Category categories={categories} />
      </ul>
      <Icon width="w-10" height="w-10">🎲</Icon>
      <Icon width="w-10" height="w-10">🙌</Icon>
      <Modal modalHeading="Demo Modal" modalTitle="Modal Title">This is the demo modal. Nothing else you find here. Get lost.</Modal>
      <Wrapper>
        {users.map((user) => (<li key={user.id}>{user.id},{user.name}</li>))}
      </Wrapper>
      <Section heading="Next Section">Wait till</Section>
      <Form formHeading="Demo Form" /><br />
      <Counter />
      <button className="bg-amber-200 p-4 cursor-pointer" onClick={() => formatAsUSD(4500)}>Hit Me!, Check Console</button>
      <button className="bg-amber-300 p-4 cursor-pointer" onClick={() => formatAsUSD(3000)}>USD</button>
      <Accordian accordianTitle="Accordian 1" accordianBody="jksvbds skvdss is vdvskvdv vsv sivdv dvsdivvid vsvish v" />
      <Accordian accordianTitle="Accordian 2" accordianBody="bvbjdksvsdvbksdbvsdbs s vkjsd dsk ks vs vs vsvk vsk vsdk vs vsk vks  " />
      <div>
        <p>This child is placed in the parent div.</p>
        {createPortal(
          <p>This child is placed in the document body.</p>,
          document.body
        )}
      </div>
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
