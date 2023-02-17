/* eslint-disable */
import React, { useEffect } from 'react'
import axios from 'axios'
import Logo from '../Assets/images/logo.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { MdOutlinePayments } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { GoPrimitiveDot } from 'react-icons/go'
// import LineAnimation from './LineAnimation'
// import Blink from './Blink'
import { AiFillNotification } from 'react-icons/ai'
// import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge'
import { useState } from 'react'
import baseUrl from './components/baseurl'

Header.defaultProps = {
  newsBlink: false,
  blinkFocus: false,
  currentAffairsFlag: false,
  currentAffairsFoucus: false,
}

const Nav = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Service', id: 'service' },
  { name: 'Reviews', id: 'review' },
  { name: 'Strength', id: 'strategy' },
  { name: 'Contact', id: 'contact' },
  { name: 'FAQ', id: 'FAQ' },
]

function Header(props) {
  const navigate = useNavigate()
  const param = window.location.pathname
  const clientId =
    '687458829496-83t97ka8jja2dvulr4ik8un4t262a2ac.apps.googleusercontent.com'

  const onLogout = () => {
    Cookies.remove('token')
    Cookies.remove('email')
    Cookies.remove('userId')
  }
const [profileData,setProfileData]=useState()
  useEffect(() => {
    if (Cookies.get('token') !== null && Cookies.get("token") !== undefined) {
      axios
        .post(
          baseUrl() + '/profileData',
          {
            email: Cookies.get('email'),
          },
          {
            headers: {
              'Acces-Control-Allow-Origin': '*',
              Client_ID: 'MVOZ7rblFHsvdzk25vsQpQ==',
              Authorization: `${Cookies.get('token')}`,
            },
          },
        )
        .then((response) => {
          if (response.status === 200) {
                        setProfileData(response.data.Data)

            console.log('valid')
          } else if (response.status === 403) {
            onLogout()

            Cookies.remove('token')
            Cookies.remove('email')
            Cookies.remove('userId')
            console.log(response.data.Data,"profile>>>>");

            navigate('/')
          }
        })
        .catch((e) => {
          onLogout()
          console.log(e)
          console.log('ddddddddddd')
        })
    }
  }, [])

  // 👇👇 FOR ACTIVE state of Nav Link
  useEffect(() => {
    $('.navbar-nav li a').click(function () {
      $('.nav-link').removeClass('active')
      $(this).addClass('active')
    })
  }, [])
useEffect(()=>{
const url= window.location.href
const urldata= url.split('#')
  // console.log(urldata[1],'searchurl')
 const data = document.getElementsByTagName('a')
 

if (urldata[1]=='reviews') {
for(var i=0;i<data?.length;i++){
    if (data[i].getAttribute('data')=='reviews') {
      data[i].click();
    }
 }
   

  

}
if(urldata[1]=='about'){
  for(var i=0;i<data?.length;i++){
    if (data[i].getAttribute('data')=='about') {
      data[i].click();
    }
 }
     
  }
},[])
const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);


