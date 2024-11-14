import MainContent from './MainContent';
import Sidebar from './Sidebar';

function Dashboards() {
  return (
    <div className='flex h-screen bg-slate-800'>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboards
