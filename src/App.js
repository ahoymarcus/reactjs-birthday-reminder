import React, { useState } from 'react';
import data from './data';
import List from './List';



function App() {
  const [ title, setTitle ] = useState('Friends List');
  const [ btnText, setBtnText ] = useState('Today birthdays');
  const [ people, setPeople ] = useState(data);
  const [ date, setDate ] = useState(new Date());


  const handleClearCard = (e) => {
    console.log('you clicked me');
    console.log(typeof data);

    setPeople([]);
  }

  const handOnClick = (e) => {
    console.log(date);

    if (btnText === 'Today birthdays') {
      const todayFormattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      setDate(todayFormattedDate);
      console.log(todayFormattedDate);


      const todayBirthdays = people.filter((person) => {
        return person.date.slice(0,6) === todayFormattedDate.slice(0,6);
      });

      console.log(todayBirthdays);

      setPeople(todayBirthdays);
      setTitle(`Today's Anniversaries`);
      setBtnText('Friends List');
    } else {
      setBtnText('Today birthdays');
      setTitle('Friends List');
      setPeople(data);
      setDate(new Date());
    }
  };
  
  return (

    <main>
      
      <section className="container">
        <span className="clear-all" onClick={handleClearCard} >Clear all</span>
        <h3>{title} - {people.length} contact(s)</h3>

        <List people={people} />

        <button onClick={handOnClick}>{btnText}</button>
      </section>
    </main>
  );
}



export default App;



