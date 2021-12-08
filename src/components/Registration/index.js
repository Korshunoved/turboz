import React from 'react';
import servisesIcon from '../../img/servises-icon.png'
export const Registration = () => {
    return (
        <main className="page-registration">
            <form action="" className="form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 registration-col">
                            <div className="h1 -md-hide">Повторная заявка на займ</div>
                            <div className="h3 md-hide">Войти через:</div>
                            <div className="login">
                                <a href="#" className="img">
                                    <img src={servisesIcon} alt="servisesIcon"/>
                                        <span className="md-hide">Войти</span>
                                        <span className="md-visible">Войти через Госулуги</span>
                                </a>
                                <ul className="login-list md-hide">
                                    <li>- Автоматическое заполнение анкеты</li>
                                    <li>- Увеличенный шанс обобрения на 30%</li>
                                    <li>- Получите на 5000 рублей больше</li>
                                </ul>
                            </div>
                            <ul className="form-list">
                                <li className="item">
                                    <label htmlFor="item-input-phone" className="label">Номер</label>
                                    <input type="text" id="item-input-phone" placeholder="+7 (___) ___-__-__"
                                           className="phone"/>
                                </li>
                                <li className="item ">
                                    <label htmlFor="datepicker" className="label">Дата рождения</label>
                                    <input type="text" id="datepicker" value="1988-08-17" className="datepicker-ru"/>
                                </li>

                                <li className="item">
                                    <a href="" className="color-blue text-decoration-underline">Изменился номер
                                        телефона?</a>
                                </li>
                                <li className="item error">
                                    <div className="error-text">Неверно введен номер и/или дата рождения. <br/>
                                        Попыток осталось: N</div>
                                </li>
                                <li className="item">
                                    <button className="btn btn_blue" type="submit">Далее</button>
                                </li>
                            </ul>
                        </div>


                        <div className="col-md-4 sidebar-col md-hide">
                            <div className="h2">
                                <ul className="calc-btn">
                                    <li className="pluse">+</li>
                                    <li className="minuse">-</li>
                                    <li className="multiply">*</li>
                                    <li className="exactly">=</li>
                                </ul>
                                <span>Онлайн калькулятор заявки</span>
                            </div>
                            <ul className="form-list">
                                <li className="item">
                                    <label htmlFor="item-input-loan-amount" className="label">Сумма займа</label>
                                    <input type="text" value="10 000" id="item-input-loan-amount"/>
                                        <div className="rub">₽</div>
                                </li>
                                <li className="item progressbar">
                                    <div className="progressbar-scale" style={{width: "70%"}}></div>
                                    <div className="circle" style={{left: "70%"}}></div>
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
                                    <label htmlFor="item-input-loan-term" className="label">Срок</label>
                                    <input type="text" value="13 дней" id="item-input-loan-term"/>
                                </li>
                                <li className="item progressbar">
                                    <div className="progressbar-scale" style={{width: "70%"}}></div>
                                    <div className="circle" style={{left: "70%"}}></div>
                                </li>
                                <li className="item">
                                    <ul className="item_list">
                                        <li>7 дней</li>
                                        <li>16 нед.</li>
                                        <li>24 нед.</li>
                                    </ul>
                                </li>

                                <li className="item item_sum">
                                    <ul className="item_list">
                                        <li>
                                            <span>Сумма к возврату:</span>
                                            <div className="green">10 170 Р</div>
                                        </li>
                                        <li>
                                            <span>Сумма переплаты:</span>
                                            <div className="green">1 170 Р</div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
};
