import React from 'react';
import './App.css';
import { Polar } from 'react-chartjs-2';


var data = {
          datasets: [{
            data: [ 15.18,
                    14.11,
                    9.79,
                    11.89,
                    14.1,
                    10.62,
                    12.68,
                    11.84,
                    12,
                    11.74,
                    12.58,
                    8.12,
                    15.5,
                    13.54,
                    11.99 ],
            backgroundColor: [
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#E7E9ED',
              '#36A2EB',
              '#Fa6384',
              '#4FC0C0',
              '#FdCE56',
              '#E1E9ED',
              '#3612EB',
              '#FF638D',
              '#4B10C0',
              '#FFC056',
              '#E7E90D',
              '#36A2E0'
            ],
            label: 'BBVA'
          }],
          labels: [ 'Libretón',
                    'Libretón Premium',
                    'Libretón dólares',
                    'Winner Card',
                    'Digital',
                    'Meta Ahorro',
                    'BBVA Plan',
                    'Publico en Gral',
                    'Nómina',
                    'Pyme',
                    'Otras',
                    'Ahorro liquido',
                    'Masivos',
                    'Digital pura',
                    'Digital nómina' ]

        };

function App() {

  return (
    <div className="App">
      <h1/>Apertura de cuentas 2018<h1/>
      <Polar data={data} width={800} height={400} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default App;
