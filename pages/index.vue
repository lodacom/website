<template>
    <section class="profile">
        <card :people="people" :experience="experiences[0]" />
        <section class="experience pp-section">
            <header class="experience__header pp-section__header">
                <h2 class="experience__heading pp-section__heading">Expérience</h2>
            </header>
            <ul class="experience__list">
                <li
                    v-for="experience in experiences"
                    :key="experience.id"
                    class="result-card experience-item"
                >
                    <company :company="experience.company" />
                    <div class="result-card__contents experience-item__contents">
                        <h3 class="result-card__title experience-item__title">{{ experience.title }}</h3>
                        <h4 class="result-card__subtitle experience-item__subtitle">
                            <a
                                class="result-card__subtitle-link experience-item__subtitle-link"
                                href="#"
                            >{{ experience.company.name }}</a>
                        </h4>
                        <div class="result-card__meta experience-item__meta">
                            <p class="experience-item__duration experience-item__meta-item">
                                <span class="date-range">
                                    <time
                                        class="date-range__start-date"
                                    >{{ experience.fromDate | formatDate('MMM YYYY') }}</time>
                                    -
                                    <time
                                        class="date-range__end-date"
                                        v-if="experience.toDate != null"
                                    >{{ experience.toDate | formatDate('MMM YYYY') }}</time>
                                    <time class="date-range__end-date" v-else>Aujourd'hui</time>
                                    <span
                                        class="date-range__duration"
                                    >{{ experience.durationExperience }}</span>
                                </span>
                            </p>
                            <p
                                class="experience-item__location experience-item__meta-item"
                            >Région de {{ experience.company.city }}, {{ experience.company.country }}</p>
                            <project
                                v-for="project in experience.projects"
                                :key="project.id"
                                :project="project"
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '../components/Card.vue'
import Company from '../components/Company.vue'
import Project from '../components/Project.vue'
import People from './model/people'
import ExperienceService from './service/experience-service'

@Component({
    components: {
        Card,
        Company,
        Project
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

<style></style>
