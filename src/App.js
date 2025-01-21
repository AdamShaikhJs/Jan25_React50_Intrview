
import './App.css';
import SearchableList from './2SearchableList';
import FolderMain from './1NestedFolder';
import FormInputType from './3FormInput';
import Pagination from './4Pagination';
// import InfiniteScroll from './5InfiniteScroll';
import TodoApp from './6TodoApp';
import Accordion from './7Accordian';
import CrousalReview from './8CrousalReview';
import CrousalSimple from './8CrousalSimple';
import OTPGenerator from './9OtpGenrator';
import NestedDropdown from './10NestedDropdown';
import NestedDropdownRecursion1 from './11NestedDropdwon';
import Dropdown from './12Dropdown';
import TcsL1Task from './13TcsL1Task';
import TodoChek from './14TodoCheck';
import FilterMethodUseCase from './15FilterMethod';

function App() {
  return (
    <div style={{margin:"5%"}}>

     <SearchableList/>
     <FolderMain/>
     <FormInputType/>
     <Pagination/>
     {/* <InfiniteScroll/> */}
     <TodoApp/>
     <Accordion/>
     <CrousalReview/>
     <CrousalSimple/>
     <OTPGenerator/>
     <NestedDropdown/>
     <NestedDropdownRecursion1/>
     <TcsL1Task/>
     <TodoChek/>
     <FilterMethodUseCase/>
     {/* <Dropdown/> */}
    </div>
  );
}

export default App;