const isMobile = width <= 1236;
console.log(isMobile,"ismobile")
  return (
    <>
      {param === '/registration/' ||
      param === '/registration' ||
      param === '/registration/page' ||
      param === '/registration/best-online-educational-platform-in-India'||
       param === '/registration/cuet-exam'||
        param === '/registration/competitive-exams-preparation-platform-in-India'||
           param === '/registration/cuet-online-test-paper'||
           param === '/registration/best-online-platform-for-current-affairs-in-India'||
           param === '/registration/StartTestReview'||
            param === '/registration/study-with-cuet-experts'||
            param === '/registration/cuet-application-form'||
            param === '/registration/cuet-courses'
               ? (
        <>
          <nav style={{marginBottom:"10%"}} className="navbar navbar-expand-xl navbar-expand-md navbar-light px-5 py-1 fixed-top white-bg nav-pills">
            {/* navbar navbar-toggleable-sm navbar-toggleable-md
            navbar-toggleable-md navbar-light px-5 py-1 fixed-top white-bg
            nav-pills */}
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                alt=""
                width="70"
                height="auto"
                className="d-inline-block align-text-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
              <ul className="navbar-nav mr-2 text-center mx-auto align-items-center nav-menu-items " >
                
                  <li className="nav-item px-3">
                    <a className="nav-link"  target="_blank" href="http://localhost:3000/registration/" >
                      Home
                    </a>
                  </li>
                

                 
                  {param ==
                  '/registration/best-online-educational-platform-in-India'||param=='/registration/cuet-exam'||param=='/registration/competitive-exams-preparation-platform-in-India'|| param === '/registration/cuet-online-test-paper'||
           param === '/registration/best-online-platform-for-current-affairs-in-India'||
           param === '/registration/StartTestReview'||
            param === '/registration/study-with-cuet-experts'||param === '/registration/cuet-application-form'|| param === '/registration/cuet-courses'? <li className="nav-item px-3">
                    <a className="nav-link blogurl" href="/registration/#reviews" data='blogs'>
                      Blogs
                    </a>
                  </li>:<></>}
                

              {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' && param !== '/registration/cuet-application-form' && param !== '/registration/cuet-courses'?  <li className="nav-item px-3">
                  <a className="nav-link" href="#news">
                    {props.newsBlink ? (
                      <LineAnimation name="News" />
                    ) : (
                      <>News</>
                    )}
                  </a>
                </li>:<></>}
                {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' && param !== '/registration/cuet-application-form' &&  param !== '/registration/cuet-courses'?   <li className="nav-item px-3">
                  <a className="nav-link" href="#news">
                    {props.currentAffairsFoucus ? (
                      <Blink />
                    ) : (
                      <GoPrimitiveDot
                        color={'red'}
                        style={
                          props.currentAffairsFlag
                            ? { display: 'inline-block' }
                            : { display: 'none' }
                        }
                      />
                    )}
                    <>Current Affairs</>
                  </a>
                </li>:<></>}
                {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' && param !== '/registration/cuet-application-form' &&  param !== '/registration/cuet-courses'?   <li className="nav-item px-3">
                  <a className="nav-link" href="#courseUpdate">
                    Courses
                  </a>  
                </li>:<></>}
                 {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' && param !== '/registration/cuet-application-form' &&  param !== '/registration/cuet-courses'?  <li className="nav-item px-3">
                  <a className="nav-link" href="#reviews" data='reviews'>
                    Reviews
                  </a>
                </li>:<></>}
                 {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts'&& param !== '/registration/cuet-application-form' &&  param !== '/registration/cuet-courses'?  <li className="nav-item px-3">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>:<></>}
                 {param !==
                   '/registration/best-online-educational-platform-in-India' && param !=='/registration/cuet-exam' && param !=='/registration/competitive-exams-preparation-platform-in-India' &&  param  !=='/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' && param !== '/registration/cuet-application-form' &&  param !== '/registration/cuet-courses'?  <li className="nav-item px-3">
                  <a className="nav-link" href="#statistics">
                    Strength
                  </a>
                </li>:<></>}

               
                  
                
                
                  {param ==
                  '/registration/best-online-educational-platform-in-India'||param=='/registration/cuet-exam'||param=='/registration/competitive-exams-preparation-platform-in-India'|| param === '/registration/cuet-online-test-paper'||
           param === '/registration/best-online-platform-for-current-affairs-in-India'||
           param === '/registration/StartTestReview'||
            param === '/registration/study-with-cuet-experts'||param === '/registration/cuet-application-form' ||  param === '/registration/cuet-courses'? <li className="nav-item px-3">
                    <a className="nav-link" href=""  data-bs-toggle="modal"
                        data-bs-target="#registerModal">
                      Tips & Guide{' '}
                    </a>
                  </li>:<></>}
                   { !isMobile && <><li className="nav-item px-3">
                    <a className="nav-link" href="#contact">
                      Contact Us
                    </a>
                  </li>    
                  <li className="nav-item px-3">
                    <a className="nav-link" href="/registration/#about" data='about'>
                      About Us
                    </a>
                  </li></>}
                   {param !==
                  '/registration/best-online-educational-platform-in-India'&&param !=='/registration/cuet-exam'&&param !=='/registration/competitive-exams-preparation-platform-in-India'&&param !== '/registration/cuet-application-form'&&param !== '/registration/cuet-online-test-paper'&&
           param !== '/registration/best-online-platform-for-current-affairs-in-India'&&
           param !== '/registration/StartTestReview'&&
            param !== '/registration/study-with-cuet-experts' &&  param !== '/registration/cuet-courses'?  <li className="nav-item px-3">
                  <a className="nav-link" href="#FAQ">
                    FAQ
                  </a>
                </li>

               :<></>}
                
              {isMobile &&   <div class="dropdown">
  <button style={{backgroundColor:"white",border:"none"}} class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   <li className="nav-item px-3">
                    <a className="nav-link" href="#contact">
                      Contact Us
                    </a>
                  </li>    
                  <li className="nav-item px-3">
                    <a className="nav-link" href="/registration/#about" data='about'>
                      About Us
                    </a>
                  </li>
    
  </ul>
</div>}

                
                
               
                
               
              </ul>
              <ul className='navbar-nav mr-0 ms-5 mx-auto text-center align-items-center'>
                 {!Cookies.get('token') ? (
                  <>
                    <li>
                      <a
                        className="btn main-btn-outline px-3 ml-4"
                        type="button"
                        id="particular-signup"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                        href=""
                      >
                        Sign up
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn main-btn px-3 ml-4"
                        type="button"
                        id="particular-login"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    {/* <li className="nav-item px-3 landing-payment" style={{ display: "flex", margin: "5px auto" }}>
                      <button
                        type="button"
                        className="btn main-btn  px-4 me-md-2"
                        data-toggle="modal"
                        data-target="#StateCheckModal"
                        onClick={() => {
                          console.log("Payment received", param);
                          // navigate("/subscription");
                        }}
                        to="/subscription"
                      >
                        <MdOutlinePayments style={{ fontSize: "25px" }} />
                        <span style={{ marginLeft: "7px" }}>Subscription</span>
                      </button>
                    </li> */}
                    <li className="nav-item" style={{ marginRight: 'auto' }}>
                      <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn">

                          {profileData? profileData?.firstName
                                .split('')[0]
                                .toUpperCase()
                            : ' '}
                        </button>
                        <div className="dropdown-content post-login-landing">
                          <a  target="_blank" href="http://localhost:3000/registration/">Home</a>
                          <a target="_blank" href="/http://localhost:3000/registration/studentDashboard">Dashboard</a>
                          {/* <Link to="/paymenthistory"> Payment History </Link> */}
                          <Link to="/" onClick={onLogout}>
                            Logout
                          </Link>
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar navbar-expand-lg navbar-light px-5 py-1 fixed-top white-bg">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                alt=""
                width="70"
                height="auto"
                className="d-inline-block align-text-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mr-2">
                {props?.news?.newsBlinkTs === 'Y' ? (
                  <li
                    className="nav-item px-3 landing-payment"
                    style={{ display: 'flex', margin: 'auto' }}
                  >
                    <AiFillNotification
                      style={{
                        fontSize: '50px',
                        color: '#7B1FA2',
                      }}
                    />
                    <NotificationBadge
                      count={1}
                      style={{
                        position: 'relative',
                        // // width: "10%",
                        // height: "100%",
                      }}
                    />
                  </li>
                ) : (
                  ''
                )}
                <li
                  className="nav-item px-3 landing-payment"
                  style={{ display: 'flex', margin: 'auto' }}
                >
                  {/* <button
                    type="button"
                    className="btn main-btn  px-4 me-md-2"
                    data-toggle="modal"
                    data-target={
                      param !== '/registration/subscription'
                        ? '#StateCheckModal'
                        : ''
                    }
                    onClick={() => {
                      // console.log("Payment received", param);
                      navigate('/subscription')
                    }}
                    to="/subscription"
                  >
                    <MdOutlinePayments style={{ fontSize: '25px' }} />
                    <span style={{ marginLeft: '7px' }}>Subscription</span>
                  </button> */}
                </li>

                <li className="nav-item" style={{ marginRight: 'auto' }}>
                  <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn">
                      {console.log(profileData,"profileData")}
                      {profileData
                      
                        ? profileData?.firstName.split('')[0].toUpperCase()
                        : ' '}
                    </button>
                    <div className="dropdown-content post-login-landing">
                      <a  target="_blank" href="http://localhost:3000/registration/">Home</a>
                      <a target="_blank" href="http://localhost:3000/registration/studentDashboard">Dashboard</a>

                      {/* <a target="_blank" href="http://localhost:3000/registration/payment-list">Purchase History</a> */}
                      {/* <Link to="#" type="button" data-toggle="modal" data-target="#subscriptionModal">
                        My Subscription
                      </Link> */}
                      {/* <Link to="/mySubscriptions">My Subscription</Link> */}
                      {/* FIXM  E: Remove*/}
                      {/* <Link to="/" onClick={onLogout}>
                        Logout
                      </Link> */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* DONE: popup Subscriptions menu */}
          {/* <NavSubscription /> */}
        </>
      )}
      {/* <UserBillModal profileData={profileData} /> */}
    </>
  )
}

export default Header
