<template>
  <div>
    <h2>Get all lipstick</h2>
    <h4>จํานวนลิปสติก {{ lipsticks.length }}</h4>
    <hr />
    <p>
      <button v-on:click="navigateTo('/lipstick/create')">
          สร้างข้อมูลลิปสติก
        </button>
      </p>

    <div v-for="lipstick in lipsticks" v-bind:key="lipstick.id">
      <p>แบรนด์: {{ lipstick.nameBrand }}</p>
      <p>รุ่น : {{ lipstick.model }}</p>
      <p>
        <button v-on:click="navigateTo('/lipstick/' + lipstick.id)">
          ดูข้อมูลลิปสติก
        </button>
        <button v-on:click="navigateTo('/lipstick/edit/' + lipstick.id)">
          แก้ไขข้อมูลลิปสติก
        </button>
        <button v-on:click="deleteLipstick(lipstick)">ลบข้อมูลลิปสติก</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import LipsticksService from "@/services/LipsticksService";

export default {
  data() {
    return {
      lipsticks: [],
    };
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    
  async deleteLipstick(lipstick) {
        let result = confirm("Want of delete?")
        if (result) {
        try {
          await LipsticksService.delete(lipstick);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
      },
      async refreshData() {
        this.lipsticks = (await LipsticksService.index()).data;
      }
    },
     async created() {
      try {
        this.lipsticks = (await LipsticksService.index()).data;
      } catch (error) {
        console.log(error);
      }
    },
};
  </script>
  <style scoped></style>
 

  