import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import {useHistory} from 'react-router-dom'
import IssueCard from './IssueCard'

export default function Dashboard() {
    const [userId] = useState(localStorage.getItem('userId'))
    const [issues, setIssues] = useState();

    console.log(issues)

    useEffect(()=>{
        axiosWithAuth().get(`api/auth/users/${userId}/issues`)
        .then(res =>{
            console.log(res)
            setIssues(res.data)
            




        })
        .catch(err =>{
            console.log('No Data coming in', err)
        })
    },[userId])

    return (
        <div>

        {issues.map(issue =>{
            return (
                <IssueCard
                key={issue.id}
                id={issue.id}
                title={issue.title}
                category={issue.category}
                image={issue.imageURL}
 

                />
            )
        })}
        
    

        </div>
    )
}
