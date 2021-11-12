<template >
  <div>
    <v-container>
      <v-row>
        <v-col xl="5" md="8" sm="12" offset-xl="5">
          <v-card id="p-10">
            <v-card-title>
              <h2>Add Student</h2>
            </v-card-title>
            <v-form v-model="valid" ref="form">
              <!-- <label for="">..Enter Name</label> -->
              <v-text-field
                placeholder="Enter Your Name"
                :rules="nameRules"
                v-model="name"
                required
              ></v-text-field>
              <v-text-field
                placeholder="Enter Your Age"
                type="number"
                :rules="ageRules"
                v-model="age"
                required
              ></v-text-field>
              <v-text-field
                placeholder="Enter Your Country"
                v-model="country"
                :rules="countryRules"
              ></v-text-field>
              <v-btn id="text-primary" class="mt-5" v-on:click="updateData()"
                >Update</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "edit-data",
  data() {
    return {
      valid: true,
      id: "",
      name: "",
      age: "",
      country: "",
      nameRules: [(v) => !!v || "Name is required"],
      ageRules: [(v) => !!v || "Age is required"],
      countryRules: [(v) => !!v || "Country is required"],
    };
  },
  async mounted() {
    this.id=this.$route.params.id;
    const response=await axios.put(`http://127.0.0.1:8000/api/edit/${this.id}`)
    this.name=response.data.name;
    this.age=response.data.age;
    this.country=response.data.country;
  },
  methods: {
      async updateData(){
          const data={
              name:this.name,
              age:this.age,
              country:this.country
          }

          const response=await axios.post(`http://127.0.0.1:8000/api/update/${this.id}`,data);
          if(response.data.success){
              alert(response.data.success)
              this.$router.push('/')
          }
      }
  },
};
</script>
<style lang="">
</style>