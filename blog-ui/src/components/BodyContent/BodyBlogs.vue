<script >
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      newPost: {
        title: '',
        content: ''
      },
      showPosts: false
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/posts');
        this.posts = response.data;
        console.log(this.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    },
    async createPost() {
      try {
        const response = await this.$axios.post('http://localhost:3000/api/posts', this.newPost);
        console.log(response.data);
        this.posts.push(response.data);
        this.newPost.title = '';
        this.newPost.content = '';
      } catch (error) {
        console.error('Failed to create post:', error);
      }
    },
    toggleShow ()  {
      this.showPosts = !this.showPosts
    }
   
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>



<template>
  <div class="body_blogs">
<div class="container">
  <button @click="toggleShow" class="btn btn-primary" >Ekle+</button>

</div>
   <div v-show="showPosts" class="container p-1">
      <div class="row">
        <div  class="col-12">
          <div class="info">
            <header>
              <input class="form-control mb-2" type="text" v-model="newPost.title" placeholder="Title">

            </header>
            <div class="post-excerpt">
             <textarea class="form-control" v-model="newPost.content"  cols="30" rows="5"></textarea>
            </div>

            <div class="info-author">
              <button class="btn btn-primary" @click="createPost">Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="blog in posts" :key="blog.id" class="container blog_container">
      <div  class="row">
        <div  class="col-12">
          <div class="info">
            <header>
              <h2 class="main-title title underline-effect">
                <a>{{ blog.title }}</a>
              </h2>
            </header>
            <div class="post-excerpt">
              <p>{{ blog.content.slice(0,100) }}</p>
            </div>

            <div class="info-author">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<style scoped>
.blog_container {
  margin: 50px auto 0 auto;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 1000px;
}
.info {
  margin-top: 10px;
  padding: 20px;
}

.main-title {
  font-size: 1.8rem;
  color: rgb(106, 78, 233);
  padding-left: 10px;
}

.post-excerpt p {
  font-size: 1rem;
  margin-top: 15px;
  color: rgb(112, 111, 111);
  text-indent: 30px;
}
.info-author p {
  text-align: end;
  font-size: 1rem;
}
.info .author {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 600;
}
@media only screen and (max-width: 1140px) {
  .container {
    max-width: 900px;
  }
  .main-title {
    font-size: 2rem;
    padding-left: 10px;
  }
  .post-excerpt p {
    font-size: 1.2rem;
    margin-top: 15px;
    text-indent: 30px;
  }
}
@media only screen and (max-width: 975px) {
  .container {
    max-width: 800px;
  }
  .main-title {
    font-size: 1.6rem;
    padding-left: 10px;
  }
  .post-excerpt p {
    font-size: 0.9rem;
    margin-top: 15px;
    text-indent: 30px;
  }
  .info-author p {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 865px) {
  .container {
    max-width: 700px;
  }
  .main-title {
    font-size: 1.4rem;
    padding-left: 10px;
  }
  .post-excerpt p {
    font-size: 0.8rem;
    margin-top: 15px;
    text-indent: 30px;
  }
  .info-author p {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 745px) {
  .container {
    max-width: 600px;
  }
  .main-title {
    font-size: 1.4rem;
    padding-left: 10px;
  }
  .post-excerpt p {
    font-size: 0.7rem;
    margin-top: 15px;
    text-indent: 30px;
  }
  .info-author p {
    font-size: 0.7rem;
  }
}
@media only screen and (max-width: 500px) {
  .container {
    margin: 50px auto 0 auto;
    max-width: 350px;
  }
  .main-title {
    font-size: 1.3rem;
    padding-left: 10px;
  }
  .post-excerpt p {
    font-size: 0.9rem;
    margin-top: 15px;
    text-indent: 30px;
  }
  .info-author p {
    font-size: 0.6rem;
  }
}
</style>