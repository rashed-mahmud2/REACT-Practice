
const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[date.getDay()];

const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentyear = date.getFullYear();

const today = `${currentDay} / ${currentMonth} / ${currentyear} - ${day}`


function Card(props) {
  // console.log(props);

  const {titleText, desText} = props
  
  return<> <div className='card'>
  <h3 className='card-title'>{titleText}</h3>
  <p className='card-body'>{desText}</p>
  <p className='cardfooter'>{today}</p>
 </div>
 </>
}

export default Card;