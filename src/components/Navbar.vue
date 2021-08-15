<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand class="text-primary" @click="$router.push('/')"
      ><b>Pokuty</b></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="isAuthenticated()">
        <b-nav-item href="#">Your team</b-nav-item>
        <b-nav-item href="#">Standings</b-nav-item>
        <b-nav-item href="#">Player's prices</b-nav-item>
        <b-nav-item href="#">Next matches</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="isAuthenticated()" class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            {{ username() }}
          </template>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/login')">Login</b-nav-item>
          <b-nav-item @click="$router.push('/register')">Register</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>

<style scoped></style>
