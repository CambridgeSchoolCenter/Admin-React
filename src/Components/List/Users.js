import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Users({ Data, ShowModal }) {
    const userInput = useSelector(state => state.userInput.value);
    const userSelect = useSelector(state => state.userSelect.value);
    const userCategory = useSelector(state => state.userCategory.value);
    const [FData, SetFData] = useState(Data);

    // For Modal
    const handleShow = (detailData) => ShowModal(detailData);


    const CousreCategory = [
        [
            "Английский",
            "Немецкий",
            "Русский",
            "Китайский"
        ],
        [
            "Таджиский",
            "Физика",
            "Химия",
            "Биология"
        ],
        [
            "Младший медицинский работник",
            "Первая медицинская помощь",
            "Укол",
            "Акапелла",
            "Манометр",
            "Изучение медикаментов",
            "Массаж",
        ]
    ]


    // Filtering Data for displaying

    // useEffect
    useEffect(() => {

        var FilteredData = Data.filter((data) => {
            const isUserInputEmpty = userInput === '';
            const isDataMatchingInput = data[userSelect].toLowerCase().includes(userInput.toLowerCase());

            if (userCategory === "All") {
                return isUserInputEmpty || isDataMatchingInput;
            } else if (userCategory === "Lang" && CousreCategory[0].includes(data.course)) {
                return isDataMatchingInput;
            } else if (userCategory === "Sub" && CousreCategory[1].includes(data.course)) {
                return isDataMatchingInput;
            } else if (userCategory === "Med" && CousreCategory[2].includes(data.course)) {
                return isDataMatchingInput;
            }

            // Return false for any unmatched categories
            return false;


        })

        FilteredData.reverse();
        SetFData(FilteredData);
    }, [userInput, userSelect, userCategory, Data, CousreCategory])



    return (

        <div className='ListUser'>
            <table className='table  table-light table-hover '>
                <thead >
                    <tr>
                        <th scope='col'>ФИО</th>
                        <th scope='col'>Курс</th>
                        <th scope='col'>Level</th>
                        <th scope='col'>Тел</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody >
                    {FData.map((user, index) => {
                        return <tr role="button" className='rounded-5' key={index} onClick={() => handleShow(user)}>

                            {/* Name */}
                            <td>{user.surname} <span className=''> {user.name}</span></td>

                            {/* Course */}
                            <td>{user.course}</td>

                            {/* Level */}
                            <td className='alighn-center' > {user.level ? user.level : '-'}</td>

                            {/* Phone */}
                            <td> +992 {user.phone}</td>

                            {/* Green dot */}
                            <td> {!user.visit ? <div
                                className="rounded-circle bg-success"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                }}
                            ></div> : ''}
                            </td>
                        </tr>

                    })}
                </tbody>


            </table>




        </div>
    )
}

export default Users