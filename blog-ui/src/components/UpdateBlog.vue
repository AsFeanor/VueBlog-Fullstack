<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async fetchPost() {
      try {
        const response = await this.$axios.get(
          `http://localhost:3000/api/posts/${this.$route.params.id}`
        );
        this.post = response.data;
        console.log(this.post._id, this.$route.params.id);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    },
    async UpdatePost() {
      try {
        const response = await this.$axios.put(
          `http://localhost:3000/api/posts/${this.$route.params.id}`,
          this.post
        );
        console.log("Post updated successfully:", response.data);

        this.$router.push("/");
      } catch (error) {
        console.error("Failed to update post:", error);
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<template>
  <div>
    <div class="container add_blog_container p-1">
      <div class="row">
        <div class="col-12">
          <div class="info">
            <header>
              <input
                class="form-control mb-2"
                type="text"
                v-model="post.title"
                placeholder="Title"
              />
            </header>
            <div class="post-excerpt">
              <textarea
                class="form-control"
                v-model="post.content"
                placeholder="description"
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div class="info-author">
              <button class="btn btn-primary mt-2" @click="UpdatePost">
                Düzenle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
    
    .add_blog_container {
        margin-top: 200px;
    }
</style>