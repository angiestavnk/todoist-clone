import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import moment from 'moment';
import { collatedTasksExist } from '../helpers'
export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', '26c806b1-161c-4519-9afc-9d39b8987d8e');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? 
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) :
        selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')
        ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', '')) :
        unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),

            }));
        })
    }, []);
}