import React, { useEffect, useState } from 'react';
import './Header.css';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from '../MaterialUI/MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signout } from '../../actions/authActions';

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(login({ email, password }));
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="user">{auth.user.fullName}</a>}
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'SuperCoin Zone', href: '', icon: null },
          { label: 'Flipkart Plus Zone', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'My Chats', href: '', icon: null },
          { label: 'Coupons', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Notifications', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Log', href: '', icon: null, onClick: logout },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => setLoginModal(true)}>
            Login
          </a>
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Flipkart Plus Zone', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    );
  };

  const renderLoginModal = () => {
    return (
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                <MaterialInput
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title="Login"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: '40px 0 20px 0',
                  }}
                  onClick={userLogin}
                />

                <p style={{ textAlign: 'center' }}>OR</p>

                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: '40px 0',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const renderRightSideMenu = () => {
    return (
      <div className="rightMenu">
        {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
        <DropdownMenu
          menu={
            <a className="more">
              <span>More</span>
              <IoIosArrowDown />
            </a>
          }
          menus={[
            { label: 'Notification Preference', href: '', icon: null },
            { label: 'Sell on flipkart', href: '', icon: null },
            { label: '24x7 Customer Care', href: '', icon: null },
            { label: 'Advertise', href: '', icon: null },
            { label: 'Download App', href: '', icon: null },
          ]}
        />
        <div>
          <a className="cart">
            <IoIosCart />
            <span style={{ margin: '0 10px' }}>Cart</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      {renderLoginModal()}
      <div className="subHeader">
        {/* Logo */}
        <div className="logo">
          <a href="">
            <img src={flipkartLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
        {/* Logo End */}

        {/* Search component */}
        <div
          style={{
            padding: '0 10px',
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: '#2874f0',
                }}
              />
            </div>
          </div>
        </div>
        {/* Search Component End */}

        {/* Right side menu */}
        {renderRightSideMenu()}
        {/* Right side menu end */}
      </div>
    </div>
  );
};

export default Header;
