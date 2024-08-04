import React from 'react';

import LineGraph from './LineGraph'
import PieChartCard from './PieChartCard'

import './App.css';

const  App= () =>(
    <div className='bg-container'>
      <div className='select-options' >
      <ul className='uorder-list'>
        <li className='list-item hightlight-item'>Dashboard</li>
        <li className='list-item'>Inventory</li>
        <li className='list-item'>Order</li>
        <li className='list-item'>Returns</li>
        <li className='list-item'>Customers</li>

 

        <li className='list-item'>Shopping</li>
        <li className='list-item'>Channel</li>
        <li className='list-item'>Integrations</li>
      </ul>
      <select className='select-item'>
        <option>Calculators</option>
      </select>
      <select className='select-item'>
        <option>Reports</option>
      </select>
      <select className='select-item'>
        <option>Account</option>
      </select>
      </div>
      <div className='content-container'>
          <nav className='nav-container'>
            <p className='dashboard'>Dashboard</p>  
          </nav> 
          <div className='dashboard-container'>
            
            <LineGraph />
            <PieChartCard />
            
          </div>
      </div>
    </div>
  )


export default App;
