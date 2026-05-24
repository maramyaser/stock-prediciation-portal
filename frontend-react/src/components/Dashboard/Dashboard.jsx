import React, {useEffect} from 'react'
import axiosInstance from '../../axiosinstance'
const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
        try{
            const response = await axiosInstance.get('/protected-view/')
            console.log('Success:', response.data)
        }
        catch(error){
          console.error('Error fetching protected data', error)
        }
    }
    fetchProtectedData()
  }, [])
  return (
    <div className='text-light container '>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  )
}

export default Dashboard 