// import kartinok 
import shapka1 from '../src/img/shapka1.svg';
import shapka2 from '../src/img/shapka2.svg';
import LogoSun from '../src/img/LogoSun.svg';
import prevsis from '../src/img/prevsis.svg';
import spring from '../src/img/spring.svg';
import sosrelkoi from '../src/img/sostrelkoi.svg';
import strelka from '../src/img/strelka.svg';
import prev from '../src/img/prev.svg';





import './App.css'; 

function App() {
  return (
    <>
      <div className="banner">
        <div className="flex flex-col items-center pt-1 bg-color bg-orange-500">
          <p className="text-1xl  text-center ">Summer sale up to 50% off</p>
        </div>
      </div>
      <div className="header">
        <div className="logo1 justify-center flex items-center">
          <div className='justify-center flex items-center'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="logo2 flex justify-center items-end mb-[80px] gap-[960px]">
          <div className="w-96 mb-[80px] text-white text-3xl font-bold font-['Inter'] leading-10">Spring Season</div>
          <div className="text-center mb-[80px] text-white text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">view collection</div>
        </div>
      </div>
      <div className="bg-color bg-orange-500">
        <p>Numero</p>
      </div>

    </>
  );
}

export default App;