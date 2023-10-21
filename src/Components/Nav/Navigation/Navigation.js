import React from 'react'
import { menuItems } from './menuItems'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategoryInput } from './../../../redux/InputSlice'
function Navigation() {

    // Menu navigation (ALL, LangCourse, SubCourse, MedCourse)
    const [menu, SetMenu] = useState("All");
    const dispatch = useDispatch();

    // Changing menu
    const Change = (type) => {
        SetMenu(type);
        dispatch(setCategoryInput(type));

    };


    return (

        <div className='Navigation'>
            <ul className='menu-items  d-flex justify-content-around'>
                {menuItems.map((item) => {
                    return <li key={item.id}
                        className={menu === item.type ? 'list-group nav-list active' : 'list-group nav-list'}
                    >

                        <span 
                            onClick={() => Change(item.type)}
                        >{item.title}</span>

                    </li>
                })}
            </ul>

        </div>
    )
}

export default Navigation