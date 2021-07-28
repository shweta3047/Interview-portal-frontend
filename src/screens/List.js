import styles from './styles/list.module.css';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Moment, { MomentProps } from 'react-moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../config';

function List() {
  const [interviews, setInterviews] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const history = useHistory();
  useEffect(() => {
    fetch(`${API_URL}/interviews/upcoming`, {})
      .then((res) => res.json())
      .then((data) => {
        setInterviews(data.interviews);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (name) => {
    console.log(name);
  };

  const handleDelete = (interview) => {
    fetch(`${API_URL}/interviews/delete/${interview._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setDeleted((prev) => !prev);
      })
      .catch((err) => console.log(err));
    history.go(0);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Upcoming Interviews</div>
        {interviews.map((interview, _index) => (
          <div className={styles.card}>
            <div className={styles.dateTime}>
              <div className={styles.dateItem}>
                <h3>Start Date-Time</h3>
                <Moment
                  className={styles.formatDate}
                  date={interview.startTimestamp}
                  format='YYYY/MM/DD'
                />
                <Moment
                  className={styles.formatDate}
                  date={interview.startTimestamp}
                  format='hh:mm:ss'
                />
              </div>
              <div className={styles.dateItem}>
                <h3>End Date-Time</h3>
                <Moment
                  className={styles.formatDate}
                  date={interview.endTimestamp}
                  format='YYYY/MM/DD'
                />
                <Moment
                  className={styles.formatDate}
                  date={interview.endTimestamp}
                  format='hh:mm:ss'
                />
              </div>
            </div>
            <div className={styles.participants}>
              <h2>Participants</h2>
              <div className={styles.listParticipants}>
                {interview.participants.map((participant, _index) => (
                  <h3>{participant.firstName}</h3>
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <div
                onClick={() => handleEdit(interview)}
                className={styles.edit}
              >
                <Link
                  to={{
                    pathname: '/schedule-interview',
                    state: interview,
                  }}
                ></Link>
                Edit
              </div>
              <div
                onClick={() => handleDelete(interview)}
                className={styles.delete}
              >
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default List;
