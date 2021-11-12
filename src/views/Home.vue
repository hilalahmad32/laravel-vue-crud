<template>
  <div>
    <v-container>
      <v-card id="d-flex">
        <v-card-title>
          <h3>Student ( 4 )</h3>
        </v-card-title>
        <v-card-title>
          <router-link to="/add-data"
            ><v-btn id="text-primary" color="pink">Create</v-btn></router-link
          >
        </v-card-title>
      </v-card>
      <v-text-field placeholder="Search Here ...." v-model="search"></v-text-field> <v-btn v-on:click="searchData()">search</v-btn> <br>
      {{search}}
      <v-simple-table id="m-30">
        <!-- <template > -->
        <thead>
          <tr class="bg-dark">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody v-for="student in students" :key="student.id">
          <tr class="text-center">
            <td>{{student.id}}</td>
            <td>{{student.name}}</td>
            <td>{{student.age}}</td>
            <td>{{student.country}}</td>
            <td><router-link :to="'/edit-data/'+student.id"><v-btn outlined id="text-primary">Edit</v-btn></router-link></td>
            <td><v-btn v-on:click="deleteData(student.id)" outlined id="text-danger">Delete</v-btn></td>
          </tr>
        </tbody>
        <!-- </template> -->
      </v-simple-table>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      students: {},
      search:""
    };
  },
  methods: {
    async getData() {
      const response = await axios.get("http://127.0.0.1:8000/api/get");
      this.students=response.data;
    },
    async searchData(){
        const response=await axios.get(`http://127.0.0.1:8000/api/search/${this.search}`)
        console.log(response)
        this.students=response.data
    },
    async deleteData(id){
        const response=await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
        if(response.data.success){
            alert(response.data.success)
            this.getData()
        }
    }
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="css">
#d-flex {
  display: flex;
  justify-content: space-between;
}

#text-primary {
  background-color: rgb(58, 58, 231);
  color: white;
}
#text-danger {
  background-color: rgb(231, 58, 58);
  color: white;
}

#text-white {
  color: white;
}

#m-30 {
  margin-top: 30px;
}
</style>