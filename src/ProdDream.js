import React from "react";
import {Link} from "react-router-dom"
const ProdDream = () => {
    return (
        <div>
            <body class="scrollBox">
                <section class="main-prod-dream">
                    <div class="shopping-cart-div">
                        <figure><img src="./icon/icon-shopping-cart.svg" alt="" /></figure>
                    </div>
                    <figure class="left-deco"><img src="./images/dream-flower.svg" alt="" /></figure>
                    <div class="prod-div">
                        <figure class="main-prod-img"><img src="./images/prod-dream.png" alt="尋香奇遊的夢幻花境" /></figure>
                        <div class="prod-info-div">
                            <div class="prod-info-title">
                                <h3>尋香奇遊的</h3>
                                <h1>夢幻花境</h1>
                                <p>Dreamscape Bloom</p>
                                <small>花香調Floral | 前調雛菊、中調玫瑰、後調廣藿香</small>
                            </div>
                            <div class="prod-info-contain">
                                <div class="prod-info-contain-item">
                                    <div class="ml">30ml</div>
                                    <div class="price">NT$1,880</div>
                                    <button class="add">加入購物車</button>
                                </div>
                                <div class="prod-info-contain-item">
                                    <div class="ml">50ml</div>
                                    <div class="price">NT$2,880</div>
                                    <button class="add">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prod-contain">
                        <h4>徜徉於花香與夢境的神奇領域，<br />
                            尋覓屬於我獨特芳香。</h4>
                        <p>香氛如詩般編織著回憶的線索，<br />
                            一瓶香水，一場夢幻之旅。</p>
                    </div>
                    <div class="marquee-container">
                        <div class="marquee-content">
                            Chasing the Wind, Unveiling Mysteries - Embark on a Warm and Mysterious Journey Through the Woods
                            Chasing the Wind, Unveiling Mysteries - Embark on a Warm and Mysterious Journey Through the Woods
                        </div>
                    </div>
                </section>
                <section class="dream-img">
                    <figure class="circle"><img src="./images/prod-circle-soul.svg" alt="" /></figure>
                    <figure class="arrow-down"><img src="./images/prod-arrow-down.svg" alt="" /></figure>
                    <figure class="small-dream"><img src="./images/prod-dream.png" alt="" /></figure>
                    <figure class="small-dream-bg"><img src="./images/main_bg1.jpg" alt="" /></figure>
                </section>
                <section class="prod-story-container">
                    <div class="prod-story-title">
                        <div class="story-title-CN">
                            <p>香氛的靈感</p>
                            <h2>香水故事</h2>
                        </div>
                        <p class="prod-story-title-ENG">the story about the perfume</p>
                    </div>
                    <div class="story-contain">
                        <div class="prod-story">
                            <div>
                                <h4>在春日晨光的溫柔中</h4>
                                <p>當初春的晨光柔和地灑落，你開啟了一段春天的浪漫之旅。春日清晨，伴隨著雛菊的清新氣息，輕撫過你的面龐，喚醒心中對春天美好的期待，引領你走進這片充滿生機與浪漫的花園。</p>
                            </div>
                            <div>
                                <div class="img-border">
                                    <figure><img src="./images/prod-story-1.jpg" alt="" /></figure>
                                </div>
                            </div>

                        </div>
                        <div class="prod-story">
                            <div></div>
                            <div class="prod-story-right">
                                <h4>在玫瑰的魅力中尋幽</h4>
                                <p>這片花園裡，玫瑰以其醉人的香氣和繽紛的色彩在春光中綻放。你隨著這股芬芳，漫步於花叢之間，沉浸在春天的魅力和悠閒中。</p>
                            </div>
                        </div>
                        <div class="prod-story">
                            <div>
                                <h4>廣藿香與綠葉的和諧共鳴</h4>
                                <p>在這片春日花園中，你發現了廣藿香的深沉香氣與新鮮綠葉的清新相結合。空氣中充滿了廣藿香的神秘與綠葉的活力，創造出一種平衡而愉悅的氛圍。你在這片角落中靜靜地享受著春日的悠閒時光。</p>
                            </div>
                            <div>
                                <figure class="right-photo3"><img src="./images/prod-story-2.jpg" alt="" /></figure>
                            </div>
                        </div>
                        <div class="prod-story">
                            <div class="prod-story-4">

                                <figure class="left-photo4-2">
                                    <img src="./images/prod-story-3.jpg" alt="" />
                                </figure>
                                <figure class="left-photo4">
                                    <img src="./images/prod-story-3-frame.svg" alt="" />
                                </figure>
                            </div>
                            <div class="prod-story-right">
                                <h4>春天浪漫之旅的香氛</h4>
                                <p>這款香水融合了雛菊的清新、玫瑰的浪漫與廣藿香的深邃，完美地捕捉了春天浪漫之旅的精髓。它將春日花園的美好瞬間固定在每一滴香水中。</p>
                            </div>
                        </div>
                        <div class="prod-story">
                            <div class="prod-story-left">
                                <h4>你的春天野餐旅程</h4>
                                <p>讓這款香水成為你春日野餐旅程的理想伴侶。每次噴灑，都仿佛重現春日野餐的每一個愉悅瞬間，帶你進入一個充滿生機與浪漫的夢幻世界。這款香水不只是一種香氛，它象徵著你在春日旅程中所體驗的每一刻美好回憶。
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div class="prod-story-last">
                        沉浸在春日的浪漫中，去感受、去體驗這個世界所賦予的美好和可能性。<br />
                            這款香水將成為你在春日浪漫之旅中的完美伴侶，引領你踏上一段充滿愉悅和探索的新旅程。
                            <figure><img src="./images/prod-story-last-circle-pink.svg" alt="" /></figure>
                    </div>

                </section>
                <section class="prod-notes">
                    <div class="prod-notes-title">

                        <figure class="note-time"><img src="./images/prod-note-time-pink.svg" alt="" /></figure>
                        <h2>香調輪廓</h2>

                    </div>
                    <div class="prod-note-contain">
                        <div class="top">
                            <h2>香調</h2>
                            <h3>花香調Floral</h3>
                            <figure class="top-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        </div>
                        <div class="bottom">
                            <div>
                                <h2>前調</h2>
                                <h3>雛菊</h3>
                            </div>
                            <figure class="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                            <div>
                                <h2>中調</h2>
                                <h3>玫瑰</h3>
                            </div>
                            <figure class="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                            <div>
                                <h2>後調</h2>
                                <h3>廣藿香</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="prod-material">
                    <div class="prod-material-contain">
                        <div class="material-info-div">
                            <div class="material-name">
                                <h4>雛菊</h4>
                                <p>Daisy</p>
                            </div>
                            <div class="material-info">
                                <p><span>香氣特性｜</span>雛菊散發出清新芬芳，如同微風拂過的溫柔香氛。它帶來淡雅、清新的感覺，讓人聯想到春日的芬芳和自然的清新。</p>
                            </div>
                            <div class="material-info">
                                <p><span>象徵意義｜</span>雛菊象徵著純潔、忠誠與希望。其細小的花朵代表著純潔無瑕的美，而它們的堅韌生存也暗示著對抗逆境的勇氣。</p>
                            </div>
                        </div>
                        <div class="material-info-div">
                            <div class="material-name">
                                <h4>玫瑰</h4>
                                <p>Rose</p>
                            </div>
                            <div class="material-info">
                                <p><span>香氣特性｜</span>玫瑰花散發出獨特的、甜美而芳香的香氣，具有深厚的花香和微妙的香辛料調。</p>
                            </div>
                            <div class="material-info">
                                <p><span>象徵意義｜</span>玫瑰象徵著愛、浪漫和美麗。在文學、藝術和文化中，玫瑰經常被視為愛情的象徵，並與女性之美相聯繫。</p>
                            </div>
                        </div>
                        <div class="material-info-div">
                            <div class="material-name">
                                <h4>廣藿香</h4>
                                <p>Patchouli</p>
                            </div>
                            <div class="material-info">
                                <p><span>香氣特性｜</span>廣藿香散發出濃郁、深沉、帶有木質和土壤氣息的香氣。其香調屬於地中海調，具有一種迷人的、持久的香味。</p>
                            </div>
                            <div class="material-info">
                                <p><span>象徵意義｜</span>廣藿香香氣被認為有助於提升心靈平靜，被廣泛用於冥想和舒緩壓力的環境中。</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="prod-photo">
                    <div class="prod-photo-all">
                        <figure class="p1"><img src="./images/prod-story-1.jpg" alt="" /></figure>
                        <figure class="p2"><img src="./images/prod-story-1.jpg" alt="" /></figure>
                        <div class="prod-photo-small">
                            <figure><img src="./images/prod-story-1.jpg" alt="" /></figure>
                            <figure><img src="./images/prod-story-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                    <p>warm, natural and comfortable</p>
                </section>
                <section class="prod-function">
                    <div class="prod-function-title">
                        <div class="prod-function-title-CN">
                            <p>香氛的藝術</p>
                            <h2>使用方式</h2>
                        </div>
                        <div class="prod-function-title-ENG">
                            Instructions
                        </div>
                    </div>
                    <div class="prod-function-p">
                        香水能夠強烈地展現您的獨特風格並創造難忘的印象。不論您偏好鮮明濃郁還是
                        細膩柔和的香調，選擇合適的香水不僅能增添您的魅力，還能提升自信感。
                    </div>
                    <div class="prod-function-div">
                        <div class="prod-function-info">
                            <div class="prod-function-img">
                                <figure><img src="./images/prod-women1.svg" alt="" /></figure>
                            </div>
                            <div class="prod-function-content">
                                <h3>手腕</h3>
                                <p>手腕內側為最多人會想到的部位，若工作中長時間手腕會靠在桌上或手上有配戴飾品，建議可以噴手腕外側，也有另一個說法是手腕內側酸鹼值偏低，酸性會影響香水的香調，因此建議噴在手腕外側。</p>
                            </div>
                        </div>
                    </div>
                    <div class="prod-function-div">
                        <div class="prod-function-info reverse">
                            <div class="prod-function-img">
                                <figure><img src="./images/prod-women2.svg" alt="" /></figure>
                            </div>
                            <div class="prod-function-content">
                                <h3>手腕</h3>
                                <p>手腕內側為最多人會想到的部位，若工作中長時間手腕會靠在桌上或手上有配戴飾品，建議可以噴手腕外側，也有另一個說法是手腕內側酸鹼值偏低，酸性會影響香水的香調，因此建議噴在手腕外側。</p>
                            </div>
                        </div>
                    </div>
                    <div class="prod-function-div">
                        <div class="prod-function-info">
                            <div class="prod-function-img">
                                <figure><img src="./images/prod-women3.svg" alt="" /></figure>
                            </div>
                            <div class="prod-function-content">
                                <h3>手腕</h3>
                                <p>手腕內側為最多人會想到的部位，若工作中長時間手腕會靠在桌上或手上有配戴飾品，建議可以噴手腕外側，也有另一個說法是手腕內側酸鹼值偏低，酸性會影響香水的香調，因此建議噴在手腕外側。</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="prod-find">
                    <div class="find-CN">
                        <p>找到屬於你的故事</p>
                        <p class="find-ENG">Perfume sample</p>
                    </div>
                    <div class="prod-find-btn">
                        <Link to="/prod">
                            <p>索取試用</p>
                        </Link>
                    </div>
                </section>
            </body>
        </div>
    )

}
export default ProdDream;