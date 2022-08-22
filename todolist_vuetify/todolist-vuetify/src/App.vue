<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
       <v-spacer></v-spacer>
      <div class="d-flex align-center">

 <v-tabs
    fixed-tabs
    background-color="primary"
    dark
  >
    <v-tab to="/tasks" style="color: white" exact class ="item routerLink">        
     
       <i class="fa-solid fa-plus"></i>Tasks
 
    </v-tab>
    <v-tab to="/tasks/add" style="color: white" exact class ="item routerLink">

         <i class = "tasks icon"> </i> Add 
  
    </v-tab>
  </v-tabs>
         
     
      </div>
      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-main>
      <v-container>
        <v-col>
            <router-view/>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.routerLink{
     text-decoration: none;
 }
 </style>
