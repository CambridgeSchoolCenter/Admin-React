import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInput, setSelectInput } from './../../../redux/InputSlice'
import eventBus from '../../eventBus';
function SearchInput() {


    // Select value
    const userInput = useSelector(state => state.userInput.value);
    const userSelect = useSelector(state => state.userSelect.value);
    const dispatch = useDispatch();



    // Img function for reloading data
    const handleReload = () => {
        console.log("This logo is working");
        eventBus.publish('triggerGetData');
    }

    // LOG OUT
    const handleLogout = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className='Search w-100 d-flex gap-5 justify-content-around align-items-center p-2 '>

            {/* Logo */}
            <img className='' role='button' src='img/logo.png' width={125} height={'auto'} alt='logo' onClick={() => { handleReload() }} />


            <div className=" Input input-group mb-4">
                {/* Input */}
                <input id='SearchInput' className="form-control"
                    type="text" placeholder="Поиск"
                    onChange={(event) => { dispatch(setUserInput(event.target.value)); }}
                    value={userInput}

                />
                {/* Select */}
                <select className="input-group-text "
                    value={userSelect}
                    onChange={(event) => { dispatch(setSelectInput(event.target.value)) }}
                >
                    <option value="name">Имя</option>
                    <option value="surname">Фaмилия</option>
                    <option value="course">Курс</option>
                </select>

            </div>

            {/* Log out icons */}
            <div >
                <div onClick={handleLogout} role='button' className='d-flex flex-column align-items-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40 " fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>

                    <h5 className="me-1">Выход</h5>
                </div>
            </div>
        </div>

    )
}

export default SearchInput;

// position-absolute bottom-0 end-0 translate-middle-y m-3