<template>
  <div>
    <h2>Get all users</h2>
    <p><button v-on:click="logout">Logout</button></p>
    <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
    <hr />
    <!-- ลูปตามจำนวน id (primary key) -->
    <div v-for="user in users" v-bind:key="user.id">
      <p>ID : {{ user.id }}</p>
      <p>ชื่อ : {{ user.name }}</p>
      <p>นามสกุล : {{ user.lastname }}</p>
      <!-- <p>Status : {{ user.status }}</p>
          <p>Type : {{ user.type }}</p> -->
      <p>
        <button v-on:click="navigateTo('/user/' + user.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/user/edit/' + user.id)">
          edit user
        </button>
        <button v-on:click="deleteUser(user)">delete user</button>
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: []
    };
  },

  methods: {
    navigateTo(route) {
      // ตรง$router ต้องตั้งให้ตรง folder ของ route
      this.$router.push(route);
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login"
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },

    async deleteUser(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },

    async refreshData() {
      this.users = (await UsersService.index()).data;
    }
  },

  async created() {
    this.users = (await UsersService.index()).data;
  }
};
</script>

<style scoped></style>
