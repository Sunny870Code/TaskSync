import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/dashboard/EmployeeDashboard";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [authData, setAuthData] = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const rawUser = localStorage.getItem("loggedInUser")

      if (!rawUser || !authData) return
      const loggedInUser = JSON.parse(rawUser)

      if (loggedInUser.role === 'admin') {
        setUser('admin')
        setLoggedInUserData({ name: 'Kunal' }) // admin info
      } else if (loggedInUser.role === 'employee') {
        const employeeInfo = authData.find(e => e.email === loggedInUser.email)
        if (employeeInfo) {
          setUser('employee')
          setLoggedInUserData(employeeInfo)
        }
      }


      if (authData && loggedInUserData?.email) {
        const updatedUser = authData.find(e => e.email === loggedInUserData.email);
        if (updatedUser) setLoggedInUserData(updatedUser);
      }

    }

  }, [authData])

  useEffect(() => {
  const employees = localStorage.getItem("employee");
  const admins = localStorage.getItem("admin");

  if (!employees || !admins) {
    setLocalStorage();
  }

  }, [])


  console.log("")
  const handleLogin = (email, password) => {
    if (email === 's@s.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'admin',
        name: 'Kunal'
      }))
      setLoggedInUserData({ name: 'Kunal' })
    }
    else if (authData) {
      const checkEmployees = authData.find(
        (e) => email === e.email && password === e.password
      )

      if (checkEmployees) {
        setUser('employee')
        setLoggedInUserData(checkEmployees)

        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          email: checkEmployees.email
        }))
      } else {
        alert("Invalid credentials")
      }
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ' '}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}

    </>
  )
}

export default App

