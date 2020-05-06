<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Olivier Duplouy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FRA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row>
      <b-col cols="3">
        <div>
          <strong>Nom</strong>: Duplouy
        </div>
        <div>
          <strong>Prénom</strong>: Olivier
        </div>
      </b-col>
      <b-col cols="9"></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Nuxt extends Vue {}
</script>

<style></style>
