import React,{useState} from 'react'

function BookEdit({book}) {
  const [title,setTitle]=useState(book.title)
const handleInputChange=(event)=>{
  setTitle(event.target.value)
}
const handleSubmit=(event)=>{
  event.preventDefault()
}
  return (
   <form onSubmit={handleSubmit} className="book-edit">
    <label>Title</label>
    <input onChange={handleInputChange} value={title} type="text" className="input" />
    <buttton className="button is-primary">Save</buttton>

   </form>
  )
}

export default BookEdit