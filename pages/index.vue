<template>
    <b-row>
        <b-col cols="3">
            <div>
                <strong>Nom</strong>
                : {{ people.lastname }}
            </div>
            <div>
                <strong>Prénom</strong>
                : {{ people.firstname }}
            </div>
            <div>
                <strong>Ville</strong>
                : {{ people.city }}
            </div>
            <div>
                <strong>Pays</strong>
                : {{ people.country }}
            </div>
        </b-col>
        <b-col cols="9">
            <b-row v-for="experience in experiences" :key="experience.id">
                <b-col cols="3">
                    <div>
                        <img
                            v-if="experience.company.logo !== null"
                            :src="experience.company.logo"
                            :alt="'Logo-' + experience.company.name"
                            height="48"
                            width="48"
                        />
                    </div>
                    <div>{{ experience.company.name }}</div>
                </b-col>
                <b-col cols="9">
                    <b-row>
                        <b-col>
                            {{ experience.fromDate | formatDate('MMM YYYY') }} -
                            <span
                                v-if="experience.toDate != null"
                            >{{ experience.toDate | formatDate('MMM YYYY') }}</span>
                            <span v-else>Aujourd'hui</span>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import People from './model/people'
import ExperienceService from './service/experience-service'

@Component
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

<style></style>
