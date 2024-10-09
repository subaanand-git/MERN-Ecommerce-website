import React from 'react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import { Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
    <div className="container-fluid"> 
    <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/shop">
              <img width="150px" alt='Logo' src="/images/img1.png" />
            </Link>
            </div>
        </div>
        
        <div className="col-12 col-md-6 mt-2 mt-md-0">
           <Search/>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      { user.role === 'user' && <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item> }
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <Link to="/cart"><span id="cart" className="ml-3">Cart</span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </div>
    </nav>

    <nav className="navbar navbar row navbar-expand-lg navbar-light">
        <div className="container-fluid">
            
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-center" id="navbarNavAltMarkup">
            <div className="navbar-nav px-lg-5">
            <NavLink to ="/"   className="nav-link fs-5">Home</NavLink>
            <NavLink to ="/About" className="nav-link mx-lg-3 fs-5">About</NavLink>
            <NavLink to ="/shop" className="nav-link  fs-5">Product</NavLink>
            <NavLink to ="/Testimonials"  className="nav-link mx-lg-3 fs-5">Testimonials</NavLink>
            <NavLink to ="/Contact"  className="nav-link me-lg-5 fs-5">Contact</NavLink>
            </div>
            </div>
        </div>
    </nav>

    </div> 
    )
}