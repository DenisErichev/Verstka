import mod from './fourPage.module.css'
import logos from './../img/logos.png'
import image from './../img/image.png'
import bg from './../img/bg.png'
import line from './../img/Line.png'
import arrow from './../img/arrow.svg'
import arrowCircle from './../img/arrowCircle.png'
import whiteArrow from './../img/whiteArrow.png'
import girl from './../img/girl.svg'
import back from './../img/back.png'
import man from './../img/man.png'
import marvin from './../img/marvin.png'
import faceBook from './../img/faceBook.png'
import inst from './../img/inst.png'
import insta from './../img/insta.png'
import ava from './../img/ava.png'
import gray from './../img/gray.png'
const FourPage=()=>{
    return(
        <div className={mod.four__page__wrapper}>
            <header>
                <div className={mod.container}>
                    <div className={mod.header__wrapper}>
                        <div className={mod.item__header}>
                            <div className={mod.double__titles}>
                                <div className={mod.title}>
                                Createx Certificate
                                </div>
                                <div className={mod.sub__title}>
                                Your expertise will be confirmed
                                </div>
                            </div>
                            <div className={mod.text__header}>
                            We are accredited by international professional organizations and institutes:
                            </div>
                            <img src={logos} alt="" />
                        </div>
                        <div className={mod.img}>
                        <img className={mod.sertificate} src={image} alt="" />
                        </div>
                    </div>
                </div>
                <nav>
                    <div className={mod.container}>
                        <div className={mod.nav__menu}>
                            <div className={mod.double__titles}>
                                <div>
                                    <div className={mod.title}>
                                    Best tutors are all here
                                    </div>
                                    <div className={mod.sub__title}>
                                    Meet our team
                                    </div>
                                </div>
                                
                                <div className={mod.arrow__wrapper}>
                                    <div className={mod.first__arrow}>
                                        <img src={arrow} alt="" />
                                    </div>
                                    <div className={mod.second__arrow__wrapper}>
                                        <div className={mod.circle}>
                                            <div className={mod.circle}>
                                                <img src={arrowCircle} alt="" />
                                            </div>
                                            <div className={mod.second__arrow}>
                                                <img src={whiteArrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={mod.items__wrapper}>
                            <div className={mod.item}>
                                <div className={mod.img__human}>
                                    <img src={back} alt="" />
                                    <div className={mod.avatar}>
                                        <img src={man} alt="" />
                                    </div>
                                </div>
                                <div className={mod.info_item}>
                                    <div className={mod.name}>
                                        Dianne Russell
                                    </div>
                                    <div className={mod.job__title}>
                                        Founder and CEO
                                    </div>
                                </div>
                                <div className={mod.icons}>
                                    <div className={mod.icon__wrapper}>
                                        <img src={faceBook} alt="" />
                                    </div>
                                    <div className={mod.icon__wrapper}>
                                        <img src={inst} alt="" />
                                    </div>
                                    <div className={mod.icon__wrapper}>
                                        <img src={insta} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={mod.item}>
                                <div className={mod.img__human}>
                                    <img src={back} alt="" />
                                    <div className={mod.avatar}>
                                        <img src={man} alt="" />
                                    </div>
                                </div>
                                <div className={mod.info_item}>
                                    <div className={mod.name}>
                                    Jerome Bell
                                    </div>
                                    <div className={mod.job__title}>
                                    Founder and Program Director                                    </div>
                                </div>
                            </div>
                            <div className={mod.item}>
                                <div className={mod.img__human}>
                                    <img src={back} alt="" />
                                    <div className={mod.avatar}>
                                        <img src={marvin} alt="" />
                                    </div>
                                </div>
                                <div className={mod.info_item}>
                                    <div className={mod.name}>
                                    Kristin Watson
                                    </div>
                                    <div className={mod.job__title}>
                                    Marketer, Curator of Marketing Course
                                    </div>
                                </div>
                            </div>
                            <div className={mod.item}>
                                <div className={mod.img__human}>
                                    <img src={back} alt="" />
                                    <div className={mod.avatar}>
                                        <img src={marvin} alt="" />
                                    </div>
                                </div>
                                <div className={mod.info_item}>
                                    <div className={mod.name}>
                                    Marvin McKinney
                                    </div>
                                    <div className={mod.job__title}>
                                    PM, Curator of Management Course
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={mod.messages}>
                            <div className={mod.titles}>
                                <div className={mod.title__testimonials}>
                                TESTIMONIALS
                                </div>
                                <div className={mod.sub__title}>
                                What our students say
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default FourPage