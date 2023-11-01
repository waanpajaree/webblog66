<template>
  <div>
    <h1>Get lipstick By Id</h1>
    <p>แบรนด์: {{ lipstick.nameBrand }}</p>
    <p>รุ่น : {{ lipstick.model }}</p>
    <p>สี : {{ lipstick.Color }}</p>
    <p>ชนิด: {{ lipstick.Type }}</p>
    <p>ราคา: {{ lipstick.Price }}</p>
    <p>จำนวน : {{ lipstick.Quantity }}</p>
    <p>คุณสมบัติ: {{ lipstick.AdditionalFeatures }}</p>
    <p><button class="button" @click="navigateTo('/lipsticks')">back</button></p>
  </div>
</template>
<script>
import LipsticksService from "@/services/LipsticksService";

export default {
  data() {
    return {
      lipstick:"",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let lipstickId = this.$route.params.lipstickId;
      this.lipstick = (await LipsticksService.show(lipstickId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>
