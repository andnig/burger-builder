import React from 'react';
// Note: the following line is to use css modules library to dynamically create CSS classes
import styles from './example.module.css'; // Import css modules stylesheet as styles
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
