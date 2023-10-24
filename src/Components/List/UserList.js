import React, { useEffect, useState, useCallback, useMemo } from 'react'
import Users from './Users'
import { useSelector, useDispatch } from 'react-redux';
import { SetData } from '../../redux/UserDatas';
import axios from 'axios';
import DetailUser from './DetailUser';
import '../../css/List.css'
import eventBus from '../eventBus';
import { APP_URL } from '../../config';

function UserList() {
  const [show, setShow] = useState(false);
  const [Detail, SetDetail] = useState([]);
  const UserData = useSelector(state => state.UserData.value);
  const dispatch = useDispatch();
  const [Istrig, setIsTrig] = useState(false);

  // Headers

  const token = localStorage.getItem('token');
  const config = useMemo(() => {
    return {
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
    };
  }, [token]);
  // Get Students Datas 
  const GetData = useCallback(() => {


    console.log("This message is before getting data");

    axios.get(`${APP_URL}/students`, config)
      .then(response => {
        console.log("This message is AFTER getting data");
        console.log("This is .......................", response.data);
        dispatch(SetData(response.data));

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch, config])


  // Making Visit false (also sending it to server)
  const Visit = (id) => {
    axios.put(`${APP_URL}/visit_student/${id}`, { Userid: id }, config)
      .then(response => {
        console.log("Visited");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Showing modal with all student's detail info
  const ShowModal = (detaleData) => {
    console.log(detaleData);
    SetDetail(detaleData);
    setShow(true);
    Visit(detaleData._id);


  }

  // Closing modal and refreshing data (getting that again)
  const CloseModal = () => {
    eventBus.publish('triggerGetData');
    setShow(false);
  }


  // Getting data at the begging of the code and pushing GetData function to evenBus
  useEffect(() => {
    GetData();
    if (!Istrig) {
      eventBus.subscribe('triggerGetData', GetData);
      console.log("This is a useEffact state")
      setIsTrig(true);
    }



  }, [Istrig, GetData]);
  return (
    <div className='Main'>

      <Users Data={UserData} ShowModal={ShowModal} />

      {/* Modal */}
      {show &&
        <DetailUser Close={CloseModal} Data={Detail} />
      }
    </div>

  )
}

export default UserList;