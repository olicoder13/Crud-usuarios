import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import './styles/formUser.css';

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {

    
    const {handleSubmit, register, reset} = useForm();
    

    useEffect(() => {
      reset(editUser)
    }, [editUser]);
    
    const Submit = (data) =>{
        if(editUser){
            updateUser('/users', editUser.id, data)
            setEditUser();
        }else{
            createUser('/users/', data);
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        });
        setIsOpen(false);
    }

    const handleClose = () =>{
        setIsOpen(!isOpen);
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        });
    }
  return (
    <div className={`form__background ${isOpen&&'able'}`}>
        <form className='form__container' action="" onSubmit={handleSubmit(Submit)}>
            <div onClick={handleClose} className='form__close'>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <h2 className='form__title'>Nuevo Usuario</h2>
            <div className='form__item'>
                <label htmlFor="email">Email: </label>
                <input className='input' {...register('email')} id='email' type="text" />
            </div>

            <div className='form__item'>
                <label htmlFor="password">Password: </label>
                <input className='input' {...register('password')} id='password' type="text" />
            </div>

            <div className='form__item'>
                <label htmlFor="first_name">First_name: </label>
                <input className='input' {...register('first_name')} id='first_name' type="text" />
            </div>

            <div className='form__item'>
                <label htmlFor="last_name">Last_name: </label>
                <input className='input' {...register('last_name')} id='last_name' type="text" />
            </div>

            <div className='form__item'>
                <label htmlFor="birthday">Birthday: </label>
                <input className='input' {...register('birthday')} id='birthdat' type="date" />
            </div>

            <button className='form__btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormUser