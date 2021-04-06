import './App.css';
import Card from './card';
import { FoodList } from './FoodList';

function App() {
   const BasicList : FoodList[] = [
        {
            content: '01 Seat',
            isChecked: true
        },
        {
            content: 'Tea & Coffee Breaks',
            isChecked: false
        },
        {
            content: 'Wifi Available',
            isChecked: false
        },
        {
            content: 'Exclusive Seatings',
            isChecked: false
        }
   ];
   const StandardList : FoodList[] = [
        {
            content: '01 Seat',
            isChecked: true
        },
        {
            content: 'Tea & Coffee Breaks',
            isChecked: true
        },
        {
            content: 'Wifi Available',
            isChecked: false
        },
        {
            content: 'Exclusive Seatings',
            isChecked: false
        }
   ];
  
  const PremiumList : FoodList[] = [
        {
            content: '01 Seat',
            isChecked: true
        },
        {
            content: 'Tea & Coffee Breaks',
            isChecked: true
        },
        {
            content: 'Wifi Available',
            isChecked: true
        },
        {
            content: 'Exclusive Seatings',
            isChecked: true
        }
    ];
  
  return (
      <div className="App">
        <Card title="Basic" icon="fas fa-bicycle" price="$100" taxes="Including of taxes" contentList={BasicList} primaryColor="#A31E7F" />
        <Card title="Standard" icon="fas fa-car-alt" price="$200" taxes="Including of taxes" contentList={StandardList} primaryColor="#A31E7F" />
        <Card title="Premium" icon="fas fa-rocket" price="$300" taxes="Including of taxes" contentList={PremiumList} primaryColor="#A31E7F" />   
      </div>
  );
}

export default App;
