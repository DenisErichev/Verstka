import Vector from './../img/Vector.svg'
import logo from './../img/logo.svg'
import logo1 from './../img/logo1.svg'
import playVideo from './../img/play-video.svg'
import illustration from './../img/illustration.svg'
import ellipse from './../img/ellipse.svg'
import './firstPage.css'
const FirstPage=()=>{
    return(
        <div className='first__page'>
        <header className='first__page__header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='logo'>
                <img src={logo1}/>
                <img src={logo}/>
              </div>
              <ul className='links__wrapper'>
                <li className='link__item'>
                  <a href=''>About Us</a>
                </li>
                <li className='link__item'>
                  <a href=''>Courses</a>
                </li>
                <li className='link__item'>
                  <a href=''>Events</a>
                </li>
                <li className='link__item'>
                  <a href=''>Blog</a>
                </li>
                <li className='link__item'>
                  <a href=''>Contacts</a>
                </li>
              </ul>
              <div className='authorization__wrapper' >
                <button className='btn'>Get consultation</button>
                <div className='login__registration__wrapper'>
                  <img src={Vector}></img>
                  <li className='link__item'>
                    <a href=''>Log in / Register</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className='first__page__nav'>
          <div className='container'>
            <div className='main__menu'>
              <div className='main__menu__item'>
                <img src={playVideo}></img>
                <div className='text__menu'>
                  Enjoy studying
                  with Createx Online Courses
                </div>
                <div className='double__btn__wrapper'>
                  <button className='no__bg__btn'>About us</button>
                  <button className='btn'>Get Explore courses</button>
                </div>
              </div>
              <img src={illustration}></img>
            </div>
          </div>
        </nav>
        <footer className='first__page__footer'>
          <div className='container'>
            <div className='footer__wrapper'>
              <div className='footer__item'>
                <span className='number__footer'>
                  1200
                </span>
                <li className='link__item'>
                  <a href=''>About Us</a>
                </li>
              </div>
              <img src={ellipse}></img>
              <div className='footer__item'>
                <span className='number__footer'>
                  84
                </span>
                <li className='link__item'>
                  <a href=''>Completed courses Us</a>
                </li>
              </div>
              <img src={ellipse}></img>
              <div className='footer__item'>
                <span className='number__footer'>
                  16
                </span>
                <li className='link__item'>
                  <a href=''>Qualified tutors</a>
                </li>
              </div>
              <img src={ellipse}></img>
              <div className='footer__item'>
                <span className='number__footer'>
                  5
                </span>
                <li className='link__item'>
                  <a href=''>Years of experience</a>
                </li>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}
export default FirstPage