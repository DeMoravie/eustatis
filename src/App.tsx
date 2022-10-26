import { useState } from 'react'
import './App.css'
import Footer from './components/footer';
import PieChart from './highcharts-components/pieChart';
import BarChart from './highcharts-components/barChart';
import NegativeBarChart from './highcharts-components/negativeBarChart';
import { increaseData } from './highcharts-components/data/negativeBarChart'
import { detailedBarChartData, barChartData } from './highcharts-components/data/barChart';
import { ohneUndMit2010, ohneUndMitAusfuehrlich2010, mitAusfuehrlich2010 } from './highcharts-components/data/pieChart2010'
import { ohneUndMit2020, ohneUndMitAusfuehrlich2020, mitAusfuehrlich2020 } from './highcharts-components/data/pieChart2020'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen flex justify-center">
      <div className="lg:w-10/12 sm:w-screen">
        <header className="flex flex-col items-center mb-10">
          <div className="lg:w-1/2 sm:w-screen text-4xl">In Deutschland lebende Bevölkerung im Alter von 0 bis 5 Jahren</div>
          <div className="lg:w-1/2 sm:w-screen text-xs pt-4 ">(Quellen:
            1. <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Migration-Integration/Publikationen/Downloads-Migration/migrationshintergrund-2010220217004.pdf;jsessionid=1CD4FCC6F8B39C7295F2941F974B484F.live711?__blob=publicationFile">Bevölkerung und Erwerbstätigkeit Bevölkerung mit Migrationshintergrund – Ergebnisse des Mikrozensus 2021 – Statistisches Bundesamt (Destatis), 2022.)</a>, 
            2. <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Migration-Integration/Publikationen/Downloads-Migration/migrationshintergrund-sonderausgabe-5122121109004.pdf;jsessionid=1CD4FCC6F8B39C7295F2941F974B484F.live711?__blob=publicationFile">Bevölkerung mit Migrationshintergrund – Ergebnisse des Mikrozensus 2010 – hochgerechnet auf Basis des Zensus 2011 - Statistisches Bundesamt (Destatis), 2017.)</a>
          </div>
        </header>
        <div>
          <div className="flex flex-col justify-center">
            <div className="text-2xl mt-10">Gesamtbevölkerung:</div>
            <div className="mt-10 flex justify-center flex-col lg:flex-row"> 
              <div>
                <PieChart data={ohneUndMit2010} title="2010"/>
              </div>
              <div>    
                <PieChart data={ohneUndMit2020} title="2020"/>
              </div>
            </div>
            <div className="mt-10 flex justify-center flex-col lg:flex-row"> 
              <div>
                <PieChart data={ohneUndMitAusfuehrlich2010} title="2010" />
              </div>
              <div>    
                <PieChart data={ohneUndMitAusfuehrlich2020} title="2020" />
              </div>
            </div>
            <div className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 pl-5 pr-5"></div>
            <div className="text-2xl mt-2">Bevölkerung mit Migrationshintergrund:</div>
            <div className="mt-10 flex justify-center flex-col lg:flex-row">         
              <div>
                <PieChart data={mitAusfuehrlich2010} title="2010" />
              </div>
              <div>
                <PieChart data={mitAusfuehrlich2020} title="2020" />
              </div>
            </div>
            <div className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 pl-5 pr-5"></div>
            <div className="text-2xl mt-2">Bevölkerungszuwachs nach Bevölkerungsgruppe von 2010 bis 2020:</div>
            <div className="mt-10 flex flex-row justify-center">
              <div>
                <BarChart data={barChartData} />
              </div>
            </div>
            <div className="mt-10 flex flex-row justify-center">
              <div>
                <BarChart data={detailedBarChartData} />
              </div>
            </div>
            <div className="text-2xl mt-16">Prozentualer Bevölkerungszuwachs ausgewählter Bevölkerungsgruppen von 2010 bis 2020:</div>
            <div className="mt-10 flex flex-row justify-center">
              <div>
                <NegativeBarChart data={increaseData} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>      
    </div>    
  )
}

export default App;
