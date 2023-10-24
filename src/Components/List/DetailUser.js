import React from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { APP_URL } from '../../config';
function DetailUser({ Close, Data, }) {
    Modal.setAppElement('#root');

    // Headers

    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `${token}`,
        'Content-Type': 'application/json', // You may need other headers as well
    };

    const config = {
        headers: headers,
    };

    // Months
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];
    // Assuming you have the server date string
    const BirthDate = new Date(Data.date_of_birth);
    const Created = new Date(Data.createdAt);
    // Extract day, month, and year components
    var day = BirthDate.getDate();
    var month = months[BirthDate.getMonth()];
    var year = BirthDate.getFullYear();
    // Formatted
    const DateOfBirth = `${day} ${month} ${year}`;
    day = Created.getDate();
    month = months[Created.getMonth()];
    year = Created.getFullYear();

    const createdAt = `${day} ${month} ${year}`;
    const handleClose = () => Close(false);



    const Delate = (e) => {

        e.preventDefault();
        axios.delete(`${APP_URL}/student_del/${Data._id}`, config)
            .then((response) => {
                // Handle success (e.g., show a success message)
                console.log('Resource deleted successfully:', response.data);
            })
            .catch((error) => {
                // Handle error (e.g., show an error message)
                console.error('Error deleting resource:', error);
            });

        handleClose();
    }

    return (
        <div className="modal modal-sheet position-fixed d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '800px' }}>
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header border-bottom-0">
                        <h1 className=""> {Data.surname} {Data.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body py-0">
                        <div className='d-flex justify-content-around'>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Курс: {Data.course}</li>
                                <li className="list-group-item">Уровень: {Data.level ? Data.level : '----'}</li>
                                <li className="list-group-item">Подал заявку в : {createdAt}</li>
                            </ul>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Дата рождение: {DateOfBirth}</li>
                                <li className="list-group-item">Тел: +992 {Data.phone}</li>
                                <li className="list-group-item">Пол : {Data.gender}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer flex justify-content mt-5 align-items-stretch w-100 gap-2 pb-3 border-top-0">
                        <button type="button" className="btn btn-lg btn-danger" data-bs-dismiss="modal" onClick={Delate}>Удалить</button>
                        <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailUser