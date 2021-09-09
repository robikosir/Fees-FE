<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand class="text-primary" @click="$router.push('/')"
      ><b>Pokuty</b></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="isAuthenticated()">
        <b-nav-item @click="$router.push('/')">My Teams</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="isAuthenticated()" class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            {{ $store.state.auth.user.first_name }}
          </template>
          <b-dropdown-item @click="logoutClicked">Log Out</b-dropdown-item>
          <b-dropdown-item @click="$router.push('/user/change-password')">
            Change password
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push('/user/profile')">
            Edit profile
          </b-dropdown-item>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapActions("auth", ["logout"]),
    logoutClicked() {
      this.logout();
    },
  },
};
</script>

<style scoped></style>
