<template>
  <div>
  <div>
    <h1>Create Lipstick</h1>
    <form v-on:submit.prevent="createLipstick">
      <p>แบรนด์ : <input type="text" v-model="lipstick.nameBrand" /></p>
      <p>รุ่น : <input type="text" v-model="lipstick.model" /></p>
      <p>สี : <input type="text" v-model="lipstick.Color" /></p>
      <p>ชนิด: <input type="text" v-model="lipstick.Type" /></p>
      <p>ราคา : <input type="text" v-model="lipstick.Price" /></p>
      <p>จำนวน : <input type="text" v-model="lipstick.Quantity" /></p>
      คุณสมบัติ :<input type="text" v-model="lipstick.AdditionalFeatures" />
      <p><button type="submit">create lipstick</button></p>
    </form>
  </div>
  
</div>
</template>

<script>
import LipsticksService from "@/services/LipsticksService";

export default {
  data() {
    return {
      lipstick: {
        nameBrand: "",
        model: "",
        Color: "",
        Type: "",
        Price: "",
        Quantity: "",
        AdditionalFeatures: ""
      },
    };
  },
  methods: {
    async createLipstick() {
      try {
        await LipsticksService.post(this.lipstick);
        this.$router.push({
          name: "lipsticks",
        });
        
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
