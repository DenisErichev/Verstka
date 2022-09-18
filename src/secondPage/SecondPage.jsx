import mod from './secondPage.module.css'
import image from './../img/image.svg'
import divider from './../img/divider.png'
import markHuman from './../img/markHuman.svg'
import markGirl from './../img/markGirl.png'
import managMan from './../img/managMan.png'
import managGirl from './../img/managGirl.png'
import hrMan from './../img/hrMan.svg'
import design from './../img/design.png'
import shape from './../img/shape.svg'
import Star from './../img/Star.svg'
import illustration2 from './../img/illustration2.svg'
const SecondPage=()=>{
    return(
    <div className={mod.second__page__wrapper}>
        <header className={mod.second__page__header}>
            <div className={mod.container}>
                <div className={mod.header__wrapper}>
                    <img src={image} alt="" />
                    <div className={mod.text__header}>
                        <div className={mod.title}>
                        Who we are
                        </div>
                        <div className={mod.sub__title}>
                        Why Createx?
                        </div>
                        <ul class={mod.menu__link}>
                            <li className={mod.link__item}>
                                <a href=''>A fermentum in morbi pretium aliquam adipiscing donec tempus.</a>
                            </li>
                            <li className={mod.link__item}>
                                <a href=''>Vulputate placerat amet pulvinar lorem nisl.</a>
                            </li>
                            <li className={mod.link__item}>
                                <a href=''>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</a>
                            </li>
                            <li className={mod.link__item}>
                                <a href=''>Etiam duis lobortis in fames ultrices commodo nibh.</a>
                            </li>
                            <li className={mod.link__item}>
                                <a href=''>Tincidunt sagittis neque sem ac eget.</a>
                            </li>
                            <li className={mod.link__item}>
                                <a href=''>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</a>
                            </li>
                        </ul>
                        <button className="btn">More about us</button> 
                         
                    </div>
                </div>
            </div>
        </header>
        <nav>
            <div className={mod.container}>
                <div className={mod.nav__menu__wrapper}>
                    <div className={mod.set__title}>
                        <div className={mod.title}>
                        Ready to learn?
                        </div>
                        <div className={mod.sub__title}>
                        Featured Courses
                        </div>
                    </div>
                    <div className={mod.btn__wrapper}>
                        <button className={mod.no__bg__btn}>View all courses</button>
                    </div>
                    <div className={mod.set__workers__people}>
                        <div className={mod.item__worker}>
                            <img src={markHuman}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__marketing}>
                                    <span className={mod.position}>Marketing</span>
                                </div>
                                <div className={mod.extended__position}>
                                The Ultimate Google Ads Training Course
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                        $100
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Jerome Bell</div>
                                </div>
                            </div>
                        </div>
                        <div className={mod.item__worker}>
                            <img src={managMan}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__manager}>
                                    <span className={mod.position}>Management</span>
                                </div>
                                <div className={mod.extended__position}>
                                Product Management Fundamentals
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                        $480
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Marvin McKinney</div>
                                </div>
                            </div>                           
                        </div>
                        <div className={mod.item__worker}>
                            <img src={hrMan}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__hr}>
                                    <span className={mod.position}>HR  Recruting</span>
                                </div>
                                <div className={mod.extended__position}>
                                HR  Management and Analytics
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                    $200
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Leslie Alexander Li</div>
                                </div>
                            </div>                   
                        </div>
                        <div className={mod.item__worker}>
                            <img src={markGirl}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__marketing}>
                                    <span className={mod.position}>Marketing</span>
                                </div>
                                <div className={mod.extended__position}>
                                Brand Management   PR Communications
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                    $530
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Kristin Watson</div>
                                </div>
                            </div>     
                        </div>
                        <div className={mod.item__worker}>
                            <img src={managGirl}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__manager}>
                                    <span className={mod.position}>Management</span>
                                </div>
                                <div className={mod.extended__position}>
                                Business Development Management
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                        $100
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Jerome Bell</div>
                                </div>
                            </div>    
                        </div>
                        <div className={mod.item__worker}>
                            <img src={design}/>
                            <div className="info__worker__wrapper">
                                <div className={mod.position__wrap__design}>
                                    <span className={mod.position}>Design</span>
                                </div>
                                <div className={mod.extended__position}>
                                Graphic Design Basic
                                </div>
                                <div className={mod.money__info__wrapper}>
                                    <div className={mod.money}>
                                        $500
                                    </div>
                                    <img src={divider} alt="" />
                                    <div className={mod.by__info}>by Guy Hawkins</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <footer>
            <div className={mod.container}>
                <div className={mod.footer__wrapper}>
                    <div className={mod.double__title__footer}>
                        <div className={mod.title}>
                        Our benefits
                        </div>
                        <div className={mod.sub__title}>
                        That’s how we do it
                        </div>
                    </div>
                    <div className={mod.link__footer__wrapper}>
                        <div className={mod.orange__link__wrapp}>
                            <img src={Star} alt="" />
                            <div className={mod.orange__link__text}>
                            Experienced Tutors
                            </div>
                        </div>
                        <div className={mod.link__footer__item__wrapp}>
                            <img src={shape} alt="" />
                            <div className={mod.link__footer}>
                            Feedback  Support
                            </div>
                        </div>
                        <div className={mod.link__footer__item__wrapp}>
                            <img src={shape} alt="" />
                            <div className={mod.link__footer}>
                            24/7 Online Library
                            </div>
                        </div>
                        <div className={mod.link__footer__item__wrapp}>
                            <img src={shape} alt="" />
                            <div className={mod.link__footer}>
                            Community
                            </div>
                        </div>
                    </div>
                    <div className={mod.footer__content__wrapper}>
                        <div className={mod.footer__text__wrapper}>
                            <div className={mod.footer__title}>
                            Only practicing tutors
                            </div>
                            <div className={mod.sub__footer__text}>
                            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                            </div>
                        </div>
                        <img src={illustration2} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}
export default SecondPage