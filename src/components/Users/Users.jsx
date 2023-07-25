import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getadminUsers } from '../../redux/actions/admin'
import Loader from "../Loader/Loader"

const Users = () => {

    const dispatch=useDispatch()
    const {loading,users}=useSelector(state=>state.admin)
    useEffect(()=>{
        dispatch(getadminUsers())
    },[dispatch])
  return (
    <section className='tableClass'>
       {
        loading===false ?  <main>
        <table>
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
            </tr>
            </thead>
            <tbody>
               {
                users?.map((item)=>(
                    <tr key={item._id}>
                    <td>#{item._id}</td>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.photo} alt={'user'}/>
                    </td>
                    <td>{item.role}</td>
                    <td>{item.createdAt.split("T")[0]}</td>
                </tr>
                ))
               }
            </tbody>
        </table>
    </main>:<Loader/>
       }
    </section>
  )
}

export default Users
