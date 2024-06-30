<template>
    <div>
       <h1>Blog Düzenle</h1>

       <form @submit.prevent="UpdatePost" >
          <input type="text" v-model="post.title" placeholder="Title" />
          <textarea v-model="post.content" placeholder="Content"></textarea>

          <button   type="submit">Update Post</button>
        </form>

    </div>
</template>


<script>

export default {
  name: 'UpdateBlog',
  data() {
    return {
      post: {}
    }
  },
  methods: {
    async fetchPost() {
      try {
        const response = await this.$axios.get(`http://localhost:3000/api/posts/${this.$route.params.id}`);
        this.post = response.data;
        console.log(this.post._id , this.$route.params.id);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    },
    async UpdatePost() {
  try {
    console.log('Updating post with ID:', this.$route.params.id);
    console.log('Data to send:', this.post); // Post verisi kontrolü

    const response = await this.$axios.put(`http://localhost:3000/api/posts/${this.$route.params.id}`, this.post);
    console.log('Post updated successfully:', response.data);

    this.$router.push("/");
  } catch (error) {
    console.error('Failed to update post:', error);
  }
}
    

  },
  mounted() {
    this.fetchPost();
  }
}


</script>