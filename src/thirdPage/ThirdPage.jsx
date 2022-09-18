import mod from './thirdPage.module.css'
import Group from './../img/Group.svg'
import dots from './../img/dots.png'
const ThirdPage=()=>{
    return(
        <div className={mod.third__page__wrapper}>
            <img className={mod.img} src={Group} alt="" />
            <div className={mod.container}>
                <header className={mod.third__page__header}>
                    <div className={mod.double__title}>
                        <div className={mod.title}>
                        Our Our Events
                        </div>
                        <div className={mod.sub__title}>
                        Lectures  workshops
                        </div>
                    </div>
                </header>
                <nav>
                    <div className={mod.container}>
                        <div className={mod.nav__main__wrapper}>
                            <div className={mod.nav__main__item}>
                                <div className={mod.inside__nav__item}>
                                    <div className={mod.the__date}>
                                        <div className={mod.number}>
                                        05
                                        </div>
                                        <div className={mod.month__time}>
                                            <div className={mod.month}>
                                            August 
                                            </div>
                                            <div className={mod.time}>
                                            11:00 – 14:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className={mod.texts__wraper}>
                                        <div className={mod.text}>
                                        Formation of the organizational structure of the company in the face of uncertainty.
                                        </div>
                                        <div className={mod.sub__text}>
                                        Onine master-class
                                        </div>
                                    </div>
                                    <button className={mod.no__bg__btn}>View more</button>
                                </div>
                            </div>
                            <div className={mod.nav__main__item}>
                                <div className={mod.inside__nav__item}>
                                    <div className={mod.the__date}>
                                        <div className={mod.number}>
                                        24
                                        </div>
                                        <div className={mod.month__time}>
                                            <div className={mod.month}>
                                            July 
                                            </div>
                                            <div className={mod.time}>
                                            11:00 – 12:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className={mod.texts__wraper}>
                                        <div className={mod.text}>
                                        Building a customer service department. Best Practices.
                                        </div>
                                        <div className={mod.sub__text}>
                                        Onine lecture
                                        </div>
                                    </div>
                                    <button className={mod.btn}>View more</button>
                                </div>
                            </div>
                            <div className={mod.nav__main__item}>
                                <div className={mod.inside__nav__item}>
                                    <div className={mod.the__date}>
                                        <div className={mod.number}>
                                        16
                                        </div>
                                        <div className={mod.month__time}>
                                            <div className={mod.month}>
                                            July 
                                            </div>
                                            <div className={mod.time}>
                                            10:00 – 13:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className={mod.texts__wraper}>
                                        <div className={mod.text}>
                                        How to apply methods of speculative design in practice. Worldbuilding prototyping.
                                        </div>
                                        <div className={mod.sub__text}>
                                        Onine workshop
                                        </div>
                                    </div>
                                    <button className={mod.no__bg__btn}>View more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <footer className={mod.third__page__footer}>
                    <div className={mod.container}>
                        <div className={mod.footer__wrapper}>
                            <div className={mod.footer__text}>
                            Do you want more?
                            </div>
                            <button className={mod.footer__btn}>Explore all events</button>
                        </div>
                    </div>
                </footer>
            </div>
            <img className={mod.footer__img} src={dots} alt="" />
        </div>
    );
}
export default ThirdPage