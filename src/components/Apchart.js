import React from 'react';
import {Line , Pie} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'

// export default class IncomeChart extends React.Component{
//   render(){
    const sumexpence = (props) => {
      let sum =0
      this.props.data.filter(item => {if (item.expenseTransaction ==='expenseAmount') sum += item.expenseAmount});
      return sum
    }
    const sumIncome = (props) => {
      let sum =0
      this.props.data.filter(item => {if (item.incomeTransaction ==='incomeAmount') sum += item.incomeAmount});
      return sum
    }
  


  const data = {
    labels :[
      'expenseAmount',
      'incomeAmount',
    ],
    datasets:[{
      label: 'First Dataset',
      data:[100,89 , 78 ],
      backgroundColor:[
        'rbg(255,99,132,0.2)',
        'rbg(54, 162, 235,0.2)'
      ],
      borderwidth:1,
      hoveroffset:4
    }
  
    ]}
  ;
export default function Doughnat(){
  return(
    <div className='chart'>
      <h1>Chart</h1>
      <div className='ghizlane'>
        <Pie data = {data}/>
      </div>

      <div className='ghizo'>
        <Line data = {data}/>
      </div>
    </div>
  )
}
