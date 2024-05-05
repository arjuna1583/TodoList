import { FaEdit, FaTrash } from "react-icons/fa"

export default function TodoCard(props) {
  const { children } = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <FaEdit />
        <FaTrash />
      </div>
    </li>
  )
}
