import React from "react";
const Register = () => {
    return (
        <body>
            <main>
                <section id="register">
                    <h3 className="title">註冊會員</h3>
                    <div className="sign">
                        <form action="" name="contact" id="contact_form" method="post">
                            <div className="sign1">
                                <label for="email"></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    title="請輸入Email"
                                    placeholder="Email(會員帳號)："
                                    autocomplete="on"
                                    required
                                />

                                <label for="pass"></label>
                                <input
                                    type="password"
                                    name="password"
                                    id="pass"
                                    title="請輸入密碼"
                                    placeholder="Password："
                                    autocomplete="on"
                                    minlength="8"
                                    required
                                />
                                <label for="pass"></label>
                                <input
                                    type="password"
                                    name="password"
                                    id="pass"
                                    title="請輸入密碼"
                                    placeholder="Confirm Password："
                                    autocomplete="on"
                                    minlength="8"
                                    required
                                />
                            </div>
                            <div className="sign2">
                                <label for="username"></label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    title="請輸入姓名"
                                    placeholder="姓名："
                                    autocomplete="on"
                                    required
                                />

                                <label for="tel"></label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    title="請輸入連絡電話"
                                    placeholder="電話："
                                    autocomplete="on"
                                />
                            </div>
                            <div className="sign3">
                                <input type="submit" id="submit" value="註冊" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Register;