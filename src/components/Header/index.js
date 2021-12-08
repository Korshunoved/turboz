import React from 'react';
import logo from '../../img/svg/logo.svg'
import logoMD from '../../img/svg/logo-md.svg'
import arrowCircleRight from '../../img/svg/arrow-circle-right.svg'
import dataBgWhite from '../../img/svg/data-bg-white.svg'
export const Header = () => {
    return (

        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 header-top-col-left">
                            <a href="#" className="logo">
                                <img src={logo} alt="logo" className="md-hide"/>
                                <img src={logoMD} alt="logoMD" className="md-visible"/>
                            </a>
                        </div>
                        <div className="col-md-9 header-top-col-right">
                            <a href="tel:8-499-951-9180" className="phone">8-499-951-9180</a>
                            <div className="time">
                                c 7:00 до 20:00 мск, <br/>
                                без выходных (звонок платный)
                            </div>
                            <a href="#" className="btn btn_blue_dark">
                                <img src={arrowCircleRight} alt="arrowCircleRight"/>
                                <span className="md-hide">Личный кабинет</span>
                                <span className="md-visible">Вход</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-calc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 header-calc-col-progressbar md-hide">
                            <div className="header-calc-title">
                                <div className="header-calc-title-in"><span>Уже заполнено</span></div>
                                <div className="header-calc-title-in">
                                    <div className="bold">10%</div>
                                </div>
                            </div>
                            <div className="progressbar">
                                <div className="progressbar-scale" style={{width: "10%"}}></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="col-md-6 header-calc-col-result mw-480 md-hide">
                            <div className="header-calc-title">
                                <div className="header-calc-title-in">
                                    <span>Вы берете займ на сумму:</span>
                                    <b>10 170 ₽</b>
                                </div>
                                <div className="header-calc-title-in">
                                    <span>Сроком на:</span>
                                    <b>13 дней</b>
                                </div>
                                <ul className="calc-btn">
                                    <li className="pluse">+</li>
                                    <li className="minuse">-</li>
                                    <li className="multiply">*</li>
                                    <li className="exactly">=</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-12 md-visible">
                            <ul className="form-list">
                                <li className="item">
                                    <ul className="form-list-in">
                                        <li>
                                            <div className="label">Сумма займа</div>
                                            <div className="rub">10 000 ₽</div>
                                        </li>
                                        <li>
                                            <div className="label">Сумма к возврату:</div>
                                            <div className="rub">10 170 ₽</div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item progressbar">
                                    <div className="progressbar-scale" style={{width:"60%"}}></div>
                                    <div className="circle" style={{left: "60%"}}></div>
                                </li>
                                <li className="item">
                                    <ul className="item_list">
                                        <li>1 000</li>
                                        <li>5 000</li>
                                        <li>10 000</li>
                                        <li>15 000</li>
                                    </ul>
                                </li>
                                <li className="item item-data">
                                    <ul className="form-list-in">
                                        <li>
                                            <div className="label">Срок займа</div>
                                            <div className="rub">
                                                <img src={dataBgWhite} alt="dataBgWhite"/>
                                                <span> 10 нед.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label">Сумма переплаты:</div>
                                            <div className="rub">1 170 ₽</div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item progressbar">
                                    <div className="progressbar-scale" style={{width: "60%"}}></div>
                                    <div className="circle" style={{left: "60%"}}></div>
                                </li>
                                <li className="item">
                                    <ul className="item_list">
                                        <li>7 дней</li>
                                        <li>16 нед.</li>
                                        <li>24 нед.</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-12 header-calc-col-progressbar md-visible">
                            <div className="header-calc-title">
                                <div className="header-calc-title-in"><span>Уже заполнено</span></div>
                                <div className="header-calc-title-in">
                                    <div className="bold">10%</div>
                                </div>
                            </div>
                            <div className="progressbar">
                                <div className="progressbar-scale" style={{width: "10%"}}></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};
