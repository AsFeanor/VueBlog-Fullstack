<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Posts</h2>
      <button @click="fetchPosts">Fetch Posts</button>
      <ul>
        <li v-for="post in posts" :key="post._id">
          <h3 style="color:red">{{ post.title }}</h3>
          <p>{{ post.content }}</p>
          <button @click="deletePost(post._id)" > delete </button>
          <Router-link :to="{ name: 'UpdateBlog', params: { id: post._id } }">Düzenle</Router-link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Create a Post</h2>
      <form @submit.prevent="createPost">
        <input v-model="newPost.title" placeholder="Title" />
        <textarea v-model="newPost.content" placeholder="Content"></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      newPost: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    },
    async deletePost(postId) {
  try {
    const response = await this.$axios.delete(`http://localhost:3000/api/posts/${postId}`);
    if (response.status === 200) {
      this.posts = this.posts.filter(post => post._id !== postId);
      console.log('Post deleted successfully');
    } else {
      console.error('Failed to delete post. Server responded with status:', response.status);
    }
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
},


    async createPost() {
      try {
        const response = await this.$axios.post('http://localhost:3000/api/posts', this.newPost);
        this.posts.push(response.data);
        this.newPost.title = '';
        this.newPost.content = '';
      } catch (error) {
        console.error('Failed to create post:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Stil kodları buraya */
</style>
