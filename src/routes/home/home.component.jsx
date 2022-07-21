import {Outlet} from 'react-router-dom'
import PetTest from '../../components/pet-test/pet-test.component';

//import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
        <Outlet />
        <PetTest />
    </div>
  )
  ;
};


export default Home;