<template>
    <section class="profile">
        <section class="top-card-layout">
            <div class="top-card-layout__entity-info-container">
                <div class="top-card-layout__entity-info">
                    <h1 class="top-card-layout__title">{{ people.firstname }} {{ people.lastname }}</h1>
                    <h2
                        class="top-card-layout__headline"
                    >{{experiences[0].title}} chez {{experiences[0].company.name}}</h2>
                    <h3 class="top-card-layout__first-subline">
                        <span
                            class="top-card__subline-item"
                        >Région de {{ people.city }}, {{ people.country }}</span>
                    </h3>
                </div>
            </div>
        </section>
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
                    <a class="result-card__image-link">
                        <img
                            v-if="experience.company.logo !== null"
                            :src="experience.company.logo"
                            :alt="'Logo-' + experience.company.name"
                            class="artdeco-entity-image experience-item artdeco-entity-image--company experience-item--company artdeco-entity-image--square-4 experience-item--square-4 result-card__image lazy-loaded"
                        />
                    </a>
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
                            <div class="experience-item__description experience-item__meta-item">
                                <div class="show-more-less-text show-more-less-description">
                                    <p class="show-more-less-text__text--less"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </section>
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
