import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom"
const Member = () => {
      //必填資料
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userName.trim() === "") {
      setMsg1(" *請填寫「帳號」");
    } else {
      setMsg1("");
    }
    if (userPass.trim() === "") {
      setMsg2(" *請填寫「密碼」");
    } else {
      setMsg2("");
    }
    if (userName.trim() !== "" && userPass.trim() !== "") {
      navigate("/memberlogin");
    }
  }
    
    return (
        <body>
            <main>
                <section id="member">
                    <h3 className="title">會員登入</h3>
                    <form action="" name="contact" id="contact_form" method="post"
                    onSubmit={handleSubmit}>
                        <div className="login1">
                            <label htmlFor="username">帳號：</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                title="請輸入帳號"
                                placeholder="請輸入帳號"
                                autoComplete="on"
                                // required
                                value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                            />
                            <span style={{ color: "#ff9b99" }}>{msg1}</span>


                            <label htmlFor="pass">密碼：</label>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                title="請輸入密碼"
                                placeholder="請輸入密碼"
                                autoComplete="on"
                                minlength="8"
                                // required
                                value={userPass}
                      onChange={(e) => setUserPass(e.target.value)}
                            />
                            <span style={{ color: "#ff9b99" }}>{msg2}</span>
                        </div>
                        <div className="login2">
                            <input type="submit" id="submit" value="登入" />
                            {/* <p><Link to="/memberlogin" >登入</Link></p> */}
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