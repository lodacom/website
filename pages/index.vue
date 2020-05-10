<template>
    <b-row>
        <b-col cols="3">
            <div>
                <strong>Nom</strong>
                : {{people.lastname}}
            </div>
            <div>
                <strong>Prénom</strong>
                : {{people.firstname}}
            </div>
            <div>
                <strong>Ville</strong>
                : {{people.city}}
            </div>
            <div>
                <strong>Pays</strong>
                : {{people.country}}
            </div>
        </b-col>
        <b-col cols="9"></b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import People from './model/people'

@Component
export default class Nuxt extends Vue {
    asyncData(context: any) {
        return { people: new People() }
    }
}
</script>

<style></style>
