<template>
    <section class="profile">
        <card :people="people" :experience="experiences[0]" />
        <section class="pp-section">
            <header class="education__header pp-section__header">
                <h2 class="education__heading pp-section__heading">Projets</h2>
            </header>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '../../components/Card.vue'
import People from '../../components/model/people'
import ExperienceService from '../../components/service/experience-service'

@Component({
    components: {
        Card
    }
})
export default class Nuxt extends Vue {
    asyncData(context: any) {
        const expService: ExperienceService = new ExperienceService()
        expService.fetchExperiences()
        expService.orderByDate(expService.experiences)
        return {
            people: new People(),
            experiences: expService.experiences
        }
    }
}
</script>
