function People() {
    const people = [{
      id: 0,
      name: 'Creola Katherine Johnson',
      profession: 'mathematician',
    }, {
      id: 1,
      name: 'Mario José Molina-Pasquel Henríquez',
      profession: 'chemist',
    }, {
      id: 2,
      name: 'Mohammad Abdus Salam',
      profession: 'physicist',
    }, {
      id: 3,
      name: 'Percy Lavon Julian',
      profession: 'chemist',  
    }, {
      id: 4,
      name: 'Subrahmanyan Chandrasekhar',
      profession: 'astrophysicist',
    }];
  
    const chemist = people.filter((p) => p.profession === "chemist");
    console.log(chemist);
    
  
    return (
      <>
        <ul>
        {chemist.map((person) => <li key={person.id}>{person.name}</li>)}
           
        </ul>
        
      </>
    )
  }
  
  export default People