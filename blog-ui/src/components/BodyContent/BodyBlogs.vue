<template>


    <div class="body_blogs">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="info">
                        <header>
                            <h2 class="main-title title underline-effect"><a>Crafting Engaging CSS Animations step by
                                    step guide</a></h2>
                        </header>
                        <div class="post-excerpt">
                            <p>In the realm of technology blogging, captivating your audience goes beyond just the
                                written word. Incorporating eye-catching CSS animations can elevate your content and
                                provide a dynamic user…</p>
                        </div>
              
                            <div class="info-author "> <a href="#" class="author"><p>Jonathan Doe</p></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>





<style scoped>
.container {
    margin: 100px auto 0 auto;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 1000px;
}
.info {
    margin-top: 40px;
  
}

.main-title {
    font-size: 1.8rem;
    color: rgb(106,78,233);
    padding-left: 10px;
}

.post-excerpt  p{
    font-size: 1rem;
    margin-top: 15px;
    color: rgb(112, 111, 111);
    text-indent:30px;
}
.info-author p{
    text-align: end;
    font-size: 1rem;
}
.info .author{
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 600;
}
@media only screen and (max-width: 1140px) {
  .container{
    max-width: 900px;
  }
  .main-title {
    font-size: 1.7rem;
    padding-left: 10px;
}
  .post-excerpt  p{
    font-size: .9rem;
    margin-top: 15px;
    text-indent:30px;
}
}
@media only screen and (max-width: 975px) {
  .container{
    max-width: 800px;
  }
  .main-title {
    font-size: 1.6rem;
    padding-left: 10px;
}
  .post-excerpt  p{
    font-size: .9rem;
    margin-top: 15px;
    text-indent:30px;
}
.info-author p{
    font-size: .9rem;
}

}

@media only screen and (max-width: 865px) {
  .container{
    max-width: 700px;
  }
  .main-title {
    font-size: 1.4rem;
    padding-left: 10px;
}
  .post-excerpt  p{
    font-size: .8rem;
    margin-top: 15px;
    text-indent:30px;
}
.info-author p{
    font-size: .8rem;
}
}

@media only screen and (max-width: 745px) {
  .container{
    max-width: 600px;
  }
  .main-title {
    font-size: 1.4rem;
    padding-left: 10px;
}
  .post-excerpt  p{
    font-size: .7rem;
    margin-top: 15px;
    text-indent:30px;
}
.info-author p{
    font-size: .7rem;
}

}
@media only screen and (max-width: 500px) {
  .container{
    margin: 50px auto 0 auto;
    max-width: 350px;
  }
  .main-title {
    font-size: 1rem;
    padding-left: 10px;
}
  .post-excerpt  p{
    font-size: .6rem;
    margin-top: 15px;
    text-indent:30px;
}
.info-author p{
    font-size: .6rem;
}

}

</style>