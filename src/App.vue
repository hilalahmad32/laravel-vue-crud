<template>
  <div>
    <v-container fluid class="bg-dark p-10">
      <v-container id="p-10">
        <h1 class="text-center text-white">Laravel Vue Crud</h1>
      </v-container>
    </v-container>
    <router-view />
  </div>
</template>

<style>
.bg-dark{
  background-color: #2f2f2f;
  color: white;
}
.text-white{
  color: white;
}
.text-center{
  text-align: center;
}
#p-10{
  padding: 30px;
}
</style>
