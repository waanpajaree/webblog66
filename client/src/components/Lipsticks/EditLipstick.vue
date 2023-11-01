<template>
  <div>
    <h1>Edit Lipstick</h1>
    <form v-on:submit.prevent="editLipstick">
      <p>แบรนด์ : <input type="text" v-model="lipstick.nameBrand" /></p>
      <p>รุ่น : <input type="text" v-model="lipstick.model" /></p>
      <p>สี : <input type="text" v-model="lipstick.Color" /></p>
      <p>ชนิด: <input type="text" v-model="lipstick.Type" /></p>
      <p>ราคา : <input type="text" v-model="lipstick.Price" /> บาท</p>
      <p>จำนวน : <input type="text" v-model="lipstick.Quantity" /></p>
      <p>
        คุณสมบัติ : <input type="text" v-model="lipstick.AdditionalFeatures" />
      </p>
      <p><button class="button" type="submit">edit lipstick</button></p>
    </form>
    <hr />
  <div>
  <p>แบรนด์: {{ lipstick.nameBrand }}</p>
    <p>รุ่น : {{ lipstick.model }}</p>
    <p>สี : {{ lipstick.Color }}</p>
    <p>ชนิด: {{ lipstick.Type }}</p>
    <p>ราคา: {{ lipstick.Price }}</p>
    <p>จำนวน : {{ lipstick.Quantity }}</p>
    <p>คุณสมบัติ: {{ lipstick.AdditionalFeatures }}</p>
  </div>
</div>
</template>
<script>
import LipsticksService from "@/services/LipsticksService";
export default {
  data() {
    return {
      lipstick: {
        nameBrand:"",
        model:"",
        Color:"",
        Type:"",
        Price:"",
        Quantity:"",
        AdditionalFeatures:""
      },
    };
  },
  methods: {
    async editLipstick() {
      try {
        await LipsticksService.put(this.lipstick);
        this.$router.push({
          name:'lipsticks'
        })
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let lipstickId = this.$route.params.lipstickId;
      this.lipstick = (await LipsticksService.show(lipstickId)).data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style scoped></style>
