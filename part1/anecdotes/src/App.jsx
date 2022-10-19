import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [vote, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0})
  const [selected, setSelected] = useState(0)
  const [mostVote, setMostVote] = useState(0)

  const handleRandomSelect = () => setSelected(randomInRange(0, anecdotes.length));

  const handleVote = () => {
    const copy = { ...vote };
    copy[selected] += 1;
    setVote(copy);
    
    // get the most vote
    let max = mostVote;
    let obj = Object.keys(copy);
    obj.forEach(key => {
      if (copy[key] > copy[max])
        max = key;
    });
    setMostVote(max);
  }

  function randomInRange(min, max) {  
    var nbr;
    do {
      nbr = Math.floor(Math.random() * (max - min) + min);
    } while (nbr === selected);
    console.log(nbr);
    return nbr;
  } 

  return (
    <div>
      <Section title='Anecdote of the day' selected={selected} anecdotes={anecdotes} vote={vote}/>
      <Button click={handleVote} name='vote'/>
      <Button click={handleRandomSelect} name='next anecdote' />
      <Section title='Anecdote with most votes' selected={mostVote} anecdotes={anecdotes} vote={vote}/>
    </div>
  )
}

const Button = ({ click, name }) => <button onClick={click}>{name}</button>

const Section = ({ title, selected, anecdotes, vote }) => { 
  return (
    <>
      <h1>{title}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
    </>
  );
}

export default App