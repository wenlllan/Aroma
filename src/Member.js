import React from "react";
import { Link } from "react-router-dom"
const Member = () => {
    return (
        <body>
            <main>
                <section id="member">
                    <h3 className="title">會員登入</h3>
                    <form action="" name="contact" id="contact_form" method="post">
                        <div className="login1">
                            <label htmlFor="username">帳號：</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                title="請輸入帳號"
                                placeholder="請輸入帳號"
                                autoComplete="on"
                                required
                            />

                            <label htmlFor="pass">密碼：</label>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                title="請輸入密碼"
                                placeholder="請輸入密碼"
                                autoComplete="on"
                                minlength="8"
                                required
                            />

                        </div>
                        <div className="login2">
                            <input type="submit" id="submit" value="登入" />
                        </div>
                        <div className="login3">
                            <p><Link to="/register" id="forgot" >忘記密碼？</Link></p>
                            <p><Link to="/register">註冊</Link></p>
                        </div>
                    </form>
                </section>
            </main>
        </body>
    )
}

export default Member;