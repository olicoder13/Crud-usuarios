import React from 'react'
import './styles/cardUser.css'

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
    //console.log(user);

    const handleDelete = () =>{
        deleteUser('/users', user.id)
    }

    const handleEdit = () =>{
        setEditUser(user)
        setIsOpen(true);
    }

  return (
    <article className='card'>
        <h3 className='title__card'>{user.first_name} {user.last_name}</h3>
        <ul className='list__container'>
            <li><span>correo: </span><span>{user.email}</span></li>
            <li><span>Cumpleaños: </span><span>{user.birthday}</span></li>
        </ul>
        <button className='btn_card_user' onClick={handleDelete}>Eliminar</button>
        <button className='btn_card_user' onClick={handleEdit}>Editar</button>
    </article>
  )
}

export default CardUser