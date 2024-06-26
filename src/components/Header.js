// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { Navbar, Dropdown } from 'flowbite-react';

// import { userLogoutAction } from '../actions/userLoginAction';
// import { useNavigate } from 'react-router-dom';

// import { useEffect, useState } from 'react';
// import logo from'../ima/My Farm wbg.png';
// import './Header.css';


// function Header() {
//     const userLogin = useSelector(state=>state.userLoginReducer)
//     const {userInfo} = userLogin

//     const dispatch = useDispatch()
//     const history = useNavigate()

//     const userCart = useSelector(state => state.cartReducerKey)
//     const {cartItems} = userCart
//     const [sumItmes, setSumItmes] = useState(0)

//     useEffect(()=>{
//       setSumItmes(cartItems.reduce((acc, item)=> acc + item.qty, 0))
//     }, [userCart, cartItems])
    
    
//     const handleLogout = () => {
//       dispatch(userLogoutAction())
//       dispatch({type: 'PROFILE_DETAILS_REST'})
//       history('/login')
//     }

//   return (    
//     <Navbar
//       fluid
//       rounded
//       className="text-xl"
//     > 
//       <Navbar className="container">
//       <NavLink to="/" exact activeClassName="active">
//       <Link>
//            <img src={logo} alt="Logo" className="logo" />
//     </Link>
//       </NavLink>
//             <div className="flex md:order-3 text-cyan-700">
//               <p className='mt-1 mr-3'>
//               <i className="fa-solid fa-cart-shopping mr-1 text-cyan-700"></i>
//                 <Link to="/cart">Cart ({sumItmes})</Link>
//               </p>
              
//               <Navbar.Toggle />
//             </div>
//             <Navbar.Collapse >
//                 <NavLink to="/">
//                   <p>
//                     Home
//                   </p>
//                 </NavLink>
                
                
//                 {!userInfo && 
//                 <NavLink to="/register">
//                     Register
//                 </NavLink>
//                 }

//                 {userInfo ? 

//                 <Dropdown inline label={userInfo.username}>
//                     <NavLink to="/profile">
//                       <Dropdown.Item>
//                         Profile
//                       </Dropdown.Item>
//                     </NavLink>
                  
//                   <Dropdown.Divider />
//                   <Dropdown.Item onClick={handleLogout}>
//                     <NavLink className={"text-red-600"} >
//                       logout
//                     </NavLink>
//                   </Dropdown.Item>
//                 </Dropdown>

//                 :  
//                 <NavLink to="/login">
//                   <i className="fa-solid fa-person-running mr-1"></i>
//                   Login
//                 </NavLink>

                
//               }
             

//             </Navbar.Collapse>
//       </Navbar>
//     </Navbar>
//   )
// }

// export default Header


import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Dropdown } from 'flowbite-react';

import { userLogoutAction } from '../actions/userLoginAction';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import logo from'../ima/My Farm wbg.png';
import './Header.css';

function Header() {
    const userLogin = useSelector(state=>state.userLoginReducer)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const history = useNavigate()

    const userCart = useSelector(state => state.cartReducerKey)
    const {cartItems} = userCart
    const [sumItmes, setSumItmes] = useState(0)

    useEffect(()=>{
      setSumItmes(cartItems.reduce((acc, item)=> acc + item.qty, 0))
    }, [userCart, cartItems])

    const handleLogout = () => {
      dispatch(userLogoutAction())
      dispatch({type: 'PROFILE_DETAILS_REST'})
      history('/login')
    }

  return (
    <Navbar
      fluid
      rounded
      className="text-xl bg-white shadow-lg"
    >
      <Navbar className="container mx-auto">
        <NavLink to="/" exact activeClassName="active">
          <Link>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </NavLink>
        <div className="flex md:order-3 text-cyan-700">
          <p className='mt-1 mr-3'>
            <i className="fa-solid fa-cart-shopping mr-1 text-cyan-700"></i>
            <Link to="/cart">Cart ({sumItmes})</Link>
          </p>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" className="mr-5">
            <p className="text-base font-medium text-gray-900 hover:text-gray-300">
              Home
            </p>
          </NavLink>
          <NavLink to="/product" className="mr-5">
            <p className="text-base font-medium text-gray-900 hover:text-gray-300">
              Products
            </p>
          </NavLink>
          <NavLink to="/dashboard" className="mr-5">
            <p className="text-base font-medium text-gray-900 hover:text-gray-300">
              Products
            </p>
          </NavLink>
          {!userInfo && (
            <>
              <NavLink to="/register" className="mr-5">
                <p className="text-base font-medium text-gray-900 hover:text-gray-300">
                  Register
                </p>
              </NavLink>
              <NavLink to="/login" className="mr-5">
                <p className="text-base font-medium text-gray-900 hover:text-gray-300">
                  Login
                </p>
              </NavLink>
            </>
          )}
          {userInfo && (
            <Dropdown inline label={userInfo.username}>
              <NavLink to="/profile" className="mr-5">
                <Dropdown.Item>
                  Profile
                </Dropdown.Item>
              </NavLink>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                <NavLink className={"text-red-600"} >
                  logout
                </NavLink>
              </Dropdown.Item>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Navbar>
  )
}

export default Header