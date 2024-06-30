<template>
    <div id="banner" class="banner_container">

        <div class="row">

            <div class="col-md-6 order-md-1 order-2">
                <div class="banner_info_container">
<h1 >Hi, <span>I’m Jonathan Doe</span> </h1>
<p>I’m a <strong>design technologist</strong> in Atlanta. I like working on the front-end of the web. This is my site, <strong>Zento</strong> where I blog, share and write tutorials…</p>
                </div>
            </div>
            <div class="col-md-6 order-md-2 order-1">
                <div class="banner_img_container d-flex justify-content-center">
                    <img src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/about-2.webp" alt="">
                </div>
            </div>
        </div>



    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
#banner {
    margin-top: 200px;
}
.banner_info_container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.banner_info_container span {
    color: #6A4EE9;
    font-weight: bold;
}
.banner_info_container p {
    font-size: 17px;
    padding: 10px;
    margin: 30px 0 30px 0;
    
}
.banner_info_container h1 {
   margin-bottom: 30px;
   padding: 10px;
    
}
.banner_container {
    max-width: 1000px;
    margin: auto;
}
.blogs_btn {
    color: #6A4EE9;
    border-radius: 10px;
    font-weight: bold;
    transition: .3s ease;
    text-decoration: underline 3px;
    text-underline-offset: 5px;
}
.blogs_btn:hover {
    opacity: .8;
}

img {
    animation: morph 10s ease-in-out infinite 0s;
    width: 90%;
}


@keyframes morph {
    0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
}
@media only screen and (max-width: 500px) {
 .banner_info_container {
    text-align: center;
 }
}

</style>